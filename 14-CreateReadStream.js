const {createReadStream} = require("fs")

const stream = createReadStream('./content/bigFile.txt')

//default 64kb
//last buffer - remainder
//highwatermark -  controls the size
//utf8 

stream.on('data', (result) => {
    console.log(result)
})