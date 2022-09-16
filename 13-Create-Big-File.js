const { writeFileSync } = require('fs')
const http = require("http")

const server = http.createServer()

server.on("request", (req, res) => {
    console.log("Server is up and running")
    res.end("Welcome!")
})

server.listen(5223)



for (i = 0; i <= 100; i++) {
    writeFileSync("./content/bigFile.txt", `Hello World --- ${i}\n`, {flag: 'a'})
} return