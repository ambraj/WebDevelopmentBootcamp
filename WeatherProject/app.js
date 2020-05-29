const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
    resp.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, resp) => {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=9ebf22f65fc069a05a3b4e8070633b61`;

    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on("data", (data) => {
            var weatherData = JSON.parse(data);
            console.log(weatherData);

            var temp = weatherData.main.temp;
            var desc = weatherData.weather[0].description;
            var icon = weatherData.weather[0].icon;
            var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            console.log(`<h2>The weather is currently ${desc}</h2>`);

            resp.write(`<p>The weather is currently ${desc}</p>`);
            resp.write(
                `<h1>The Temparature of ${weatherData.name} is ${desc}</h1>`
            );
            resp.write(`<img src=${iconUrl}></img>`);
            resp.send();
        });
    });

    // resp.send("server is up and running!");
});

app.listen(3000, () => {
    console.log("Server is started on 3000");
});
