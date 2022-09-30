const express = require('express')
const app = express()
const fs = require('fs')
require('../../1-Node-Tutorial/content/subFolder/test.txt')
// const PORT = 1000

app.get('/api/products/:id/reviews/:reviewid', (req, res) => {
    console.log(req.params)
    res.send('Nice Product')
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit} = req.query
    let sortedProdducts = [...products]

    if(search) {
        sortedProdducts = sortedProdducts.filter((products) => {
            return products.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProdducts = sortedProdducts.slice(0, Number(limit))
        // return res.status(200).send(
        //     {
        //         success: true,
        //         message: "Products retrieved",
        //         statusCode: 200,
        //         data: [...sortedProdducts]
        //     })yy
    }
    
    if(sortedProdducts.length < 1) {
        res.status(200).send(
            {
                success: true,
                message: "No products were found",
                statusCode: 200,
                data: [...sortedProdducts]
            })
    }
    console.log(sortedProdducts);
    return res.status(200).send(
        {
            success: true,
            message: "Products retrieved successfully",
            statusCode: 200,
            data: [...sortedProdducts]
    })
})

app.listen(PORT, () => {
    console.log('Server is running')
})