const express = require('express')
const { extend } = require('lodash')
const app = express()
// const peopleRoute = require("./routes/People/people")
// const authRoute = require("./routes/Auth/auth")
const {people} = require('./../../data')
const PORT = 1004
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static('./2-Express-Tutorial/methods-public'))
// app.use("/api/people", peopleRoute)
// app.use("/login", authRoute)



app.get('/api/people/', (req, res) => {
    res.status(200).json({
        sucess: true,
        data: people,
        statusCode: 200
    });

})

app.post('/login', (req, res) => {
    console.log(req.body)
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Hello ${name}`)
    }

    res.status(404).send('User could not be found')
})



app.post('/api/people/', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({
            success: false,
            msg:`This field is compulsory`,
            statusCode: 400
        })
    }

    if(name) {
        res.status(201).json({
            Success: true,
            person: name
        })
    }

})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((user) => user.id === Number(id))

    if(!person) {
        res.status(400).json({
            success: false,
            message: "This user could not be found",
            statusCode: 400
        })
    }

    const newPeople = people.map((person) => {
    if(person.id === Number(id)) {
        person.name = name
    }
    return person
    })

    res.status(200).json({
    success: true,
    data: newPeople,
    statusCode: 200
    })

})

app.delete("/api/people/:id", (req, res) => {

    const person = people.find((user) => user.id === Number(req.params.id))
    if(!person) {
        return res.status(404).json({
                    success: false,
                    message: "This user could not be found",
                    statusCode: 404
                })
    }

    const newpeople = people.filter((user) => user.id != Number(req.params.id))
    res.status(200).json({
    success: true,
    data: newpeople,
    statusCode: 200
    })

})


//Test all these endpoints with Postman!
app.all('*', (req, res) => {
    res.status(404).send('Page not found')
})

app.listen(PORT, (req, res) => {
    console.log("Server has been hit")
})