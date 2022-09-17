const {createReadStream} = require("fs")

const stream = createReadStream('./content/bigFile.txt', {
    highWaterMark: 1000,
    encoding: "utf8"
})

//default 64kb
//last buffer - remainder
//highwatermark -  controls the size
//utf8 - sets the encoding
// const stream = createReadStream('./content/bigFile.txt', {highWaterMark: 9000})
// const stream = createReadStream('./content/bigFile.txt', {encoding: "utf8"})

stream.on('data', (result) => {
    console.log(result)
    return
})

stream.on("error", (err) => {
    console.log(err)
})