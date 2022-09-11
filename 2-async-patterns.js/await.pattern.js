const {readFile, writeFile} = require('fs')
const { reject, get } = require('lodash')
const { resolve } = require('path')
const path = require('path')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)



const start = async () => {

    try {
        const first = await readFilePromise("./content/first.txt", 'utf8')
        const second = await readFilePromise("./content/second.txt", 'utf8')
        await writeFilePromise(
            "./content/await.result.txt", 
            `This is Crazy: ${first} ${second}`, {flag: "a"})
            console.log(`${first} ${second}`)
    } catch (error) {
        console.log(error)
    }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf8", ((err, data) => {
//             if (err) {
//                 // console.log(err)
//                 reject(err)
//                 return
//             } else {
//                 // console.log(data)
//                 resolve(data)
//             }
//         }
//         ))
//     })
// }

// getText("./content/first.txt")
// .then((result) => console.log(result))
// .catch((err) => console.log(err, "Something has gone wrong"))
