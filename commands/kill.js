/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
    name: 'kill',
        aliases: ['kills'],
    description: 'kills another user',
        async run(client, message, args) { 
const user = message.mentions.users.first();

const images = ["https://cdn.discordapp.com/attachments/773214862879752202/784278594297397258/image0.gif", "https://cdn.discordapp.com/attachments/773214862879752202/784278563104358410/image0.gif", "https://cdn.discordapp.com/attachments/773214862879752202/773256403963871262/fire_force.gif", "https://cdn.discordapp.com/attachments/773214862879752202/773255978736549929/knife_waving.gif", "https://cdn.discordapp.com/attachments/773214862879752202/773255556848681030/boudry.gif", "https://cdn.discordapp.com/attachments/773214862879752202/773254003534331904/bakugo.gif", "https://cdn.discordapp.com/attachments/773214862879752202/773245201975345182/image0.gif", "https://cdn.discordapp.com/attachments/773214862879752202/773245193917956096/image0.gif", "https://cdn.discordapp.com/attachments/773214862879752202/773245185500381234/image0.gif", "https://cdn.discordapp.com/attachments/773214862879752202/773245176079581248/image0.gif"]
const image = Math.floor(Math.random() * images.length);
   const embed = new client.embed()
   .setImage(String([images[image]]))
   .setDescription(`${message.author} just killed ${user}`)
   const embed1 = new client.embed()
   .setDescription(`you have to mention someone to kill.`)
   if(!user) {
      message.channel.send(embed1);
    }  else {
    const images = ["https://cdn.discordapp.com/attachments/709990756940513341/794079160808636446/hug.gif"];
    const image = Math.floor(Math.random() * images.length);
    const embed2 = new client.embed()
    .setImage(String([images[image]]))
    .setDescription(`have a hug instead!`)
       if (message.author.id === user.id) return message.channel.send(embed2);
       message.channel.send(embed);
    }
 }
    }