// let timeout = require('./1-SetTimeout')
setInterval(() => {
    console.log('Hello Okechukwu')
    setTimeout(() => {
        console.log('Hello Victor')
    }, 6000);
}, 3000);



// setInterval(myTimer, 1000);

// function myTimer() {
//   const date = new Date();
//   console.log(date.toLocaleTimeString())
// }