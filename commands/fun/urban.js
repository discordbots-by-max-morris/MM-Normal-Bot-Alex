const commando = require('discord.js-commando');
const request = require('request');
const baseUrl = "http://api.urbandictionary.com/v0/define?term=";

class urbanCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'urban',
      group: 'fun',
      memberName: 'urban',
      description: 'urban dictionary',
      throttling: {
        usages: 1,
        duration: 5
      }
    })
  }

  async run(message, args) {
    var search = args.replace(/[0-9]/g, '')
    const theUrl = baseUrl + search;
    let resultNum = parseInt(message.content.split(' ').pop());
    request({
      url: theUrl,
      json: true,
    }, (error, response, body) => {
      if (!resultNum) {
        resultNum = 0;
      } else if (resultNum > 1) {
        resultNum -= 1;
      }
      const result = body.list[resultNum];
      if (result) {
        const definition = [
          `**Word:** ${search}`,
          "",
          `**Definition:**\n_${result.definition}_`,
          "",
          `**Example:**\n${result.example}`,
          `<${result.permalink}>`,
        ];
        message.channel.send(definition).catch(err => client.funcs.log(err.stack, "error"));
      } else {
        message.channel.send("No entry found.").catch(err => client.funcs.log(err.stack, "error"));
      }
    });
  }
}

module.exports = urbanCommand;
