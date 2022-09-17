// require('./eventLoop/read-file')
// require('./eventLoop/server')
// require('./8-fsSync')
// require('./8-fsAsync')
// require('./2-async-patterns.js/blocks')
// require('./2-async-patterns.js/await.pattern')
// require('./EventsEmitter/EventEmitter')
// require("./12-Streams")
// require('./14-CreateReadStream')
// require("./HTTP-Stream")

const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Server is runing")
    res.writeHead(200, {'contet-type':'text/html'})
    res.write("<h2>Home Page</h2>")
    res.end("Good day to you User")
})

// const Port = 5011
server.listen(5011)

