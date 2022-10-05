const express = require("express")
const router = express.Router()
const {people} = require('../../../../data')

router.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        data:people,
        statusCode: 200
    });

})

router.post('/', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({
            success: false,
            msg:`This field is compulsory`,
            statusCode: 400
        })
    }

    res.status(201).json({
    Success: true,
    data: name
    })
})

router.put('/:id', (req, res) => {
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

router.delete("/:id", (req, res) => {

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

module.exports = router