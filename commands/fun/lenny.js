const stripIndents = require('common-tags').stripIndents;
const commando = require('discord.js-commando');

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
module.exports = class UserInfoCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'lenny',
			aliases: ['l3nny'],
			group: 'fun',
			memberName: 'lenny',
			description: 'Displays a classic lenny face..',
			examples: ['lenny', 'l3nny'],
			guildOnly: true,

		});
	}

	async run(msg, args) {
        msg.channel.sendMessage("", {embed: {
  color: 3447003,
  description: '( ͡° ͜ʖ ͡°)',
}});
    }
    }
