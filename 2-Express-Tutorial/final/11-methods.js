const express = require('express')
const app = express()
const { people } = require('../../data')
// const MP =require('../../2-Express-Tutorial/methods-public')

app.use(express.static('../methods-public'))

app.use(express.json())

app.get('/', (req, res) => {

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