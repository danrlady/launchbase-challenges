const express = require('express')
const nunjucks = require('nunjucks')
const receitas = require('./data')

const server = express()

server.use(express.static('public'))
server.use(express.static('public/assets'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render('home', { receitas })
})

server.get("/sobre", function(req, res) {
    return res.render('sobre')
})

server.get("/receitas", function(req, res) {
    return res.render('receitas', { receitas })
})

server.listen(5000, function() {
    console.log('Server is running in port 5000')
})