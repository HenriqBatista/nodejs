const fs = require('fs')

console.log('inicio')

fs.writeFile("arquivo.txt", "async", function (err){
    setTimeout(function () {
        console.log("arquivo criado!")
    },2000)
})

console.log("fim")