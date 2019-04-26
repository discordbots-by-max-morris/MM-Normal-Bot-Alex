const commando = require('discord.js-commando')
const Discord = require('discord.js');

class steamCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'steam',
      group: 'search',
      memberName: 'steam',
      description: 'Searches for game on steam',
      examples: ['steam "game name"'],
      throttling: {
        usages: 1,
        duration: 5
      }
    })
  }

  async run(message, args) {
    message.delete();
    const request = require("request");
    const theUrl = "http://www.cheapshark.com/api/1.0/deals?storeID=6&desc=0&title=" + args + "&pageSize=1&storeID=1";
    request({
      url: theUrl,
      json: true
    }, function (error, response, body) {
      if (!body.length) {
        message.channel.sendMessage(`Game not found...`)
          .then(response => response.delete(1500).catch(error => console.log(error.stack))).catch(error => console.log(error.stack));
        return;
      } else {
        if (!error && response.statusCode === 200) {
          //console.log(body[0].title);
          var authorImage = 'https://i.imgur.com/mQTwe4S.png';

          const embed = new Discord.RichEmbed()
            .setTitle(body[0].title)
            .setAuthor('Steam', `${authorImage}`)
            .setColor(0x014576)
            .setFooter('Searched on: ')
            .setThumbnail(body[0].thumb)
            .setTimestamp()
            .addField('Sale Price', `${body[0].salePrice}`, true)
            .addField('Normal Price', `${body[0].normalPrice}`, true)
            .addField('Saving', `${body[0].savings}`, true)
            .addField('Deal Rating', `${body[0].dealRating}`, true)
            .addField('Steam Rating', `${body[0].steamRatingText}`, true)
            .addField('Steam Store', `[Click Here](https://www.cheapshark.com/redirect.php?dealID=${body[0].dealID})`, true)

          message.channel.send({ embed });
        }
      }
    })
  }
}

module.exports = steamCommand;
