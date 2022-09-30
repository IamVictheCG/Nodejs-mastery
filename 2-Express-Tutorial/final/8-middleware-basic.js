const express = require('express')
const app = express()
// req => middleware => res
const PORT = 1000

const alldate = require('../../Logger')

app.get('/', alldate, (req, res) => {
    console.log("You are on the home page")
    res.send("Welcome to the Home page")
})

app.get('/about', alldate, (req, res) => {
    console.log('You are on the about page')
    res.send('Welcome to the about page')
})

app.listen(PORT, () => {
    console.log('Server is running')
})