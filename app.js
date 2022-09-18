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
const { readFileSync, symlink } = require('fs')

const homePage = readFileSync('./2-Express-Tutorial/navbar-app/index.html')
const homestyles = readFileSync('./2-Express-Tutorial/navbar-app/styles.css')
const homelogo = readFileSync('./2-Express-Tutorial/navbar-app/logo.svg')

const homelogic = readFileSync('./2-Express-Tutorial/navbar-app/browser-app.js')
const server = http.createServer((req, res) => {
    const url = req.url
    if (url === "/") {
        console.log("Server is runing, Home Page")
        res.writeHead(200, {'contet-type':'text/html'})
        res.write(homePage)
        res.end("Good day to you User")
    } 
    //about
    else if(url === '/about') {
        console.log("Server is runing, About Page")
        res.writeHead(200, {'contet-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end("Welcome to the about page!!!")
    } 
    //Styles
    else if(url === '/styles.css') {
        console.log("Server is runing, About Page")
        res.writeHead(200, {'contet-type':'text/css'})
        res.write(homestyles)
        res.end()
    } 
    //Image/Logo
    else if(url === '/logo.svg') {
        console.log("Server is runing, About Page")
        res.writeHead(200, {'contet-type':'image/svg+xml'})
        res.write(homelogo)
        res.end("Welcome to the about page!!!")
    } 
    //logic
    else if(url === '/browser-app.js') {
        console.log("Server is runing, About Page")
        res.writeHead(200, {'contet-type':'text/javascript'})
        res.write(homelogic)
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

