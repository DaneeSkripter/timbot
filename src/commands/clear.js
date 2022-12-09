const { Command, CommandType, Argument, ArgumentType } = require('gcommands');
const Discord = require("discord.js")
// Create a new command with the name 'hello'
new Command({
	name: 'sezratzpravy',
	description: 'Tim sežere tolik zpráv, kolik chceš (ale ty po 14 dnech už mu nechutnají)',
	// GCommands Next offers different types of commands, we will only use slash and message commands here.
	type: [CommandType.SLASH, CommandType.MESSAGE],
	// The function thats executed when the user uses the command.
    arguments: [
        new Argument({
            name: "pocetzprav",
            description: "Počet zpráv, kolik chceš aby Tim sežral.",
            type: ArgumentType.INTEGER,
            required: true
        })
    ],
	run: (ctx) => {
        ctx.channel.bulkDelete(ctx.arguments.getInteger("pocetzprav"))
        const embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setTitle(`Sežráno ${ctx.arguments.getInteger("pocetzprav")} zpráv!`)
        ctx.reply({ embeds: [embed], ephemeral: true})
	}
});