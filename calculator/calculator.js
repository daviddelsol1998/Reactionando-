const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    //__dirname returns current working directory
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    let result = Number(req.body.num1) + Number(req.body.num2)
    res.send('result is ' + result)
})


app.get('/bmicalculator' , (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator' , (req, res) => {
    let height = Number(req.body.height)
    let weight = Number(req.body.weight)
    let bmi = weight/(height*height)
    res.send('your bmi is ' + bmi)
})

app.listen(3000)