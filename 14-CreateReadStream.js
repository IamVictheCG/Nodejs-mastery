const {creatReadStreams} = require("fs")

const Stream = creatReadStreams('.content/bigFile.txt')

Stream.on('data', (result) => {
    console.log(result)
})