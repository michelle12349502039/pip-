/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
  name: 'dog',
  aliases: ['doggo'],
  description: 'sends out dog pics and images',
  async run(client, message, args) {
    const user = message.mentions.users.first();
    const images = ["https://cdn.discordapp.com/attachments/811848793079021598/811848854194094080/image0.jpg", "https://cdn.discordapp.com/attachments/811848793079021598/811848850066374666/image0.jpg", "https://cdn.discordapp.com/attachments/811848793079021598/811848845805486150/image0.jpg", "https://cdn.discordapp.com/attachments/811848793079021598/811848842802757652/image0.jpg", "https://cdn.discordapp.com/attachments/811848793079021598/811848838833897482/image0.jpg", "https://cdn.discordapp.com/attachments/811848793079021598/811848835117613066/image0.gif", "https://cdn.discordapp.com/attachments/811848793079021598/811848811843682314/image0.gif", "https://cdn.discordapp.com/attachments/811848793079021598/811848815455502376/image0.gif", "https://cdn.discordapp.com/attachments/811848793079021598/811848821063548948/image0.gif", "https://cdn.discordapp.com/attachments/811848793079021598/811848828751446087/image0.gif"];
    const image = Math.floor(Math.random() * images.length);
    const embed = new client.embed()
      .setImage(String([images[image]]))
      .setTitle(`woof! :dog:`)
    message.channel.send(embed);
  }
}
