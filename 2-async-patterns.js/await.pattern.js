const {readFile, writeFile} = require('fs')
const { reject, get } = require('lodash')
const { resolve } = require('path')
const path = require('path')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", ((err, data) => {
            if (err) {
                // console.log(err)
                reject(err)
                return
            } else {
                // console.log(data)
                resolve(data)
            }
        }
        ))
    })
}



const start = async () => {

    try {
        const first = await getText("./content/first.txt")
        const second = await getText("./content/second.txt")
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()


// getText("./content/first.txt")
// .then((result) => console.log(result))
// .catch((err) => console.log(err, "Something has gone wrong"))
