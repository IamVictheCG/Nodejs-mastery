const express = require('express')
const app = express()
const path = require("path")

const PORT = 5011



//setup static and middleware
app.use(express.static('./Public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve('./2-Express-Tutorial/navbar-app/index.html'))
//     console.log(path)
//     console.log("Page up")
// })

app.all('*', (req, res) => {
    res.status(404).send('Page not found')
})


    app.listen(PORT, () => {
        console.log('sever accessed')
    })