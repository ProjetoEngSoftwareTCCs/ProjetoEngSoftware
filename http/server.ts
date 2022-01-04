const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.use(express.static(__dirname + '/public/style'))

app.listen(3000)
console.log('Rodando')