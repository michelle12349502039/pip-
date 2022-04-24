/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
  name: 'cat',
  aliases: ['catto'],
  description: 'sends out cat images and gifs',
  async run(client, message, args) {
    const fetch = require('node-fetch');
    const response = await fetch('https://aws.random.cat/meow');
    const data = await response.json();
    const embed = new client.embed()
      .setTitle('meow')
      .setImage(url = data['file'])
    message.channel.send(embed)
  }
}
