/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
    name: 'kiss',
        aliases: ['kith'],
    description: 'kisses a another user',
        async run(client, message, args) { 
                const user = message.mentions.users.first();
    const images = ["https://cdn.discordapp.com/attachments/811816572044836865/811816789466021898/image0.gif", "https://cdn.discordapp.com/attachments/811816572044836865/811816762516832266/image0.gif", "https://cdn.discordapp.com/attachments/811816572044836865/811816770578153492/image0.gif", "https://cdn.discordapp.com/attachments/811816572044836865/811816776417411113/image0.gif", "https://cdn.discordapp.com/attachments/811816572044836865/811816782826045480/image0.gif", "https://cdn.discordapp.com/attachments/811816572044836865/811816728765661184/image0.gif", "https://cdn.discordapp.com/attachments/811816572044836865/811816736198361098/image0.gif", "https://cdn.discordapp.com/attachments/811816572044836865/811816742170394626/image0.gif", "https://cdn.discordapp.com/attachments/811816572044836865/811816747920785438/image0.gif", "https://cdn.discordapp.com/attachments/811816572044836865/811816754463637514/image0.gif"];
    const image = Math.floor(Math.random() * images.length);
    const embed = new client.embed()
    .setImage(String([images[image]]))
    .setDescription(`${message.author} just gave ${user} a kiss! **kiss them back right now!!**`)
    const embed1 = new client.embed()
    .setDescription(`you have to mention someone to kiss.`)
     if(!user) {
     message.channel.send(embed1);
  }  else {
      const replies = ['kithes! <a:rheart6:781478832875372554>', 'ily! <a:rheart8:781478877389651990>']
      if (message.author.id === user.id) return message.channel.send(replies[~~(Math.random() * replies.length)])
      message.channel.send(embed);
   }
}
   }