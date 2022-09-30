
 const alldate = (req, res, next) => {
    const method = req.method
    const url = req.url
    const dateD =  new Date().getDate()
    const dateM = new Date().getMonth() + 1
    const dateY =  new Date().getFullYear()
    const timeH = new Date().getHours()
    const timeM = new Date().getUTCMinutes()
    const timeS = new Date().getUTCSeconds()
    console.log("You are on the home page")
    console.log(`${method}${url}---${dateD}/${dateM}/${dateY} @ ${timeH}: ${timeM}: ${timeS}`)
    next()
    }

 module.exports = alldate