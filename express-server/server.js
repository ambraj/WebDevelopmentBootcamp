const express = require("express");

const app = express();

app.get("/", (req, resp) => {
    resp.send("Hello World!");
});

app.get("/contact", (req, resp) => {
    resp.send("Please send email to ambraj@gmail.com...");
});

app.get("/about", (req, resp) => {
    resp.send("My name is Ambuj Rajput");
});

app.listen(3000, () => {
    console.log("Server is started on port 3000.....");
});
