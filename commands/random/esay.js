const stripIndents = require('common-tags').stripIndents;
const commando = require('discord.js-commando')
function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
class embedCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'embedsay',
			aliases: ['esay'],
			group: 'random',
			memberName: 'embedsay',
			description: 'Says something in a embed.',
			guildOnly: true,

		});
	}

	async run(msg, args) {
msg.channel.sendMessage("", {embed: {
  color: 3447003,
  author: {
    name: msg.author.username + ' said',
    icon_url: msg.author.avatarURL
  },
  description: args
}});
    }
  }
module.exports = embedCommand;
