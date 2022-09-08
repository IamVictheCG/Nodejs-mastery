const path = require('path')


 console.log(path.sep)

 const filepath = path.join('/content', 'subFolder', 'test.txt')

 console.log(filepath)
 const base = path.basename(filepath)
 console.log(base)
console.log('-----------------_____------------------')

const absolute = path.resolve(__dirname, 'content', 'subFolder', 'test.txt')

console.log(absolute)


console.log(__filename)
console.log(__dirname)