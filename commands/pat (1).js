/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
    name: 'pat',
        aliases: ['pet'],
    description: 'pets another user',
        async run(client, message, args) { 
          const user = message.mentions.users.first();
    const images = ["https://cdn.discordapp.com/attachments/811819936187547668/812067754965336095/pat1.gif", "https://cdn.discordapp.com/attachments/811819936187547668/812067749488361513/pat2.gif", "https://cdn.discordapp.com/attachments/811819936187547668/812067751341326367/pat3.gif", "https://cdn.discordapp.com/attachments/811819936187547668/812067744669106186/pat4.gif", "https://cdn.discordapp.com/attachments/811819936187547668/812067733352611890/pat5.gif", "https://cdn.discordapp.com/attachments/811819936187547668/812046271288049704/giphy.gif", "https://cdn.discordapp.com/attachments/811819936187547668/812046922898472980/original.gif", "https://cdn.discordapp.com/attachments/811819936187547668/812047456929710090/tumblr_pktx27Uvtr1wwzizz_540.gif", "https://cdn.discordapp.com/attachments/811819936187547668/811819999307366401/image0.gif", "https://cdn.discordapp.com/attachments/811819936187547668/811820003539288064/image0.gif", "https://cdn.discordapp.com/attachments/811819936187547668/811820009533341706/image0.gif", "https://cdn.discordapp.com/attachments/811819936187547668/811819981553008640/image0.gif", "https://cdn.discordapp.com/attachments/811819936187547668/811819987336822854/image0.gif", "https://cdn.discordapp.com/attachments/811819936187547668/811819993976406026/image0.gif", "https://cdn.discordapp.com/attachments/811819936187547668/811819965102555157/image0.gif", "https://cdn.discordapp.com/attachments/811819936187547668/811819969632272424/image0.gif", "https://cdn.discordapp.com/attachments/811819936187547668/811819975579795476/image0.gif", "https://cdn.discordapp.com/attachments/811819936187547668/811819957796995092/image0.gif"];
    const image = Math.floor(Math.random() * images.length);
    const embed = new client.embed()
   .setImage(String([images[image]]))
   .setDescription(`${message.author} just gave ${user} a lil pat`)
   const embed1 = new client.embed()
   .setDescription(`you have to mention someone to pat.`)
   if(!user) {
     message.channel.send(embed1);
   }  else {
      const replies = ['you did great today! <a:tpengupat:719668067239460945>']
      if (message.author.id === user.id) return message.channel.send(replies[~~(Math.random() * replies.length)])
      message.channel.send(embed);
   }
}
   }