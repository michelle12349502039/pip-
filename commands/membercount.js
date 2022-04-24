
/** * @type {import('../typings').Command} 
 */
module.exports = {
    name: 'membercount',
    aliases: ['members'],
    description: 'membercount!',
    async run(client, message, args) {
      const embed = new client.embed()
        .setDescription(`${message.guild.memberCount} dnf stans!!!`)
      message.channel.send(embed)
    }
}