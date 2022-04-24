module.exports = {
    name: 'messageReactionAdd',
    async exec(client, reaction, user) {
        if (reaction.message.partial) await reaction.message.fetch()
        if (user.partial) await user.fetch()
        if (!reaction.message.guild || user.bot || reaction.message.author.id !== client.user.id) return
      // if the embed is titled "Dm Adv Report and the emoji id is the check thingy
        if (reaction.emoji.id === '810954997188788254' && reaction.message.embeds[0].title === 'Dm Adv Report') {
            const channel = client.channels.cache.get('705520374854451351')
            const footertext = reaction.message.embeds[0].footer.text
            const submiter = footertext.split("· ")
            const id = reaction.message.embeds[0].fields[0].value.match(/\d+/g)[0]
            channel.send(id + ' \n' + reaction.message.embeds[0].image.url + ' \n- submitted by <@' + submiter[1] + '>', { allowedMentions: { parse: ['users'] } })
            accepter = reaction.message.guild.members.cache.get(user.id)
            reaction.message.edit(`<:emote01:810954997188788254> **Accepted by** ${accepter}`,{embed:reaction.message.embeds[0]})
        // if the embed is titled "Dm Adv Report and the emoji id is the x thingy
        } else if (reaction.emoji.id === '810954997079998565' && reaction.message.embeds[0].title === 'Dm Adv Report') {
          denier = reaction.message.guild.members.cache.get(user.id)
          reaction.message.edit(`<:emote02:810954997079998565> **Denied by** ${denier}`,{embed:reaction.message.embeds[0]})
          const footertext = reaction.message.embeds[0].footer.text
          const submiter = footertext.split("· ")
          try {
            client.users.cache.get(submiter[1]).send(`Your __dm adv__ report has been denied by ${denier}`)
          }
          catch (error){
            console.log(error)
          }
        } 
        else if (reaction.emoji.id === '810954997188788254' && reaction.message.embeds[0].title === 'Ban Immediately Report') {
          const channel = client.channels.cache.get('710178143734071296')
          const footertext = reaction.message.embeds[0].footer.text
          const submiter = footertext.split("· ")
          const ids = reaction.message.embeds[0].fields[0].value
          const reason_proof = reaction.message.embeds[0].fields[1].value
          channel.send(ids + ' \n' + reason_proof + ' \n- submitted by <@' + submiter[1] + '>', { allowedMentions: { parse: ['users'] } })
          accepter = reaction.message.guild.members.cache.get(user.id)
          reaction.message.edit(`<:emote01:810954997188788254> **Accepted by** ${accepter}`,{embed:reaction.message.embeds[0]})
        } else if (reaction.emoji.id === '810954997079998565' && reaction.message.embeds[0].title === 'Ban Immediately Report') {
          denier = reaction.message.guild.members.cache.get(user.id)
          reaction.message.edit(`<:emote02:810954997079998565> **Denied by** ${denier}`,{embed:reaction.message.embeds[0]})
          const footertext = reaction.message.embeds[0].footer.text
          const submiter = footertext.split("· ")
          try {
            client.users.cache.get(submiter[1]).send(`Your __ban immediately__ report has been denied by ${denier}`)
          }
          catch (error){
            console.log(error)
          }
        } 
    }
}
