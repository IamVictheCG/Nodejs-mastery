//NOTE: the order matters. First you listen for/to an event, then you emit it!!!

const EventEmitter = require('events')

const customEmitter = new EventEmitter

customEmitter.on('response', () => {
    console.log("Data recieved")
})
customEmitter.on('response', () => {
    console.log("Analysing data")
})



customEmitter.emit("response")