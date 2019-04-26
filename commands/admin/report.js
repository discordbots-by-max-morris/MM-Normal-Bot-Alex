const Commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const client = new Commando.Client();

module.exports = class ReportCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'report',
            group: 'admin',
            memberName: 'report',
            description: 'Report Bugs and Errors to Max M',
            args: [
                {
                    key: 'text',
                    prompt: 'What do you want to report to Max Morris, the bot creator?',
                    type: 'string'
                }
            ]
           
        });    
    }

    run(msg, args, callback) {const { text } = args;
    const embed = new RichEmbed()
    .setAuthor(msg.author.username, msg.author.displayAvatarURL)
    .setDescription(text)
    .setFooter("send from " + msg.channel.id)
    this.client.channels.get('567082364476456972').send({embed})
    msg.reply("The report has been sent! Thank You");
    msg.delete();
    }
};
