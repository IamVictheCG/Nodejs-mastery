// const fs = require('fs')

//or

const {readFile, writeFile} = require('fs')

console.log('start')

readFile("./content/first.txt", "utf8", ((err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile("./content/second.txt", "utf-8", (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile("./content/result-async.txt", `And here we have the result: ${first} and ${second}`, 
        (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
        }
        )
    })
}))

// // const second = readFile("./content/second.txt", "utf8")

// console.log(first
//     // , "&",  second
//     )


// // writeFileSync('./content/result-sync.txt/', `And here we have the result: ${first} and ${second}`, {flag:'a'})

// // console.log('DONE WITH THIS TASK')
// // console.log('STARTING A NEW TASK')

