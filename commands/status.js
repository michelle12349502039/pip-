/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
  name: 'status',
  aliases: [],
  description: 'change the bot\'s status!',
  async run(client, message, args) {
    console.log(message.author.id);
    console.log(['723242845808361523','365309027368042526','249986970476871680','458116375831904268']);
    console.log(['723242845808361523','365309027368042526','249986970476871680','458116375831904268'].includes(message.author.id))
    if (['723242845808361523','365309027368042526','249986970476871680','458116375831904268'].includes(message.author.id)) {
      if(!args[0]) return message.channel.send("**╰╮⸝⸝ FORMAT ᵎᵎ **\n > `;status [name] [type] [url]`\n\n×  name: whatever you want the status to be ⸝⸝\n×  type: streaming, watching, listening, playing ⸝⸝\n×  url: link to whatever the bot is streaming ⸝⸝")
      if (args[0].toLowerCase() == "name") {
        if (args[1]) {
          args.shift();
          message.channel.send("activity name set to `" + args.join(" ") + "`!\n*didn't mean to do that?* previous name:`" + client.settings.get("status", 'name'), +"`");
          client.settings.set("status", args.join(" "), 'name');
        } else {
          message.channel.send("activity name reset!\n*didn't mean to do that?* previous name:`" + client.settings.get("status", 'name'), +"`");
          client.settings.set("status", "", 'name');
        }
      } else if (args[0].toLowerCase() == "type") {
        if (["LISTENING", "PLAYING", "STREAMING", "WATCHING"].includes(args[1].toUpperCase())) {
          client.settings.set("status", args[1].toUpperCase(), 'type');
          message.channel.send("activity type set to `" + args[1].toUpperCase() + "`");
        } else {
          message.channel.send("`type` must be one of four types:\n> `LISTENING` `PLAYING` `STREAMING` `WATCHING`");
        }
      } else if (args[0].toLowerCase() == "url") {
        if (args[1]) {
          message.channel.send("activity url set to `" + args[1] + "`!\n*didn't mean to do that?* previous url:`" + client.settings.get("status", 'url'), +"`");
          client.settings.set("status", args[1], 'url');
        } else {
          message.channel.send("activity url reset!\n*didn't mean to do that?* previous url:`" + client.settings.get("status", 'url'), +"`");
          client.settings.set("status", "", 'url');
        }
      } else if (args[0].toLowerCase() == "status") {
        if (["online", "dnd", "idle", "invisible"].includes(args[1].toLowerCase())) {
          client.settings.set("status", args[1].toLowerCase(), 'status');
          message.channel.send("activity status set to `" + args[1].toLowerCase() + "`");
        } else return message.channel.send("`status` must be one of four types:\n> `online` `dnd` `idle` `invisible`");
      } else return  message.channel.send("**╰╮⸝⸝ FORMAT ᵎᵎ **\n > `;status [name] [type] [url]`\n\n×  name: whatever you want the status to be ⸝⸝\n×  type: streaming, watching, listening, playing ⸝⸝\n×  url: link to whatever the bot is streaming ⸝⸝")
      let botActivity = {
        activity: {
          name: client.settings.get("status", 'name'),
          type: client.settings.get("status", 'type'),
          url: client.settings.get("status", 'url')
        },
        status: client.settings.get("status", 'status')
      }
      client.user.setPresence(botActivity);
    }
  }
}