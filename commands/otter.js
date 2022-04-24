/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
    name: 'otter',
        aliases: ['otters'],
    description: 'sends out otter images',
        async run(client, message, args) { 
          const user = message.mentions.users.first();
    const images = ["https://cdn.discordapp.com/attachments/747449857026818198/811820757369094214/unknown.png", "https://cdn.discordapp.com/attachments/747449857026818198/811820698293108736/unknown.png", "https://cdn.discordapp.com/attachments/747449857026818198/811820635457454100/unknown.png", "https://cdn.discordapp.com/attachments/747449857026818198/811820565055799316/unknown.png", "https://cdn.discordapp.com/attachments/747449857026818198/811820472013946890/unknown.png", "https://cdn.discordapp.com/attachments/747449857026818198/811820247061102622/unknown.png", "https://cdn.discordapp.com/attachments/747449857026818198/811820171953700904/unknown.png", "https://cdn.discordapp.com/attachments/747449857026818198/811820094165483540/unknown.png", "https://cdn.discordapp.com/attachments/747449857026818198/811820032455344148/unknown.png", "https://cdn.discordapp.com/attachments/747449857026818198/811819883461476372/unknown.png"];
    const image = Math.floor(Math.random() * images.length);
    const embed = new client.embed()
   .setImage(String([images[image]]))
   .setTitle(`look! :otter:`)
      message.channel.send(embed);
   }
}
