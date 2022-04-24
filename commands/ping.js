/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
    name: 'ping',
    description: 'checks the bots ping',
    async run(client, message, args) { 
        const embed = new client.embed()
        message.channel.send('calculating ping . . ').then(resultmsg => {
            var ping = resultmsg.createdTimestamp - message.createdTimestamp;
            var botping = Math.round(client.ws.ping)
            var embed = new client.embed()
            .setDescription(`⨯ __**bot latency :**__ ${botping}\n ⨯ __**api latency :**__ ${ping}`)
            .setTitle('ping pong!')
            message.channel.bulkDelete(1);
            message.channel.send(embed);
        })
  }
}