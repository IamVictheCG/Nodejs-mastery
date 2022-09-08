// const fs = require('fs')

//or

const {readFileSync, writeFileSync} = require('fs')

console.log('start')

const first = readFileSync("./content/first.txt", "utf8")

const second = readFileSync("./content/second.txt", "utf8")

console.log(first, "&",  second)

writeFileSync('./content/result-sync.txt/', `And here we have the result: ${first} and ${second}`, {flag:'a'})

console.log('DONE WITH THIS TASK')
console.log('STARTING A NEW TASK')

