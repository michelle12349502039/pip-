/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
   name: 'oscar',
   aliases: ['korin'],
   description: 'sends out images of oscar',
   async run(client, message, args) {
      let tag;
      await client.users.fetch('443646504469790720').then(u=>{tag = u.tag})
      const user = message.mentions.users.first();
      const images = ["https://cdn.discordapp.com/attachments/747449857026818198/825862771466960956/image1.png", "https://cdn.discordapp.com/attachments/747449857026818198/825862676172374066/image0.png", "https://cdn.discordapp.com/attachments/747449857026818198/825862510548090910/image0.png", "https://cdn.discordapp.com/attachments/747449857026818198/825862462204543016/image0.png", "https://cdn.discordapp.com/attachments/747449857026818198/825862281106685962/image0.png", "https://cdn.discordapp.com/attachments/747449857026818198/825862252115787836/image0.png", "https://cdn.discordapp.com/attachments/747449857026818198/825862132423720970/image0.png", "https://cdn.discordapp.com/attachments/747449857026818198/825862051935027250/image0.png", "https://cdn.discordapp.com/attachments/747449857026818198/825862019428909056/image0.png", "https://cdn.discordapp.com/attachments/747449857026818198/825861925199020103/image0.png", "https://cdn.discordapp.com/attachments/747449857026818198/825861894262620170/image0.png", "https://cdn.discordapp.com/attachments/747449857026818198/825861620197490698/image0.png", "https://cdn.discordapp.com/attachments/747449857026818198/825861545493397584/image0.png", "https://cdn.discordapp.com/attachments/747449857026818198/825861305625870386/image0.png", "https://cdn.discordapp.com/attachments/747449857026818198/825861115145355354/image0.png", "https://cdn.discordapp.com/attachments/739198586545504318/862797113670631464/image1.png"];
      const image = Math.floor(Math.random() * images.length);
      const embed = new client.embed()
         .setImage(String([images[image]]))
         .setTitle(`oscar is best boi`)
         .setFooter(`${tag} is the owner of oscar! <3`)
      message.channel.send(embed);
   }
}