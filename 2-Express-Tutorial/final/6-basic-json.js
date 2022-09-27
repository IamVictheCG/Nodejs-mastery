const express = require('express')
const app = express()
const PORT = 5011

const {products, people} = require('../../data')

app.get('/', (req, res) => {
    console.log("Server has been hit")
    res.json(products)

})


app.listen(PORT, () => {
    console.log('Server is running')
})