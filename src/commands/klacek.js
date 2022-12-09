
const { Command, CommandType } = require('gcommands');
const Discord = require("discord.js")
// Create a new command with the name 'hello'
new Command({
	name: 'prinesklacek',
	description: 'Tim ti možná přinese klacek',
	// GCommands Next offers different types of commands, we will only use slash and message commands here.
	type: [CommandType.SLASH, CommandType.MESSAGE],
	// The function thats executed when the user uses the command.
	run: (ctx) => {
		const responses = [ "Tady máš!", "Ne! Ten je teď můj..", "Chyť si mě!"]
        const num = Math.floor(Math.random() * responses.length) 
        const embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setTitle(responses[num])
        .setDescription("*Tady bude obrazek tima, na zaklade odpovedi*")
        ctx.reply({ embeds: [embed]})
	}

});