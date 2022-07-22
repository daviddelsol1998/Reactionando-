const express = require('express');
const app = express();
const https = require('https');
const path = require('path')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/index', (req, res) => {
    console.log('hello from post server');
    let cityFromBody = req.body.cityName
    console.log(cityFromBody)

    const desiredCity = cityFromBody
    const apiKey = 'e289c75680b2fa8daa5df0bbe810dee8'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + desiredCity + '&appid=' + apiKey + '&units=imperial'
    https.get(url, (apiRes) => {
        // console.log(apiRes)

        apiRes.on('data', (data) => {
            const weather = JSON.parse(data)
            let city = weather.name
            let temperature = weather.main.temp
            let description = weather.weather[0].description
            let weatherIconId = weather.weather[0].icon
            
            res.write(`<h1>The weather in ${city} is ${temperature}</h1><h2>${description}</h2>`)
            res.write('<img src="http://openweathermap.org/img/wn/' +  weatherIconId + '@2x.png">')
            res.send()

        })
     })
})




app.listen(3000)