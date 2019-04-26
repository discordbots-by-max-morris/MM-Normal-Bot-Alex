const stripIndents = require('common-tags').stripIndents;
const commando = require('discord.js-commando');
function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
module.exports = class UserInfoCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'rekt',
			aliases: ['rekt'],
			group: 'fun',
			memberName: 'rekt',
			description: 'Homie got rekt',
			examples: ['!rekt illumin8'],
			guildOnly: true,
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'What user got rekt?',
					type: 'member'
				}
			]
		});
	}

	async run(msg, args) {
msg.channel.sendMessage("", {embed: {
  color: 3447003,
  author: {
    name: msg.mentions.users.first().username + " got rekt by "+ msg.author.username,
    icon_url:  msg.mentions.users.first().avatarURL
  },
}});
    }
    }
