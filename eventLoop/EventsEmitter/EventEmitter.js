//NOTE: the order matters. First you listen for/to an event, then you emit it!!!

const EventEmitter = require('events')

const customEmitter = new EventEmitter

// customEmitter.on('response', (name, id) => {
//     console.log(`Data recieved; User: ${name} Id: ${id}`)
// })
// customEmitter.on('response', (age, gender) => {
//     // console.log(`Data recieved; User: ${name} Id: ${id}`)
//     console.log(`Analysing data; Age: ${age} Gender: ${gender}`)
// })
// customEmitter.on('response1', (age, gender) => {
//     console.log(`Analysing data; Age: ${age} Gender: ${gender}`)
// })



// customEmitter.emit("response", 'John', 22)
// customEmitter.emit("response1", 22, "Male")



////

// function eemit(name, id,) {
    customEmitter.on('response', (name, id, age, gender) => {
        console.log(`Data recieved; User: ${name} Id: ${id}`)
    })
    // customEmitter.on('response', () => {
    //     // console.log(`Data recieved; User: ${name} Id: ${id}`)
    //     console.log("Analysing data")
    // })
    customEmitter.on('response', (name, id, age, gender) => {
        console.log(`Analysing data; Age: ${age} Gender: ${gender}`)
    })
    // customEmitter.on('response1', (age, gender) => {
    //     console.log(`Analysing data; Age: ${age} Gender: ${gender}`)
    // })
    
    customEmitter.emit("response", 'John', 22, 24, "Male")
// }

// eemit()