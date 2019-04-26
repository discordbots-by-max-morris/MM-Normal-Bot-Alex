const commando = require('discord.js-commando');

class BotOnlineCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'online',
      group: 'random',
      memberName: 'online',
      description: 'Checks if bot is online'
    });
  }
  async run(message, args) {
    message.channel.sendMessage("I am online!");
  }
}

module.exports = BotOnlineCommand;
