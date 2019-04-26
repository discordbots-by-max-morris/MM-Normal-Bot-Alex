const { Command } = require('discord.js-commando');
const { oneLine } = require('common-tags');
const { RichEmbed } = require('discord.js');

module.exports = class DEVAnnounceCommand extends Command {
  constructor(bot) {
    super(bot, {
      name: 'devannounce',
      aliases: ['devupdate','senddevupdate'],
      group: 'control',
      memberName: 'devannounce',
      description: 'Sends an announcemnt to #dev-talks in SERVER',
      details: oneLine`
		    This command sends an announcemnt to #dev-talks in SERVER
            Usage is restricted to bot owners.
			`,
      examples: ['announce'],
      args: [{
        key: 'toAnn',
        label: 'announce',
        prompt: 'What would you like to announce?',
        type: 'string',
        infinite: false
      }],
      guarded: true,
      ownerOnly: true
    });
  }

  async run(message, args) {
    const annChan = this.client.channels.get('566664566298378240');
    const embed = new RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(args.toAnn)
      .setColor('0xFF0000')
      .setTimestamp();
    annChan.send('<@&556361477653659659>', { embed }).then(() => {
      message.reply('DEVAnnouncement sent!');
    });
  }
};
