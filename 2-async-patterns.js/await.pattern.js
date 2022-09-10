const {readFile} = require('fs')

readFile("./content/first.txt", "utf8", ((err, data) => {
    if (err) {
        console.log(err)
        return
    }
}
))