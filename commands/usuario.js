const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Desde quando?')
		.setDescription('Retorna quando o usuario entrou no server.'),
	async execute(interaction) {
		// interaction.user é o objeto que representa o usuario que rodou o comando
		// interaction.member é o objeto que representa o usuario em determinado server
		await interaction.reply(`O usuario ${interaction.user.username} juntou-se em ${interaction.member.joinedAt}.`);
	},
};