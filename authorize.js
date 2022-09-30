const authorize = (req, res, next) => {
    const { user } = req.query
    if(user === 'victor'){
        req.query = {name: "victor", id: 6}
        console.log('Authorized')
        next()
    }
    else{
        res.status(401).send('Unauthorized')
        // next()
    }
}

module.exports = authorize