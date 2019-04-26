/* (c) Jalium */
const stripIndents = require('common-tags').stripIndents;
const commando = require('discord.js-commando');




function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
module.exports = class UserInfoCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'discordnitro',
			aliases: ['discordnitro', 'nitro'],
			group: 'fun',
			memberName: 'discordnitro',
			description: 'Displays a discord nitro only message.',
			examples: ['!discordnitro'],
			guildOnly: true,

		});
	}

	async run(msg, args) {


  msg.channel.sendMessage("", {embed: {
    color: 0x429bf4,
    author: {
      name: "Discord Nitro exclusive message:",
      url: "https://discordapp.com/nitro/",
    },
    description: '<:NitroExclusiveWhyAreYouHoveringOverMePleaseStopHarrasingMeImCallingThePolice:261756038775177216> You Need Discord Nitro™ to view this message. <:NitroExclusiveWhyAreYouHoveringOverMePleaseStopHarrasingMeImCallingThePolice:261756038775177216>'

  }});


    }
}
