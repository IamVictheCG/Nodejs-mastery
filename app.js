const express = require('express')
const app = express()

const PORT = 5011

app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`)
})

// app.get