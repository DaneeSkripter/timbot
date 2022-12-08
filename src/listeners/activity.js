const { Listener } = require('gcommands');
const { ActivityType } = require("discord.js")

// Create a new listener listening to the "ready" event
new Listener({
	// Set the name for the listener
	name: 'ready',
	// Set the event to listen to
	event: 'ready',
	// The function thats called when the event occurs
	run: (client) => {
		client.user.setActivity('si s klackem', { type: ActivityType.Playing });
	}
});