const express = require('express')
const app = express()
const { people } = require('../../data')
// require('../../2-Express-Tutorial/methods-public')
// require('../methods-public')

app.use(express.static('.Public'))

app.use(express.json())

app.get('/', (req, res) => {
// res.send()
})

app.get('/api/people', (req, res) => {
    res.status(200).json({
        sucess: true,
        data: people,
        statusCode: 200
    })
})

const PORT = 1000
app.listen(PORT, (req, res) => {
    console.log("Server has been hit")
})