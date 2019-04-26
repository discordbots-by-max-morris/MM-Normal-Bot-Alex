const commando = require('discord.js-commando');
const request = require('request');

class cuteCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'cute',
      group: 'fun',
      memberName: 'cute',
      description: 'Posts a cute photo of your choice.',
      args: [{
        key: 'cuteAnimal',
        prompt: 'What cute animal would you like to see (Cat Or Dog)?',
        type: 'string'
      }],
      throttling: {
        usages: 1,
        duration: 5
      }
    })
  }

  async run(message, args) {
    const {
      cuteAnimal
    } = args
    if (cuteAnimal === 'cat') {
      request.get('http://random.cat/meow', function (err, res) {
        var cat = JSON.parse(res.body)
        message.channel.startTyping();
        message.channel.send('🐱🌀 Summoning your fluffy toe beans now! 🐾🐾').then(m => {
          setTimeout(function () {
            m.edit(cat.file);
            message.channel.stopTyping();
          }, 1500);
        })
      })
    } else if (cuteAnimal === 'dog') {
      request.get('https://random.dog/woof.json', function (err, res) {
        var dog = JSON.parse(res.body)
        message.channel.startTyping();
        message.channel.send('🐶🌀 Summoning your wiggle machine now! 🐾🐾').then(m => {
          setTimeout(function () {
            m.edit(dog.url);
            message.channel.stopTyping();
          }, 1500);
        })
      })
    } else {
      message.channel.send(':x: Invalid Option!');
    }
  }
}

module.exports = cuteCommand;
