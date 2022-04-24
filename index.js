const Ang = require('./handler')
const client = new Ang({ partials: ['REACTION', 'MESSAGE', 'CHANNEL', 'USER'] })

client.start()
