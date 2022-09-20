const express = require('express')
const app = express()
const path = require("path")

const PORT = 5011



app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname,'./2-Express-Tutorial/navbar-app/index.html'))
    // console.log(path)
    // console.log("Page up")
})
//  dh 

app.all('*', (req, res) => {
    res.status(404).send('Page not found')
})


    app.listen(PORT, () => {
        console.log('sever accessed')
    })