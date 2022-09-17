
const http = require("http")
const fs = require('fs')


const server = http.createServer()

// server.on("request", (req, res) => {
//     console.log("Server is up and running")
//     const largeText = fs.readFileSync("./content/bigFile.txt",  "utf8")
//     res.end(`Welcome!\n\n\n\n${largeText}`)
// })

//or

server.on("request", (req, res) => {
    console.log("Server is up and running")
    const fileStream = fs.createReadStream("./content/bigFile.txt",  "utf8")
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})

server.listen(5220)
