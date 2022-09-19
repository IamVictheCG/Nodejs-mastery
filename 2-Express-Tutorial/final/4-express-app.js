const express = require('express')
const app = express()
const path = require('path ')

const PORT = 5011


app.listen(PORT, (req, res) => {
    console.log('sever accessed')
})

app.get('/', (req, res) => {
    res.send("Hello")
    res.sendFile(path.join(__dirname, './navbar-app/index.html'))
    console.log("Page up")
})

app.all('#', (req, res) => {
    res.status(404).send('Page not found')
})