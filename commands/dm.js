/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
  name: 'dm',
  aliases: [],
  description: 'sends a dm to a user',
  async run(client, message, args) {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send("You do not have the proper perms to run this command, try again later.");
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(
        `You did not mention a user or you gave an invalid id`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send("You did not specify your message");
    const dm = await user.send(args.slice(1).join(" ")).catch(() => { })
    if (!dm) return message.channel.send("Uh oh! I wasnt able to dm that user");
    message.channel.send(`I have sent a message to ${user.user.tag}`);
  },
};
