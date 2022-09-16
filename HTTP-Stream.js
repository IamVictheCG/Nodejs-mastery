const http = require("http")

// const server = http.createServer((req, res) => {
//     res.end("Welcome!")
// })


const server = http.createServer()

server.on("request", (req, res) => {
    console.log("Server is up and running")
    const largeText = fs.readFileSync("./content/bigFile.txt",  "utf8")
    res.end("Welcome!")
    res.end(largeText)
})

server.listen(5220)