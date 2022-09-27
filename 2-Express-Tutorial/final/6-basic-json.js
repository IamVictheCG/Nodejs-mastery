const express = require('express')
const app = express()
const PORT = 5011

const {products, people} = require('../../data')

app.get('/', (req, res) => {
    console.log("Server has been hit")
    res.send('<h1><a href = "/users/product">Home Page</a></h1>')

})


app.listen(PORT, () => {
    console.log('Server is running')
})