const os = require('os')
const CurrentOS = {
    brand: os.type(),
    name: os.hostname(), userInfo: os.userInfo(),
    PC_Uptime: os.uptime(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    cpuInfo: os.cpus(),
    cpuArch: os.arch()
}

console.log(CurrentOS)