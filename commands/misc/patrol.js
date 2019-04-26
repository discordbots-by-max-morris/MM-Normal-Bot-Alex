const commando = require('discord.js-commando');
const discord = require('discord.js')
class StartAPatrolCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'start_a_patrol',
            group: 'misc',
            memberName: 'start_a_patrol',
            description: 'This starts a patrol on either roblox or SSB it is up to the host.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("A patrol has started")
        .setDescription("A patrol has started on either SSB and Roblox please do What's the current team? if there is no one do .join_team too be on the patrol team after this the host must do !new_team for the next patrol!")
        .setColor("#fa00ff")
        .setThumbnail(message.author.avatarURL)
        .setAuthor("PBCSO Bot")
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = StartAPatrolCommand