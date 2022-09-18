const express = require('express')
const app = express()

// app.get
// app.post
// app.put
// app.delete
// app.use
// app.all
// app.listen

const PORT = 5011

app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    console.log(`Homepage accessed`)
    res.status(200).send(`<h2>You are now at the home page</h2>`)
})

app.get('/about', (req, res) => {
    console.log(`About page accessed`)
    res.status(200).send(`<h2>You are now at the about page</h2>`)
})

app.all('*', (req, res) => {
    res.status(404).send(`<h2>Resourece page not found</h2>`)
})
