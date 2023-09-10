const express = require('express');

const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir:['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set("view engine", 'handlebars')

app.use(express.static('public'))

app.get('/dashboard',(req, res) => {

    const items = ['item a','item b','item c']
    res.render('dashboard', {items})
})

app.get('/post',(req, res) => {
    const post = {
        title:'Aprender Node.js',
        category:'Javascript',
        body:'Este artigo vai te ajudar a aprender Node.js',
        comments: 4,
    }

    res.render('blogpost',{post})
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category:'Javascript',
            body:'Este artigo vai te ajudar a aprender Node',
            comments: 4,
        },
        {
            title: 'Aprender Laravel',
            category:'php',
            body:'Este artigo vai te ajudar a aprender Laravel',
            comments: 5,
        },
        {
            title: 'Aprender Python',
            category:'Python',
            body:'Este artigo vai te ajudar a aprender Python',
            comments: 6,
        },
    ];
    res.render('blog',{posts})
})

app.get('/home', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category:'Javascript',
            body:'Este artigo vai te ajudar a aprender Node',
            comments: 4,
        },
        {
            title: 'Aprender Laravel',
            category:'php',
            body:'Este artigo vai te ajudar a aprender Laravel',
            comments: 5,
        },
        {
            title: 'Aprender Python',
            category:'Python',
            body:'Este artigo vai te ajudar a aprender Python',
            comments: 6,
        },
    ];

    res.render('home',{posts})
})

app.listen(3000, ()=>{
    console.log("App funcionando na porta 3000")
})