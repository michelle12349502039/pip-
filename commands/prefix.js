/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
    name: 'setprefix',
    aliases: ['prefix'],
    description: 'sets a personalized prefix',
    async run(client, message, args) {
      const data = args.join(" ")
      const { prefix } = client.settings.ensure(message.author.id, { prefix: ';' })
      if (!args[0]) return message.channel.send(`To set my prefix, please use \`${prefix}setprefix <prefix>\``)
      if (data.length > 100) return message.channel.send(new client.embed().setDescription('My prefix cant be longer than 100 characters!'))
      client.settings.set(message.author.id, data, 'prefix')
      message.channel.send(`Successfully set my prefix to \`${data}\``, { allowedMentions: { parse: ['users'] } })
    }
}