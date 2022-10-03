const express = require('express')
const { extend } = require('lodash')
const app = express()
const { people } = require('../../data')
const PORT = 1000
// require('../../2-Express-Tutorial/methods-public')
// require('../../Public')

app.use(express.static('./2-Express-Tutorial/methods-public'))
app.use(express.urlencoded({extended: false}))
// app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Hello ${name}`)
    }

    res.status(404).send('User could not be found')
})
app.all('*', (req, res) => {
    res.status(404).send('Page not found')
})

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