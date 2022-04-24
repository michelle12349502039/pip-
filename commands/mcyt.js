/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
  name: 'mcyt',
  aliases: ['megs'],
  description: 'uwu',
    async run(client, message, args) {
      const titles = ["\"Women are temporary, revolution is forever\" - ghostbur", "\"If i cant make them smile, ill make them cry\" - fundy", "\"officer, I dropkicked that child in self defense.\" - technoblade", "\"just killed a woman feeling good\" - tommy", "\"its clay it's like me but hard\" - dream", "\"back in hs when i didn't have a huge ego, a lesbian referred to me as actually pretty funny\" - technoblade", " \"please wilbur have a carrot calm yourself\" - tommyinnit", "\"theres a woman in my house- thats not right-\" - tommyinnit", "\"im gay for the egg\" - wilbur", "\"they weren't always orphans\"  - technoblade", "\"down with the revolution boys, it was never went to be\" - eret", "\''Why don’t we just sit down, calm down, over a nice bowel of fetish'' - tommyinnit", "\''My first decree, as the President of L'manburg... The EMPEROR, of this GREAT COUNTRY! IS TO REVOKE!! THE CITIZENSHIP OF WILBUR SOOT AND TOMMYINNIT! GET 'EM OUTTA HERE!\ - jschlatt", "\"im bouta hit-spit-spackle the fuck outta someone\" - tubbo"] 
      const sample = (arr) => arr[~~(Math.random() * arr.length)]
      const subreddit = 'https://reddit.com/r/' + sample(['dreamsmp']) + '/.json'
      const { data } = await require('node-fetch')(subreddit).then(r => r.json())
      const urls = data.children.map(s => s.data.url_overridden_by_dest).filter(s => /(png|webp|jpe?g|gif)$/.test(s))
      message.channel.send(new client.embed().setTitle(titles[~~(Math.random() * titles.length)]).setImage(sample(urls)).setColor('#FDFDFD'))
  }
}