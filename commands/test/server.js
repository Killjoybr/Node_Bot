const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Retorna informações do server.'),
	async execute(interaction) {
		// interaction.guild é o objeto que representa o server em que o comando foi executado
		await interaction.reply(`Esse server é ${interaction.guild.name} atualmente conta com ${interaction.guild.memberCount} membros.`);
	},
};