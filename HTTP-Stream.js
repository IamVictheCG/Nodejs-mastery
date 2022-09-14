const http = require("http")

// const server = http.createServer((req, res) => {
//     res.end("Welcome!")
// })


const server = http.createServer()

server.on("request", (req, res) => {
    console.log("Server is up and running")
    res.end("Welcome!")
})

server.listen(5220)