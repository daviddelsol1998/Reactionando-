const express = require('express')
const path = require('path');

const app = express()

app.get('/', function(req, res) {
    // console.log(req)
})

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'about.html'))
})

app.listen(3000)