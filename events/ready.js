const os = require('os');
const { WebhookClient } = require('discord.js')
/**
 * @type {import('../typings').ReadyEvent}
 */
module.exports = {
    name: 'ready',
    async exec(client) {

        client.settings.ensure("status", {
            name: '.gg/portal 🎐 | ;help', 
            type: 'STREAMING',
            url: 'https://www.youtube.com/watch?v=MEg-oqI9qmw',
            status: 'online'
        })

        console.log(`Logged in as ${client.user.tag}! ang sucks :D - michelle`)
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
