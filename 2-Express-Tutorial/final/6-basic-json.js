const express = require('express')
const app = express()
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
app.get('/api/products/1', (req, res) => {
    const mappedProduct = products.map((newProduct) => {
        const {id, image, name} = newProduct
        return {id, image, name}
    })
    const newProduct1 = mappedProduct.find((products) => products.id === 1)
    res.json(newProduct1)
})
app.get('/api/products/2/:id', (req, res) => {
    const mappedProduct = products.map((newProduct) => {
        const {id, image, name} = newProduct
        return {id, image, name}
    })
    const { id } = req.params
    const oneProduct = mappedProduct.find((products) => products.id === Number(id))
    res.send(oneProduct)
    console.log(req.params)
})
app.get('/api/products/3/:id', (req, res) => {
    const mappedProduct = products.map((newProduct) => {
        const {id, image, name} = newProduct
        return {id, image, name}
    })
    const { id } = req.params
    const oneProduct = mappedProduct.find((products) => products.id === Number(id))
    res.send(oneProduct)
    console.log(req.params)
})
app.get('/api/products/4/:id', (req, res) => {
    const mappedProduct = products.map((newProduct) => {
        const {id, image, name} = newProduct
        return {id, image, name}
    })
    const { id } = req.params
    const oneProduct = mappedProduct.find((products) => products.id === Number(id))
    res.send(oneProduct)
    console.log(req.params)
})

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params
    const oneProduct = products.find(
        (product) => product.id === Number(id)
        )
    //     () => {
    //     const {id, image, desc} = singleProduct
    //     return { id, image, desc }
    // })
    res.send(oneProduct)
})


app.listen(PORT, () => {
    console.log('Server is running')
})