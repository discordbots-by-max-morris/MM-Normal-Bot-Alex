const Commando = require('discord.js-commando');
const client = new Commando.Client();
module.exports = class DMCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'dm',
            group: 'admin',
            memberName: 'dm',
            examples: ['gb!dm [User] [content]'],
            description: 'DM a user',
          guildOnly: true,
            args: [ 
              { key: 'user', 
               prompt: 'Which user do you want to send the DM to?', 
                     type: 'user' }, 
            { key: 
             'content', 
             prompt: 'What would you like the content of the message to be?', 
             type: 'string' } ]
        });    
	}
  
  hasPermission(msg) {
		return this.client.isOwner(msg.author) || msg.member.hasPermission('ADMINISTRATOR');
	}

    run(msg, { user, content }) {
      msg.reply("I have sent the message")
      return user.send(content);   
    }
};