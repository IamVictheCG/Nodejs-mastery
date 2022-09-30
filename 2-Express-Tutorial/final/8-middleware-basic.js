const express = require('express')
const app = express()
// req => middleware => res
const PORT = 1000

app.listen(PORT, () => {
    console.log('Server is running')
})