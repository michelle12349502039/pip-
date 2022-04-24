/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
  name: 'dmadv',
  aliases: [],
  description: 'dm adv reports!',
  async run(client, message, args) {
    const { prefix } = client.settings.ensure(message.author.id, { prefix: ';' })
    const url = args[1]
    if (!args[0]) {
      await message.channel.send(`╰╮⸝⸝ **FORMAT** ᵎᵎ \n> \`${prefix}dmadv [userid] [img url]\` \n\n× follow the __format__ or it will be denied ⸝⸝ \n× we do not accept __server IDs__ ⸝⸝`, { allowedMentions: { parse: ['users'] } })
    }
    else if (url.startsWith("https://")) {
      const userid = args[0]
      const author = message.author
      const av = author.displayAvatarURL({ dymanic: true, format: 'png' })
      if (/^\d{17,19}$/.test(args[0])) {
        user = await client.users.fetch(args[0]).catch(() => { })
        try {
          embed = new client.embed()
            .setTitle('Dm Adv Report')
            .addField('Advertiser', `${user.id}`)
            .addField('Advertiser Tag', `${user.tag}`)
            .setFooter(`${author.tag} · ${author.id}`, `${author.displayAvatarURL()}`)
            .setImage(args[1])
          guild = message.guild
          client.channels.cache.get('720732947904200705').send(embed).then(modembed => modembed.react('<:emote01:810954997188788254>').then(modembed.react('<:emote02:810954997079998565>')));
          message.channel.send('╰╮⸝⸝ **SUBMITTED** ᵎᵎ \n> your report for `dm adv` has been submitted! \n\n× you will be dmed if things need to be changed ⸝⸝ \n× do not get upset if it gets denied ⸝⸝')
        } catch (error) {
          message.channel.send(`Please put a valid user id. \`${prefix}dmadv [userid] [img url]\``, { allowedMentions: { parse: ['users'] } })
        }
      }
      else {
        await message.channel.send(`Please put a user id. \`${prefix}dmadv [userid] [img url]\``, { allowedMentions: { parse: ['users'] } })
      }
    }
    else {
      await message.channel.send(`Please send a image link as proof of dm adv! Make sure the url starts with https! \`${prefix}dmadv [userid] [img url]\``, { allowedMentions: { parse: ['users'] } })
    }
  }
}
