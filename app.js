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
// require('./2-Express-Tutorial/navbar-app')
const http = require('http');
const { readFileSync } = require('fs')

const homePage = readFileSync('./2-Express-Tutorial/navbar-app/index.html')
const server = http.createServer((req, res) => {
    const url = req.url
    if (url === "/") {
        console.log("Server is runing, Home Page")
        res.writeHead(200, {'contet-type':'text/html'})
        res.write(homePage)
        res.end("Good day to you User")
    } else if(url === '/about') {
        console.log("Server is runing, About Page")
        res.writeHead(200, {'contet-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end("Welcome to the about page!!!")
    }
    else {
        res.writeHead(404, {'contet-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end("Try again")
    }
})

// const Port = 5011
server.listen(5011)

