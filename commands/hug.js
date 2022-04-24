/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
    name: 'hug',
        aliases: ['hugs'],
    description: 'hugs another user',
        async run(client, message, args) { 
const user = message.mentions.users.first();

   const images = ["https://cdn.discordapp.com/attachments/780134232214863896/812047574721888296/tumblr_pghhb1Qli81rsghfro1_500.gif", "https://cdn.discordapp.com/attachments/811820209262035016/812046396093104149/kjyf.gif", "https://cdn.discordapp.com/attachments/811820209262035016/812046039187456000/adb9966c416b97cd8111a4ceee15fc16.gif", "https://cdn.discordapp.com/attachments/811820209262035016/812046147769598012/dancing.gif", "https://cdn.discordapp.com/attachments/811820209262035016/811820258317828116/image0.gif", "https://cdn.discordapp.com/attachments/811820209262035016/811820254271111188/image0.gif", "https://cdn.discordapp.com/attachments/811820209262035016/811820250567278622/image0.gif", "https://cdn.discordapp.com/attachments/811820209262035016/811820245819195392/image0.gif", "https://cdn.discordapp.com/attachments/811820209262035016/811820242800082974/image0.gif", "https://cdn.discordapp.com/attachments/811820209262035016/811820237791166484/image0.gif", "https://cdn.discordapp.com/attachments/811820209262035016/811820233529622588/image0.gif", "https://cdn.discordapp.com/attachments/811820209262035016/811820228757159966/image0.gif", "https://cdn.discordapp.com/attachments/811820209262035016/811820224599949342/image0.gif", "https://cdn.discordapp.com/attachments/811820209262035016/811820221090103326/image0.gif"];
   const image = Math.floor(Math.random() * images.length);
   const embed = new client.embed()
   .setImage(String([images[image]]))
   .setDescription(`${message.author} just hugged ${user}`)
   const embed1 = new client.embed()
   .setDescription(`you have to mention someone to hug.`)
   if(!user) {
     message.channel.send(embed1);
   } else {
      if (message.author.id === user.id) return message.channel.send('<a:tgirlsnuggle:719667781406294046>')
      message.channel.send(embed);
   }
}
   }