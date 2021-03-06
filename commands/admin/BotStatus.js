const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class BotStatsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'status',
            aliases: ["specs","invite", "information", "about"],
            group: 'admin',
            memberName: 'stats',
            description: 'Shows the status of the Bot'
        });
    }

    async run(message) {
        const os = require('os');
        const arch = os.arch()
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
    
        let totalSeconds = process.uptime();
        let realTotalSecs = Math.floor(totalSeconds % 60);
        let days = Math.floor((totalSeconds % 31536000) / 86400);
        let hours = Math.floor((totalSeconds / 3600) % 24);
        let mins = Math.floor((totalSeconds / 60) % 60);

        const StatusEmbed = new RichEmbed()
            .setThumbnail(this.client.user.avatarURL)
            .setTitle(`Status of ${this.client.user.username}`)
            .setColor('BLACK')
            .addField(`Memory usage:`,`${Math.round(used * 100) / 100}MB` ,true)
            .addField(`Uptime:`,`${days} : ${hours} : ${mins} : ${realTotalSecs}` ,true)
            .addField('Node and Library',` Node: ${process.version} \nDiscord.js 11.4.2\nDiscord.js-commando 0.10.0` ,true)
            .addField(`Platform`,`${os.platform}`, true)
            .addField('Servers, Users',`On ${this.client.guilds.size} servers, with a total of ${this.client.users.size} users.`)
            .addField("My Discord Invite Link", "[Discord Invite Link](https://discordapp.com/oauth2/authorize?client_id=564270724060282891&scope=bot&permissions=2146958847)", true)
            .addField("Max's Bot Support Server", "[Support Server Invite](https://discord.gg/X7kU6V7)", true)
                code: 'AsciiDoc'
        message.channel.send(StatusEmbed);
    }
};
