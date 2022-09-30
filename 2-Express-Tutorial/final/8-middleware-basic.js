const express = require('express')
const app = express()
// req => middleware => res
const PORT = 1000

 const alldate = (req, res, next) => {
    const method = req.method
    const url = req.url
    const dateD =  new Date().getDate()
    const dateM = new Date().getMonth() + 1
    const dateY =  new Date().getFullYear()
    const timeH = new Date().getHours()
    const timeM = new Date().getUTCMinutes()
    const timeS = new Date().getUTCSeconds()
    console.log("You are on the home page")
    console.log(`${method}${url}---${dateD}/${dateM}/${dateY} @ ${timeH}: ${timeM}: ${timeS}`)
    next()
    // return
 }

app.get('/', alldate, (req, res) => {
    console.log("You are on the home page")
    res.send("Welcome to the Home page")
})

app.get('/about',  (req, res) => {
    console.log('You are on the about page')
    res.send('Welcome to the about page')
})

app.listen(PORT, () => {
    console.log('Server is running')
})