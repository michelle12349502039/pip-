/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
  name: 'edit',
  aliases: [],
  description: "edits a bot's msgs",
  async run(client, message, args) {
    const { prefix } = client.settings.ensure(message.author.id, { prefix: ';' })
    if (!(message.member.hasPermission('MANAGE_MESSAGES') || message.author.id == '723242845808361523' || message.author.id == '723242845808361523')) return;
    if (!args.length > 1) return message.channel.send(`Invalid format! Please use the following:\n> \`${prefix}edit <message link> <new content>\``, { allowedMentions: { parse: ['users'] } })
    if (/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(args[0])) {
      let arr = RegExp.$4.toString().split("/")
      let channel = arr[3]
      let msg = arr[4]
      await client.channels.fetch(channel).then(async c => {
        if (!c.isText()) return;
        await c.messages.fetch(msg).then(m => {
          args.shift()
          m.edit(args.join(' '));
          message.delete().catch(()=>{});
        }).catch(e => { message.respond(e) })
      }).catch(e => { message.respond(e) })
    } else return message.channel.send(`Invalid format! Please use the following:\n> \`${prefix}edit <message link> <new content>\``, { allowedMentions: { parse: ['users'] } })
  }
}
