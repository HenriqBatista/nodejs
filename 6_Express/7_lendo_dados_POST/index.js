const express = require('express');

const app = express();
const port = 3000

const path = require('path')

app.use(express.urlencoded({
    extended: true
})
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.get("/users/add", (req, res) =>{
    res.sendFile(`${basePath}/userform.html`)
})


app.post("/users/save", (req, res) =>{
console.log(req.body)

const name = req.body.name
const age = req.body.age

console.log(`O nome do usuário é ${name} e a sua idade é ${age} anos`)

res.sendFile(`${basePath}/userform.html`)
})


app.get("/users/:id", (req, res) => {
    const id = req.params.id
    console.log(`Estamos buscando o usuario: ${id}`)

    res.sendFile(`${basePath}/index2.html`)
})

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})


app.listen(port, ()=>{
    console.log(`app rodando na porta ${port}`)
})