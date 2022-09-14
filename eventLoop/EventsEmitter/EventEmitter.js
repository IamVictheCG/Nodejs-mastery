//NOTE: the order matters. First you listen for/to an event, then you emit it!!!

const EventEmitter = require('events')

const customEmitter = new EventEmitter

// function eemit(name, id,) {
    customEmitter.on('response', (name, id, age, gender) => {
        console.log(`Data recieved; User: ${name} Id: ${id}`)
    })

    customEmitter.on('response', (name, id, age, gender) => {
        console.log(`Analysing data; Age: ${age} Gender: ${gender}`)
    })
    
    customEmitter.emit("response", 'John', "J22", "24", "Male")
// }

// eemit()