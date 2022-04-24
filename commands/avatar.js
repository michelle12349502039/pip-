/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
    name: 'avatar',
    aliases: ['av'],
    description: 'get someone\'s avatar',
    async run(client, message, args) {
        const user = client.users.cache.find(u => [u.username, u.id].includes(args[0])) || message.mentions.users.first() || message.author;
        message.channel.send(new client.embed().setImage(user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 })).setTitle(user.tag));
    }
}
