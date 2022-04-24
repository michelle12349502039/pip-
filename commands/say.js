/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
    name: 'say',
    aliases: [],
    description: 'makes the bot say something!',
    async run(client, message, args) {
      if (message.member.hasPermission('MANAGE_MESSAGES') || message.author.id == '723242845808361523'){
        const { prefix } = client.settings.ensure(message.author.id, { prefix: ';' })
        const data = message.content.slice(prefix.length + 3)
        message.delete()
        //client.channels.cache.get('739198586545504318').send(data)
        await message.channel.send(data)
      } else if (!args[0]){
        const { prefix } = client.settings.ensure(message.author.id, { prefix: ';' })
        await message.channel.send(`Please use this formatting to send messages \`${prefix}say [text]\``, { allowedMentions: { parse: ['users'] } })        
      }
    }
}