const commando = require('discord.js-commando');
const discord = require('discord.js');

class HelpCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'helpmenu',
            group: 'fun',
            memberName: 'helpmenu',
            description: 'Shows the help'
        });
    }

    async run(message, args) {
        let msgarray = message.content.split(" ");
        let cmd = msgarray[0].toLowerCase();
        let ARGS = msgarray.slice(1);

        createMessage(ARGS[0]);


        function createMessage(string, bookmessage) {

            switch (string) {

                case 'profile' : {
                    var help = new discord.RichEmbed()
                        .setTitle('Hi, my name is Max\'s bot I am made by Max Morris#5487')
                        .setDescription("Hi, my name is Max\'s bot I am made by Max Morris#5487")
                        .addField('info', 'info about the bot', true)
                        .addField('guillist', 'shows all the guilds I am in\n Guil stands for server for people who are dumb a do not know', true)
                        .addField('invite', 'sends invite shit', true)
                        .addField('helpmenu', 'if your that dumb this is the fucking help menu', true)
                        .setColor("#ff0080")
                        .setThumbnail(message.client.user.displayAvatarURL)
                        .setImage('https://cdn.discordapp.com/attachments/561986291131220008/564985306047053834/hi.jpg')
                        .setFooter("|| Developed by: Max Morris || I got help from: DragonGirlxx || Code language: JavaScript || Version: Foxy 1.0 ||")
                }
                    break;
                case'games': {
                    var help = new discord.RichEmbed()
                        .setTitle('Hi, my name is Max\'s bot I am made by Max Morris#5487')
                        .setDescription("Hi, my name is Max\'s bot I am made by Max Morris#5487")
                        .addField('double-slap', '***smack***', true)
                        .addField('rip', 'Rest in peice...', true)
                        .addField('rps', 'Rock Paper Sissors', true)
                        .addField('funmirror', ' Looks at your refrection in a mirror', true)
                        .addField('give-flower', 'Gives Lightbot a flower', true)
                        .setColor("#ff0080")
                        .setThumbnail(message.client.user.displayAvatarURL)
                        .setImage('https://cdn.discordapp.com/attachments/561986291131220008/564985306047053834/hi.jpg')
                        .setFooter("|| Developed by: Max Morris || I got help from: DragonGirlxx || Code language: JavaScript || Version: Foxy 1.0 ||")
                }
                    break;
                case'moderation': {
                    var help = new discord.RichEmbed()
                        .setTitle('Hi, my name is Max\'s bot I am made by Max Morris#5487')
                        .setDescription("Hi, my name is Max\'s bot I am made by Max Morris#5487\n\n**Hey bitch, this are my Moderation commands.**")
                        .addField("Ban", "Ban  a user")
                        .addField("Kick", "Kick a user")
                        .addField("Mute", "Mute a user")
                        .addField("Toggledaef", "Toggle deafen on a user (Server Deafen)")
                        .addField("Status", "See the bots status")
                        .addField("Voicemove", "Move a user to a difrent voice channel")
                        .addField("dm", "dms a user")
                        .addField("unmute", "Unmute a user")
                        .addField("undeafen", "Undeafen a user")
                        .addField("Togglemute", "Mute a user")
                        .addField("Unban", "Unban a banned user")
                        .addField("Statusgame", "Set the bot status")
                        .setColor("#ff0080")
                        .setThumbnail(message.client.user.displayAvatarURL)
                        .setImage('https://cdn.discordapp.com/attachments/561986291131220008/564985306047053834/hi.jpg')
                        .setFooter("|| Developed by: Max Morris || I got help from: DragonGirlxx || Code language: JavaScript || Version: Foxy 1.0 ||")
                }
                    break;
                case'fun': {
                    var help = new discord.RichEmbed()
                        .setTitle('Hi, my name is Max\'s bot I am made by Max Morris#5487')
                        .setDescription("Hi, my name is Max\'s bot I am made by Max Morris#5487\n\n**Hey bitch, this are my fun commands.**")
                        .addField(':interrobang: 8ball', 'Ask me a question. And I will Shake the magic 8 ball', true)
                        .addField('sciitext', 'Turns text into ascii art.', true)
                        .addField('cute', 'Posts a cute photo of your choice', true)
                        .addField('echo', 'Echoes what you say as a embed.', true)
                        .addField('meme', 'Displays a randome meme', true)
                        .addField(':hibiscus: flip', 'Flip a coin.', true)
                        .addField('morse', 'Generates a message to morse code!', true)
                        .addField('respects', '*Press F to pay respects!', true)
                        .addField('rps', 'RPS means to rock-paper-sicssors', true)
                        .addField(':game_die: f!roll', 'Rolls a random number.', true)
                        .addField('smore', 'Displays a random picture of Smors Pop-Tarts', true)
                        .addField(':cold_sweat: f!double-slap', 'Slap a person.', true)
                        .addField('urban', 'Urban dictonary..', true)
                        .setColor("#ff0080")
                        .setThumbnail(message.client.user.displayAvatarURL)
                        .setImage('https://cdn.discordapp.com/attachments/561986291131220008/564985306047053834/hi.jpg')
                        .setFooter("|| Developed by: Max Morris || I got help from: DragonGirlxx || Code language: JavaScript || Version: Foxy 1.0 ||")
                }
                    break;
                case'info': {
                    var help = new discord.RichEmbed()
                        .setTitle('Hi, my name is Max\'s bot I am made by Max Morris#5487')
                        .setDescription("Hi, my name is Max\'s bot I am made by Max Morris#5487 \n\n**Hey bitch, this are my information commands.**")
                        .addField('helpmenu', "Sends the helpmenu!", true)
                        .addField('userinfo', 'Shows the person mentioned info.', true)
                        .addField('guildlist', 'Sends a embed about all the guilds the bot is in', true)
                        .addField('online', 'checks if the bot is online', true)
                        .addField('help', 'sends 3 dms of all the commands for a bot', true)
                        .addField('status', 'sends the status of the bot!', true)
                        .addField('today', 'Sends a embed about something that happened today!', true)
                        .addField('search', 'Search google!', true)
                        .addField('weather', 'Sends the weather of a place', true)
                        .addField('Ping', 'Sends the ping of the bot to the discord server!', true)
                        .setColor("#ff0080")
                        .setThumbnail(message.client.user.displayAvatarURL)
                        .setImage('https://cdn.discordapp.com/attachments/561986291131220008/564985306047053834/hi.jpg')
                        .setFooter("|| Developed by: Max Morris || I got help from: DragonGirlxx || Code language: JavaScript || Version: Foxy 1.0 ||")
                }
                    break;
                case'config': {
                    var help = new discord.RichEmbed()
                        .setTitle('Hi, my name is Max\'s bot I am made by Max Morris#5487')
                        .setDescription("Did you know that if you type: ``foxy i love you``, \ni will reply back? Just try it out. \n\n**Hey bitch, this are my config settings.**")
                        .addField('prefix', 'Do not like the current prefix just change it!', true)
                        .addField('eval', 'Executes JavaScript code!', true)
                        .addField('report', 'Make a bug report for me!', true)
                        .addField('survey', 'Make a poll', true)
                        .addField('support', 'Get support...', true)
                        .addField('help', 'Get 3 dms the hard way to get help', true)
                        .addField('helpmenu', 'Get some help the easy way', true)
                        .addField('suggest', 'suggest things', true)
                        .addField('info', 'Sends info...', true)
                        .setColor("#ff0080")
                        .setThumbnail(message.client.user.displayAvatarURL)
                        .setImage('https://cdn.discordapp.com/attachments/561986291131220008/564985306047053834/hi.jpg')
                        .setFooter("|| Developed by: Max Morris || I got help from: DragonGirlxx || Code language: JavaScript || Version: Foxy 1.0 ||")
                }
                    break;
                default: {
                    var help = new discord.RichEmbed()                 // Help main page.
                        .setTitle('Hi, my name is Max\'s bot I am made by Max Morris#5487')
                        .setDescription("Did you know that if you type: ``Hello``, \nI will reply back? Just try it out. \n\n**Hey bitch, this is my help menu's.**")
                        .addField(':frame_photo: Profile', '``This bots profile commands``', true)
                        .addField(':game_die: Games', '``Games that this bot has``', true)
                        .addField(':stuck_out_tongue: Fun', '``This bots fun commands``', true)
                        .addField(':card_index: Info', '``Info about this bot mainly commands``', true)
                        .addField(':gear: Config', '``This bots config commands (I will try to make databases soon for custom shit)``', true)
                        .addField(':rotating_light:', '``This is the bots moderation commands!``')
                        .setColor("#ff0080")
                        .setThumbnail(message.client.user.displayAvatarURL)
                        .setImage('https://cdn.discordapp.com/attachments/561986291131220008/564985306047053834/hi.jpg')
                        .setFooter("|| Developed by: Max Morris || I got help from: DragonGirlxx || Code language: JavaScript || Version: Foxy 1.0 ||")
                }
                    break;
            }
            if (bookmessage !== undefined) {
                bookmessage.edit(help).then(result => reactions(result));
            } else {
                message.channel.send(help).then(async function (result) {

                    reactions(result);

                    await result.react("🖼");
                    await result.react("🎲");
                    await result.react("😛");
                    await result.react("📇");
                    await result.react("⚙");
                    await result.react("🚨");
                    await result.react("❌");
                })
            }

            function reactions(result) {
                const filter = (reaction, user) => {
                    return ["🖼", "💵", "📸", "🎲", "😛", "😏", "📇", "⚙", "🚨", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
                };
                result.awaitReactions(filter, {max: 1, maxEmojis: 1})
                    .then(collected => {
                        const reaction = collected.first();
                        reaction.remove(message.author.id);

                        switch (reaction.emoji.name) {
                            case ("🖼"): {
                                createMessage(`profile`, result);
                            }
                                break;
                            case ("🎲"): {
                                createMessage(`games`, result);
                            }
                                break;
                            case ("😛"): {
                                createMessage(`fun`, result);
                            }
                                break;
                            case ("📇"): {
                                createMessage(`info`, result);
                            }
                                break;
                            case ("⚙"): {
                                createMessage(`config`, result);
                            }
                                break;
                            case ("🚨"): {
                                createMessage(`moderation`, result);
                            }
                                break;
                            case ("❌"): {
                                message.channel.send("You have now exit my help menu.")
                            }

                        }
                    })
            }
        }

    }
}

module.exports = HelpCommand;
