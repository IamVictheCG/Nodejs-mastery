const express = require("express")
const router = express.Router()

router.post('/login', (req, res) => {
    console.log(req.body)
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Hello ${name}`)
    }

    res.status(404).send('User could not be found')
})

module.exports = router