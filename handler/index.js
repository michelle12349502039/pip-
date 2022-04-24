require('dotenv').config()
const { Client, Collection, MessageEmbed } = require('discord.js')
const config = require('../config.js')
const { readdirSync } = require('fs')
const { join } = require('path')
const Enmap = require('enmap')

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

module.exports = class Ang extends Client {
    /** @param {import('discord.js').ClientOptions} opt */
    constructor(opt) {
        super(opt)
        this.settings = new Enmap('settings', {})
        this.commands = new Collection()
        this.embed = class Embed extends MessageEmbed { color = "#c46b36"; }
        this.config = config
    }

    start() {
        this.loadCommands()
        this.loadEvents()
        const token = process.env.token;
        this.login(token)
    }

    async loadCommands() {
        const directory = readdirSync(join(__dirname, '..', 'commands'))

        for (let file of directory) {
            const command = require(`../commands/${file}`)
            this.commands.set(command.name, command)
        }
    }

    async loadEvents() {
        const directory = readdirSync(join(__dirname, '..', 'events'))

        for (let file of directory) {
            const event = require(`../events/${file}`)
            this.on(event.name, event.exec.bind(null, this))
        }
    }
}
