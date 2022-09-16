
const http = require("http")
const fs = require('fs')


const server = http.createServer()

server.on("request", (req, res) => {
    console.log("Server is up and running")
    const largeText = fs.readFileSync("./content/bigFile.txt",  "utf8")
    res.end(`Welcome!\n\n\n\n${largeText}`)
})

server.listen(5220)
