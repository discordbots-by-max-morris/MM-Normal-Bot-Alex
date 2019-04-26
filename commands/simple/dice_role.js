const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a six sided dice'
        });
    }

    async run(message, args)
    {
        let diceRoll;
        if(args == "")
        {
            diceRoll = Math.floor(Math.random() * 6) + 1;
            message.reply("Your dice landed on " + diceRoll);
        }
        else
        {
            diceRoll = Math.floor(Math.random() * args) + 1;
            if(isNaN(diceRoll))
            {
                message.reply(args + " Is not a number");
                diceRoll = Math.floor(Math.random() * 6) + 1;
                message.reply("Your dice landed on " + diceRoll);
            }
            else
            {    
            message.reply("Your dice landed on " + diceRoll);   
            }   
        }
    }
}

module.exports = DiceRollCommand