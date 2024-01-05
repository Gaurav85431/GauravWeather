const express = require('express');
const app = express();
const https = require('https')

const cors = require('cors');

app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/check', (req, res) => {
  res.send("Server is ready @browser"); // @browser
})
/* ---ye node pr -- 

app.get('/weather', (req, res) => {

  // const city = req.query.city;
  // const city = req.body.city;
  /*
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=7b26c1d85384b6edd09de4ad9c3f411e&units=metric` 
    // units= metric ->celcious me dega otherwise ye Kelvin me dega
  *//*
// in short;
const city = 'Delhi';
const apiKey = '7b26c1d85384b6edd09de4ad9c3f411e';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


https.get(url, (response) => {
// console.log(response);
// console.log(response.statusCode);

response.on('data', (data) => {
// console.log("Data in hex form "+data);
const myWeatherData = JSON.parse(data);
// console.log(myWeatherData);
const temperature = myWeatherData.main.temp;
console.log("Current Temperature is " + temperature);

const description = myWeatherData.weather[0].description;
console.log("Description is " + description);

// res.write("The description of weather is " + description);

res.send(`<h1 style="color:blue">The temperature in delhi is ${temperature} degree celcius</h1> <br> The description is ${description}`);




})
})


})
*/

/** HTML pr */

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
  //console.log("Request is received");
  // console.log(req.body.cityName);

  //--




  const cityNm = req.body.cityName;





  const apiKey = '7b26c1d85384b6edd09de4ad9c3f411e';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNm}&appid=${apiKey}&units=metric`;



  https.get(url, (response) => {

    response.on('data', (data) => {

      const myWeatherData = JSON.parse(data);

      const temperature = myWeatherData.main.temp;
      // console.log("Current Temperature is " + temperature);


      if (temperature) {



        const description = myWeatherData.weather[0].description;
        // console.log("Description is " + description);



        res.send(`<h1 style="color:blue">The temperature in ${cityNm} is ${temperature} degree celcius</h1> <br> The description is ${description} <br><br> Go back to search again.<br><br><br> Thanks By Gaurav`);


      }
      else {
        res.send("Please enter valid city name ");
      }

    })



  })



  // })








  //--
})

app.listen(3000, function () {
  // console.log("Server is ready"); // console
})