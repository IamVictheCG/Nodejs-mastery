const express = require('express')
const app = express()
// req => middleware => res
const PORT = 1000

const alldate = require('../../Logger')
const alldate = require('../../authorize')

app.use('/', alldate, authorize)
app.get('/', (req, res) => {
    console.log("You are on the home page")
    res.send("Welcome to the Home page")
})

app.get('/about', (req, res) => {
    console.log('You are on the about page')
    res.send('Welcome to the about page')
})
app.get('/api/products', (req, res) => {
    console.log('Products')
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    console.log('Items')
    res.send('Items')
})

app.listen(PORT, () => {
    console.log('Server is running') 
})