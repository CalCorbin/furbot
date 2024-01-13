const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('define')
    .setDescription('Replies with a definition of the word you provide.')
    .addStringOption((option) =>
      option.setName('input').setDescription('The word to define.'),
    ),
  async execute(interaction) {
    // Get the word to define from the command options
    const input = interaction.options.getString('input') ?? 'No word provided';

    // Send a request to the dictionary API
    const { body } = await request(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`,
    );

    // Read the response body as JSON
    const json = await body.json();

    // Extract the word, part of speech, and definition from the response
    const response = json[0];
    const { word } = response;
    const { partOfSpeech } = response.meanings[0];
    const { definition } = response.meanings[0].definitions[0];

    // Reply with the definition
    await interaction.reply(`**${word}** (${partOfSpeech}): ${definition}`);
  },
};
