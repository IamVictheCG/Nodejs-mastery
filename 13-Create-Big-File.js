//In preparation of read streams
const { writeFileSync } = require('fs')
const http = require("http")

const server = http.createServer()

server.on("request", (req, res) => {
    console.log("Server is up and running")
    res.end("Welcome!")
})

server.listen(5220)


//This creates a large file returning "Hello World" for an iteration of 100000 times
// It returns the iterations in the path "./content/bigFile.txt"

function iterations() {
    for (i = 0; i <= 100000; i++) {
        writeFileSync("./content/bigFile.txt", `Hello World --- ${i}\n`, {flag: 'a'})
    } 
    return

}

iterations()