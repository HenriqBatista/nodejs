const EventEmmiter = require('events')

const eventEmmiter = new EventEmmiter()

eventEmmiter.on("start", () => {
    console.log("durante")
})

console.log("antes")

eventEmmiter.emit('start')

console.log('depois')