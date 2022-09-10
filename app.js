// require('./eventLoop/read-file')
// require('./eventLoop/server')
// require('./8-fsSync')
// require('./8-fsAsync')

const http = require("http")

const serrver = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log("We're in the Home page")
        res.end("We're in the Home page")
    }
    if (req.url === '/about') {
        //BLOCKING CODE
        for(i = 0; i < 60; i++) {
            for(j = 0; j < 60; j++) {
                console.log(`${i}, ${j}`)
            }
        }
        console.log("We're in the About page")
        res.end("We're in the About page")
    }
    // res.end("Page not found")
})


const PORT = 3333
serrver.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})