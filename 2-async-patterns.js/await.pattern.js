const {readFile} = require('fs')
const { reject, get } = require('lodash')
const { resolve } = require('path')
const path = require('path')

const getTask = (path) => {
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
    getTask("./content/first.txt")
}
start()

getTask("./content/first.txt")
.then((result) => console.log(result))
.catch((err) => console.log(err, "Something has gone wrong"))