/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
    name: 'slap',
        aliases: [],
    description: 'slaps a another user',
        async run(client, message, args) { 
            const user = message.mentions.users.first();
         const images = ["https://cdn.discordapp.com/attachments/811817633565376542/811817753064636427/image0.gif", "https://cdn.discordapp.com/attachments/811817633565376542/811817745057316864/image0.gif", "https://cdn.discordapp.com/attachments/811817633565376542/811817739286216724/image0.gif", "https://cdn.discordapp.com/attachments/811817633565376542/811817724162080808/image0.gif", "https://cdn.discordapp.com/attachments/811817633565376542/811817729618608138/image0.gif", "https://cdn.discordapp.com/attachments/811817633565376542/811817734584926228/image0.gif", "https://cdn.discordapp.com/attachments/811817633565376542/811817702159155200/image0.gif", "https://cdn.discordapp.com/attachments/811817633565376542/811817706948395048/image0.gif", "https://cdn.discordapp.com/attachments/811817633565376542/811817711863857192/image0.gif", "https://cdn.discordapp.com/attachments/811817633565376542/811817716603682887/image0.gif"];
      const image = Math.floor(Math.random() * images.length);
      const embed = new client.embed()
      .setImage(String([images[image]]))
      .setDescription(`${message.author} just slapped ${user}`)
      const embed1 = new client.embed()
      .setDescription(`you have to mention someone to slap.`)
   if(!user) {
     message.channel.send(embed1);
   }  else {
      const replies = ['stop hitting yourself!!']
      if (message.author.id === user.id) return message.channel.send(replies[~~(Math.random() * replies.length)])
      message.channel.send(embed);
   }
}
   }