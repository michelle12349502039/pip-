const fetch = require('axios');
/** 
 * @type {import('../typings').Command} 
 */
 module.exports = {
    name: 'serveravatar',
    aliases: ['sav','savatar','serverav'],
    description: 'get someone\'s server avatar',
    async run(client, message, args) {
        //const target = message.guild.members.cache.find(u => [u.username, u.id].includes(args[0])) || message.mentions.members.first() || message.member;
        const target = message.member;

        let res = await fetch.get(`https://discord.com/api/guilds/${message.guild.id}/members/${target.id}`, {
            headers: {
                Authorization: `Bot ${client.token}`
            }
        })

        console.log(`https://cdn.discordapp.com/guilds/${message.guild.id}/members/${target.id}/avatars/${res.data.user.avatar}.webp?size=1024`);
        if([null,undefined].includes(res.data.user.avatar)) return message.channel.send('unable to get avatar! :(');
        let url = `https://cdn.discordapp.com/guilds/${message.guild.id}/members/${target.id}/avatars/${res.data.user.avatar}.webp?size=1024`
        message.channel.send(new client.embed().setImage(url)).then(m=>{
            setTimeout(() => {
                m.delete();
            }, 10000);
        })
    }
}