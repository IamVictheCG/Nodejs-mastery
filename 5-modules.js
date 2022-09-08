const names = require('./2-names')
const SayHi = require('./3-func')
const about = require('./AlternateFlavour')
require('./4-MindGrenade')

SayHi(names.John)
SayHi("Damon")
SayHi("Friday")
SayHi(names.Sarah)

// console.log(about.items[0])

const bio = () => {
    console.log(`My name is ${about.SinglePerson.name}, I am ${about.SinglePerson.age}years old. I am a ${about.SinglePerson.height} tall ${about.SinglePerson.Nationality} and I weigh ${about.SinglePerson.Weight}`)
}

return (bio())