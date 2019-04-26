const commando = require('discord.js-commando');

class EightBallCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: '8ball',
      group: 'fun',
      memberName: '8ball',
      description: 'Shakes the magic 8 ball'
    });
  }
  async run(message, args) {
    var randomNumber2 = Math.floor(Math.random() * 20);

        if(randomNumber2 === 1) {
            message.channel.sendMessage('It is certain :smile:');
        }
        else if(randomNumber2 === 2) {
            message.channel.sendMessage('It is decidedly so :grin:');
        }
        else if(randomNumber2 === 3) {
            message.channel.sendMessage('Without a doubt :sweat_smile:');
        }
        else if(randomNumber2 === 4) {
            message.channel.sendMessage('Yes definitely :grinning:');
        }
        else if(randomNumber2 === 5) {
            message.channel.sendMessage('You may rely on it :relieved:');
        }
        else if(randomNumber2 === 6) {
            message.channel.sendMessage('As I see it, yes :sunglasses:');
        }
        else if(randomNumber2 === 7) {
            message.channel.sendMessage('Most likely :slight_smile:');
        }
        else if(randomNumber2 === 8) {
            message.channel.sendMessage('Outlook good :smirk:');
        }
        else if(randomNumber2 === 9) {
            message.channel.sendMessage('Yes :thumbs_up:');
        }
        else if(randomNumber2 === 10) {
            message.channel.sendMessage('Signs point to yes :innocent:');
        }
        else if(randomNumber2 === 11) {
            message.channel.sendMessage('Reply hazy try again :crystal_ball: ');
        }
        else if(randomNumber2 === 12) {
            message.channel.sendMessage('Ask again later :crystal_ball: ');
        }
        else if(randomNumber2 === 13) {
            message.channel.sendMessage('Better not tell you now :wink:');
        }
        else if(randomNumber2 === 14) {
            message.channel.sendMessage('Cannot predict now :crystal_ball: ');
        }
        else if(randomNumber2 === 15) {
            message.channel.sendMessage('Concentrate and ask again :crystal_ball: ');
        }
        else if(randomNumber2 === 16) {
            message.channel.sendMessage("Don't count on it :neutral_face:");
        }
        else if(randomNumber2 === 17) {
            message.channel.sendMessage('My reply is no :scream:');
        }
        else if(randomNumber2 === 18) {
            message.channel.sendMessage('My sources say no :joy:');
        }
        else if(randomNumber2 === 19) {
            message.channel.sendMessage('Outlook not so good :smirk:');
        }
        else if(randomNumber2 === 20) {
            message.channel.sendMessage('Very doubtful :triumph:');
        }
  }
}

module.exports = EightBallCommand;
