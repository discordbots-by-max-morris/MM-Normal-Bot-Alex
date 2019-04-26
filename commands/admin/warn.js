const commando = require('discord.js-commando');
const discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

class WarnCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'warn',
            group: 'admin',
            memberName: 'warn',
            description:'warn a user in discord'
        });
    }
    

    async run(message, args)
    {
        if(!message.member.hasPermissions("MANAGE_MEMBER")) return message.reply("Sorry Pal!, You can't do that!.");
        let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!wUser) return message.reply("Couldn't find them");
        if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("You have permissions to warn a user");
        let reason = args.split(/ +/).slice(1).join(' ')

        if(!warns[wUser.id]) warns[wUser.id] = {
            warns: 0
        };

        warns[wUser.id].warns++;
        
        fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
            if (err) console.log(err);
        });

        let warnEmbed = new discord.RichEmbed()
        .setDescription("Warns", message.author.username)
        .setColor("RANDOM")
        .addField("Warned user", wUser.tag)
        .addField("Warned In", message.channel)
        .addField("Number of Warnigs", warns[wUser.id].warns)
        .addField("Reason", reason);

        let warnchannel = message.guild.channels.find(channel => channel.name === "logs");
        if(!warnchannel) return message.channel.send("Couldn't find reports channel!");

        warnchannel.send(warnEmbed);

        if(warns[wUser.id].warns ==2){
            let muterole = message.guild.roles.find("name", Muted)
            if(!muterole) return message.reply("You should create a Mute role")

            let mutetime = "10ms";
            await(wUser.addRole(muterole.id));
            message.reply(`<@${wUser.id}> has been muted`);

            setTimeout(function(){
                wUser.removeRole(muterole.id)
                message.reply(`<@${wUser.id}> has been unmuted`)

            }, ms(mutetime))
        }
        if(warns[wUser.id].warns == 6){
            message.guild.member(wUser).ban(reason);
            message.reply(`<@${wUser.id}> has been banned!`)
        }

    }
    

}

module.exports = WarnCommand;
