const http = require('http')
const server = http.createServer((req, res) => {
    console.log(`This server is running on ${PORT}`)
    if(req.url === "/") {
        res.end('Welcome aboard')
        return
    }
    if(req.url === '/about') {
        console.log('you are in the about page')
        res.end('All you need to know about us')
        return
    }
    res.end(`
    <h2>Oops</h2>
    <p>We can't seem to find what you are looking for</p>
    <a href="./">back home</a>
    `)
})

const PORT = 5110
server.listen(PORT) 
