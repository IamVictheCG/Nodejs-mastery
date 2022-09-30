const express = require('express')
const app = express()
const fs = require('fs')
const { Module } = require('module')
// require('../../1-Node-Tutorial/content/subFolder/test.txt')
const PORT = 1000

const {products, people} = require('../../data')

app.get('/', (req, res) => {
    console.log("Server has been hit")
    res.send('<h1>Home Page</h1><p><a href =/api/products>All products</a></p><strong><a href =/api/products/1>product 1</a></strong><strong><a href =/api/products/2>product 2</a></strong><strong><a href =/api/products/3>product 3</a></strong><strong><a href =/api/products/4>product 4</a></strong>'
)})

app.get('/api/products', (req, res) => {
    const mappedproducts = products.map((newProducts) => {
        const {id, image, name} = newProducts
        return {id, image, name}
    })    
    res.send(mappedproducts)
})

// app.get('/api/products/1', (req, res) => {
//     const mappedProduct = products.map((newProduct) => {
//         const {id, image, name} = newProduct
//         return {id, image, name}
//     })
//     const newProduct1 = mappedProduct.find((products) => products.id === 1)
//     res.json(newProduct1)
// })
// app.get('/api/products/2/:id', (req, res) => {
//     const mappedProduct = products.map((newProduct) => {
//         const {id, image, name} = newProduct
//         return {id, image, name}
//     })
//     const { id } = req.params
//     const oneProduct = mappedProduct.find((products) => products.id === Number(id))
//     console.log(req.params)
//     res.json(oneProduct)
// })
// app.get('/api/products/3/:id', (req, res) => {
//     const mappedProduct = products.map((newProduct) => {
//         const {id, image, name} = newProduct
//         return {id, image, name}
//     })
//     const { id } = req.params
//     const oneProduct = mappedProduct.find((products) => products.id === Number(id))
//     console.log(req.params)
//     res.send(oneProduct)
// })
// app.get('/api/products/4/:id', (req, res) => {
//     const mappedProduct = products.map((newProduct) => {
//         const {id, image, name} = newProduct
//         return {id, image, name}
//     })
//     const { id } = req.params
//     const oneProduct = mappedProduct.find((products) => products.id === Number(id))
//     console.log(req.params)
//     res.send(oneProduct)
// })


                            //OR

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params
    const oneProduct = products.find(
        (product) => product.id === Number(id)
        )
        if (!oneProduct) {
            res.status(404).send(
                "Product does not exist"
            )
        }
    res.send(oneProduct)
})

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

// module.exports = {products, people}