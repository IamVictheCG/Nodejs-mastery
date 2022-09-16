const {createReadStream} = require("fs")

const stream = createReadStream('./content/bigFile.txt')

//default 64kb
//last buffer

stream.on('data', (result) => {
    console.log(result)
})