const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 1000

const { people } = require('../../data')
app
app.get('/api/people', (req, res) => {
    res.status(200).json({
        sucess: true,
        data: people,
        statusCode: 200
    })
})

app.listen(PORT, (req, res) => {
    console.log("Server has been hit")
})