const { SlashCommandBuilder } = require ('discord.js');

module_exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde com Pong!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};