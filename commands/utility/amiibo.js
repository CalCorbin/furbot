const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('amiibo')
    .setDescription('Replies information about the provided amiibo.')
    .addStringOption((option) =>
      option.setName('name').setDescription('The Amiibo to find.'),
    ),
  async execute(interaction) {
    // Get the Amiibo to find from the command options
    const name = interaction.options.getString('name') ?? 'No name provided';

    // Send a query to the Amiibo API
    const query = new URLSearchParams({ name });
    const { body } = await request(
      `https://www.amiiboapi.com/api/amiibo/?${query}`,
    );

    // Read the response body as JSON
    const json = await body.json();

    // If no Amiibo was found, reply with a message
    if (!json.amiibo.length) {
      await interaction.reply('No Amiibo found.');
      return;
    }

    // Extract the information about the Amiibo from the response
    const response = json.amiibo[0];
    const { character } = response;
    const { gameSeries } = response;
    const { image } = response;
    const release = response.release.na;
    const { type } = response;

    // Reply with the information about the Amiibo
    const reply = `**Character:** ${character} (${type} | Released ${release || 'N/A'}) \n**Game**: ${gameSeries} \n${image}`;
    await interaction.reply(reply);
  },
};
