/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
    name: 'helper',
    aliases: [],
    description: 'helper add ar',
    async run(client, message, args) {
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send("You do not have the proper perms to run this command, try again later.");
        const embed = new client.embed()
            .setThumbnail('https://media.discordapp.net/attachments/720732947904200705/873111653812666418/flowercat10crop.jpg')
            .setTitle('**╰╮⸝⸝ YOUR REQUEST HAS BEEN SEEN ᵎᵎ**')
            .setDescription(`**× thank you for your request to add your portal! :: ⤾**\n\n× you will be pinged if anything else is needed ⸝⸝\n× once your portal is added you will no longer be able to type here ⸝⸝\n× please read the pinned msgs to clarify any questions you may have ⸝⸝`)
            .setFooter(` ────・・⸝⸝ please be patient ᵎᵎ`, ` https://images-ext-2.discordapp.net/external/lL7NcVC_IQpApJhbJunZZUl--Mgclirr-GGUVZsVSoo/https/cdn.discordapp.com/emojis/781308200301363231.png`)
            .setTimestamp()
        message.channel.bulkDelete(1);
        message.channel.send('a helper has seen this!', embed)
    }
}