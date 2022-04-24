/** 
 * @type {import('../typings').Command} 
 */
module.exports = {
  name: 'love',
  aliases: ['luv'],
  description: 'owo',
    async run(client, message, args) {
      const user = message.mentions.users.first();

       const images = ["https://cdn.discordapp.com/attachments/812071041756692560/813964246660022272/54f655fe9bb36714b78acbd2f3222e33.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/820463084018860042/7e5f2c67729e58f66095f936294af527.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/820463043066200064/image0-4.jpg",
       "https://cdn.discordapp.com/attachments/812071041756692560/820463026356224000/ed9007af9f10093d05c3a2cefd126b65.jpg",
       "https://cdn.discordapp.com/attachments/812071041756692560/820463006352932864/image0-6.jpg",
       "https://cdn.discordapp.com/attachments/812071041756692560/820462926883979264/ILY21.jpg",
       "https://cdn.discordapp.com/attachments/812071041756692560/813967068201353296/320e8258c06c3626989b02456c5cd24c.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813967022839824414/bbd9e46d09d2c2c5c80d801ad7b180ee.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813966994322751529/b3c29ea68973abcd22a50e0f903a9150.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813964269502464040/6a2bab87f16744a39baa22622a2f2384.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813964246660022272/54f655fe9bb36714b78acbd2f3222e33.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813964204775440445/3d2ed5f92824d1c8c4e78ed0515ca0d4.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813964184987107388/500fdd8aebf26559c0d61acfd6a81259.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813964137956376606/3a1a58925fef283cc74822f368887e0d.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813964098886303764/0540b4b02a073b1af10a3c568e074edf.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813964062920671252/f4c0dc105cc0471824e8e7db1010eb97.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813963952664084480/b8a7d4e27ba727b5873a8c045c374e1a.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813963911090929684/090b9b33f9a412f64553b0fb3dc1d9ef.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813963862549200916/615240a739d6179f9deab7aaf4ede4f5.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813963841212907590/a34832d0cd8bb3b9adca9caade235071.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813963796384186378/ea522874aa390ce4f1fddf9c533de58e.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813963388844638208/a35972e4eaeb4aeb1c65a5ba6ab07665.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813963230345953290/40d9b5250e49a0b7e024edd111b7a6cf.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813963156639580160/62175d642a037faf94b81446180e35d1.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813963140425318440/d382edbbfd1b31faced57c5f2b94dc3e.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/813963128269701120/ee6a3593e95d8651fdcdbbc081cdd1e0.png",
       "https://cdn.discordapp.com/attachments/812071041756692560/812079739141095434/image0_2.jpg",
       "https://cdn.discordapp.com/attachments/812071041756692560/812079687157153853/ArcticResponsibleBlackfly-small.gif",
       "https://cdn.discordapp.com/attachments/812071041756692560/812079649650638848/ikcds8bg71451.jpg",
       "https://cdn.discordapp.com/attachments/812071041756692560/812079510865313812/119970b4612a255a06408303ac5f2507.png"];

       
   const image = Math.floor(Math.random() * images.length);
   const embed = new client.embed()
   .setTitle('you are loved! pls remember to stay hydrated and to eat <3')
   .setImage(String([images[image]]))
   .setFooter("images belong to their respective owners.")
      message.channel.send(embed);
   }
}

