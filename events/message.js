/** 
 * @type {import('../typings').MessageEvent} 
 */
module.exports = {
    name: 'message',
    async exec(client, message) {
        if (message.author.bot) return
        //if (message.channel.type === 'dm'){ 
          //const embed = new client.embed()
            //.setTitle('New Dm')
            //.setDescription(message.content)
            //.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
            //.setColor('#FDFDFD')
            //.setFooter(`${message.author.id} - ${message.createdAt.toString().slice(0, 24)}`)
          //client.channels.cache.get('812463867355463713').send(embed)
        //}
        if (!message.guild) return
      //michelle being stupid
        if (message.content == 'if u like pina colada') {
          await message.channel.send('or getting caught in the rain')
        }
        else if (message.content == 'if ur not into yoga') {
          await message.channel.send('if u have half a brain')
        }
        else if (message.content == 'you are') {
         await message.channel.send("my fire")
        }
        else if (message.content == 'the one') {
          await message.channel.send("desire")
        }
        else if (message.content == 'believe') {
          await message.channel.send("when i say i want it that way")
        }
        else if (message.content == 'mommy?') {
          await message.channel.send("sorry.")
        }
      //i got forced to add this
        else if (message.content == 'twice') {
          await message.channel.send("you are my champagne 🍾, my wine 🍷, my tequila 🍋, margarita 🍸, mojito with lime 🍹, sweet mimosa 🥂, pina colada 🧉")
        }
        else if (message.content == 'ratio') {
          await message.react(client.guilds.cache.get('780134232214863893').emojis.cache.get('901663451460558860'))
        }
        const { prefix } = client.settings.ensure(message.author.id, { prefix: ';' })
        if (new RegExp(`^<@!?${client.user.id}>$`).test(message.content)) {
          message.channel.send(`Your prefix is \`${prefix}\``)
        }
      //publishing message method, ratelimit 10 per hr (i think)
        if (message.channel.type === 'news' && message.channel.id == 705520374854451351 || message.channel.type === 'news' && message.channel.id == 710178143734071296) {
          message.crosspost()
          .then(() => console.log('Crossposted message'))
          .catch(console.error);
        }
        if (!message.content.startsWith(prefix)) return
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const cmd = args.shift().toLowerCase()
        const command = client.commands.find((c, n) => n === cmd || c.aliases && c.aliases.includes(cmd))
        if (command) {
            try {
                command.run(client, message, args)
            } catch (e) {
                console.error(e)
            }
        } else console.log(cmd+" is not a command!")
    }
}

