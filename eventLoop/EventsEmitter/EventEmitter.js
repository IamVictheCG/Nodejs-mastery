//NOTE: the order matters. First you listen for/to an event, then you emit it!!!

const EventEmitter = require('events')

const customEmitter = new EventEmitter

customEmitter.on('response', (name, id) => {
    console.log(`Data recieved; User: ${name} Id: ${id}`)
})
customEmitter.on('response', (age, gender) => {
    console.log(`Analysing data; Age: ${age}`)
})



customEmitter.emit("response")