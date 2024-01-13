const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('whereistim')
    .setDescription('Find out where Tim is flying.'),
  async execute(interaction) {
    const apiKey = process.env.AVIATION_API_KEY;
    const { body } = await request(
      `https://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_status=active&limit=1`,
    );

    const json = await body.json();

    const data = json.data[0];

    const { flight_date } = data;
    const { arrival } = data;
    const { airline } = data;

    const boilerPlate = `I think Tim is flying to ${arrival.airport} (${arrival.iata}) on ${flight_date} with ${airline.name} (${airline.iata})`;

    await interaction.reply(boilerPlate);
  },
};
