const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Flips a coin, landing on either head or tails!'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            message.reply("Your coin landed on Heads!", {files: [__dirname + "/CoinPics/heads.jpg"]})
        }
        else
        {
        message.reply("Your coin landed on Tails!", {files: [__dirname + "/CoinPics/tails.jpg"]})
        }
    }
}

module.exports = CoinFlipCommand