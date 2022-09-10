const http = require('http')
const server = http.createServer((req, res) => {
    console.log(`Hello Victor`)
        res.end('Goodbye Victor')
})

const PORT = 5120
server.listen(PORT, () => {
    console.log(`This server is running on ${PORT}`)
}) 
