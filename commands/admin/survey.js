const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const oneLine = require('common-tags').oneLine;

module.exports = class PollCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'survey',
            group: 'admin',
            memberName: 'survey',
            description: 'Creates a poll with up to 10 choices.',
            examples: ["gb!poll \"What\'s your favourite food?\" \"Hot Dogs,Pizza,Burgers,Fruits,Veggies\" 10"],
            args: [
                {
                    key: 'question',
                    prompt: 'What is the poll question?',
                    type: 'string',
                    validate: question => {
                        if (question.length < 201 && question.length > 11) return true;
                        return 'Polling questions must be between 10 and 200 characters in length.';
                    }  
                }, 
                {
                    key: 'options',
                    prompt: 'What options do you want for the poll?',
                    type: 'string',
                    validate: options => {
                        var optionsList = options.split(",");
                        if (optionsList.length > 0) return true;
                        return 'Polling options must be greater than one.';
                    }  
                }
            ]
        });
    }
    
  hasPermission(msg) {
		return this.client.isOwner(msg.author) || msg.member.hasPermission('ADMINISTRATOR');
	}
  
    run(msg, { question, options, time }) {
        var emojiList = ['1⃣','2⃣','3⃣','4⃣','5⃣','6⃣','7⃣','8⃣','9⃣','🔟'];
        var optionsList = options.split(",");
        
        var optionsText = "";
        for (var i = 0; i < optionsList.length; i++) { 
            optionsText += emojiList[i] + " " + optionsList[i] + "\n";
        }
        
        var embed = new RichEmbed()
            .setTitle(question)
            .setDescription(optionsText)
            //.setAuthor(msg.author.username, msg.author.displayAvatarURL)
            .setColor(0xD53C55) // Green: 0x00AE86
            .setFooter(``)

            
            
        msg.delete(); // Remove the user's command message

        msg.channel.send({embed}) // Definitely use a 2d array here..
            .then(async function (message) {
                var reactionArray = [];
                for (var i = 0; i < optionsList.length; i++) { 
                    reactionArray[i] = await message.react(emojiList[i]);
                }
                
            }).catch(console.error);
                
        return;
    }
};