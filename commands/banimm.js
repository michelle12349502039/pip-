/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
  name: 'banimm',
  aliases: [],
  description: 'ban immediately report cmnd',
  async run(client, message, args) {
    const { prefix } = client.settings.ensure(message.author.id, { prefix: ';' })
    const url = args[1]
    if (!args[0]) {
      await message.channel.send(`╰╮⸝⸝ **FORMAT** ᵎᵎ \n> \`${prefix}banimm [ids] | [reason + proof]\` \n\n× spoil/censor things manually if needed ⸝⸝ \n× follow the __format__ or it will be denied ⸝⸝ \n× we do not accept __server IDs__ ⸝⸝`)
    } else {
      const author = message.author
      const data = args.join(" ")
      const input = data.split(" | ")
      const ids = input[0]
      const reason_proof = input[1]
      //if (input[1].content.toLowerCase().input[1]//.content.includes('https://docs.google.com/')) {
      //return message.channel.send("Documents are not allowed in ban immediately")
      //}
      embed = new client.embed()
        .setTitle('Ban Immediately Report')
        .addField('Watch out for: ', `${ids}`)
        .addField(`Reasons & proof: `, `${reason_proof}`)
        .setFooter(`${author.tag} · ${author.id}`, `${author.displayAvatarURL()}`)
      guild = message.guild
      client.channels.cache.get('720732947904200705').send(embed).then(modembed => modembed.react('<:emote01:810954997188788254>').then(modembed.react('<:emote02:810954997079998565>')));
      message.channel.send('╰╮⸝⸝ **SUBMITTED** ᵎᵎ \n> your report for `ban immediately` has been submitted! \n\n× do not get upset if it gets denied ⸝\n× you will be dmed if things need to be changed ⸝⸝')
    }
  }
}
