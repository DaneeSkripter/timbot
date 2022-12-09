const { Command, CommandType } = require('gcommands');
const Discord = require("discord.js")
// Create a new command with the name 'hello'
new Command({
	name: 'prineshracku',
	description: 'Tim ti přinese ukázat hračku',
	// GCommands Next offers different types of commands, we will only use slash and message commands here.
	type: [CommandType.SLASH, CommandType.MESSAGE],
	// The function thats executed when the user uses the command.
	run: (ctx) => {
        ctx.reply("https://raw.githubusercontent.com/DaneeSkripter/timbot/main/src/assets/img/tim_hracka.jpg")
	}

});