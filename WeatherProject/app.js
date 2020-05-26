const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, resp) => {
    var url =
        "https://api.openweathermap.org/data/2.5/weather?q=kasganj&appid=9ebf22f65fc069a05a3b4e8070633b61";
    https.get(url, (response) => {
        console.log(response.statusCode);
    });

    resp.send("server is up and running!");
});

app.listen(3000, () => {
    console.log("Server is started on 3000");
});
