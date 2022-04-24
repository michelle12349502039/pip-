/** 
 * @type {import('../typings').Command} 
 */
 module.exports = {
  name: 'help',
  description: 'shows you all the cmnds that pip has to offer!',
  async run(client, message, args) { 
    const embed = new client.embed()
      .setTitle('**╰╮⸝⸝ COMMANDS ᵎᵎ**')
      .setDescription('the default prefix is `;`\n\n× **fun cmnds** :: ⤾\n> `hug`\n> `kiss`\n> `mcyt`\n> `pat`\n> `slap`\n× **animal cmnds** :: ⤾\n> `cat`\n> `dog`\n> `oscar`\n> `otter`\n× **mod cmnds** :: ⤾\n> `dm`\n> `edit`\n> `say`\n> `status`')
      .setFooter('made by michele + ang owo but michelle is better')
      .setColor('#FDFDFD')
    message.channel.send(embed);
  }
}
