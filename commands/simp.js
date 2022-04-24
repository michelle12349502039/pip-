/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
    name: 'simp',
    aliases: [],
    description: 'simp for epic twitch streamers',
    async run(client, message, args) {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("invalid parmesan")
        if(args[0]==="1") message.channel.send("<@&732297037273366609> **vaarka is now live! come watch him @ https://www.twitch.tv/vaarka **");
        else if(args[0]==="2") message.channel.send("<@&732297037273366609> **kp is now live! come watch them @ https://www.twitch.tv/kidwithprobiems **");
        else message.channel.send("r u ok??")
    }
}