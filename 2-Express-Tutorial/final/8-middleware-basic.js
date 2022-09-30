const express = require('express')
const app = express()
// req => middleware => res
const PORT = 1000

app.get('/', (req, res) => {
    const method = req.method
    const url = req.url
    const dateD =  new Date().getDate()
    const dateM = new Date().getMonth() + 1
    const dateY =  new Date().getFullYear()

    console.log("You are on the home page")
    console.log(`${method},${url},${dateD},{dateM},dateY`)
    res.send("Welcome to the Home page")
})

app.get('/about', (req, res) => {
    console.log('You are on the about page')
    res.send('Welcome to the about page')
})

app.listen(PORT, () => {
    console.log('Server is running')
})