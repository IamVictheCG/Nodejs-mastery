const express = require('express')
const app = express()
const PORT = 5011

app.get('./', (req, res) => {
    console.log("Server has been hit")
    res.json([{name: 'Victor'}, {name: 'David'}])

})


app.listen(PORT, () => {
    console.log('Server is running')
})