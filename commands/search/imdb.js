const commando = require('discord.js-commando')
const request = require('request')
const Discord = require('discord.js');

class imdbCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'imdb',
      group: 'search',
      memberName: 'imdb',
      description: 'Searches IMDb for info movie or series.',
      examples: ['imdb "movie/series"', 'imdb "movie/series" "year"'],
      throttling: {
        usages: 1,
        duration: 5
      }
    })
  }

  async run(message, args) {
    //message.delete();
    var string = args.replace(/[0-9]/g, '');
    var string = string.substring().split(' ');
    let year = parseInt(message.content.split(' ').pop());
    const search = string.join('+')
    const theUrl = 'http://www.omdbapi.com/?t=' + search + '&r=json'
    const theUrlYear = 'http://www.omdbapi.com/?t=' + search.match(/(.*).$/)[1] + '&y=' + year + '&r=json'
    let authorImage = 'https://i.imgur.com/N7sHU42.png'

    if (!year) {
      request({
        url: theUrl,
        json: true
      }, function (error, response) {
        if (response.body.Response === 'False') {
          message.channel.send(':x: No results found...').then(response => response.delete(5000).catch(error => console.log(error.stack))).catch(error => console.log(error.stack))
          return;
        } else {
          const embed = new Discord.RichEmbed()
            .setAuthor('IMDb', authorImage)
            .setTitle(response.body.Title)
            .setColor(0xf5de50)
            .setDescription(response.body.Plot)
            .setThumbnail(response.body.Poster)
            .setURL(`http://www.imdb.com/title/${response.body.imdbID}`)
            .addField('Release Year', response.body.Released, true)
            .addField('Runtime', response.body.Runtime, true)
            .addField('Rated', response.body.Rated, true)
            .addField('Genre', response.body.Genre, true)
            .addField('Type', response.body.Type, true)
            .addField('Country', response.body.Country, true)
            .addField('Language', response.body.Language, true)
            .addField('Awards', response.body.Awards, true)
            .addField('Director', response.body.Director)
            .addField('Write', response.body.Writer)
            .addField('Actors', response.body.Actors)
            .addField('Rating', `${response.body.imdbRating}/10`, true)
            .addField('IMDb ID', response.body.imdbID, true)

          message.channel.send({ embed });
        }
      })
    } else {
      request({
        url: theUrlYear,
        json: true
      }, function (error, response) {
        if (response.body.Response === 'False') {
          message.channel.send(':x: No results found...').then(response => response.delete(5000).catch(error => console.log(error.stack))).catch(error => console.log(error.stack))
          return;
        } else {
          const embed = new Discord.RichEmbed()
            .setAuthor('IMDb', authorImage)
            .setTitle(response.body.Title)
            .setColor(0xf5de50)
            .setDescription(response.body.Plot)
            .setThumbnail(response.body.Poster)
            .setURL(`http://www.imdb.com/title/${response.body.imdbID}`)
            .addField('Release Year', response.body.Released, true)
            .addField('Runtime', response.body.Runtime, true)
            .addField('Rated', response.body.Rated, true)
            .addField('Genre', response.body.Genre, true)
            .addField('Type', response.body.Type, true)
            .addField('Country', response.body.Country, true)
            .addField('Language', response.body.Language, true)
            .addField('Awards', response.body.Awards, true)
            .addField('Director', response.body.Director)
            .addField('Write', response.body.Writer)
            .addField('Actors', response.body.Actors)
            .addField('Rating', `${response.body.imdbRating}/10`, true)
            .addField('IMDb ID', response.body.imdbID, true)

          message.channel.send({ embed });
        }
      })
    }
  }
}
module.exports = imdbCommand;
