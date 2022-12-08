const { Command, CommandType } = require('gcommands');
const Discord = require("discord.js")
const  ms  = require("ms")
// Create a new command with the name 'hello'
new Command({
	name: 'about',
	description: 'Ukáže ti informace o botovi',
	// GCommands Next offers different types of commands, we will only use slash and message commands here.
	type: [CommandType.SLASH, CommandType.MESSAGE],
	// The function thats executed when the user uses the command.
	run: (ctx) => {
        const embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .addFields(
        { name: "Uptime", value: ms(ctx.client.uptime, { long: true}), inline: true},
        { name: "Verze", value: "in progress", inline: true},
        { name: "Vývojář", value: "DaneeSkripter", inline: true}
            )
        ctx.reply({ embeds: [embed]})
	}
});