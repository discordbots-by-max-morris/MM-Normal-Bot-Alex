const stripIndents = require('common-tags').stripIndents;
const commando = require('discord.js-commando');




function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
module.exports = class UserInfoCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'discordgold',
			aliases: ['discordgold', 'gold'],
			group: 'fun',
			memberName: 'discordgold',
			description: 'Displays a discord gold only message.',
			examples: ['j.discordgold'],
			guildOnly: true,

		});
	}

	async run(msg, args) {


  msg.channel.sendMessage("", {embed: {
    color: 0xe0c00d,
    author: {
      name: "Discord Gold exclusive message:",
      url: "https://discord.gold/",
    },
    description: '<:DiscordGold:251238233453625345> You Need Discord Gold™ to view this message. <:DiscordGold:251238233453625345>'

  }});


    }
}
