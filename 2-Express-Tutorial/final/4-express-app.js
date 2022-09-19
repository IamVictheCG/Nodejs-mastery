const express = require('express')
const app = express()

const PORT = 5000


app.listen(PORT, (req, res) => {
    console.log('sever accessed')
})

app.get('/', (req, res) => {
    res.send("Hello")
})

app.all('#', (req, res) => {
    res.status(404).send('Page not found')
})