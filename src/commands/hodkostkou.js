const { Command, CommandType } = require('gcommands');
const Discord = require("discord.js")
new Command({
	name: 'hodkostkou',
	description: 'Tim za tebe hodi kostkou.',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: (ctx) => {
        const randomnum = Math.floor(Math.random() * 6) + 1
        const embed = new Discord.EmbedBuilder()
        .setTitle("🎲 Hod kostkou")
        .setDescription(`Tvé číslo je **${randomnum}**`)
        .setColor("Random")
        ctx.reply({embeds: [embed]})
	}

});