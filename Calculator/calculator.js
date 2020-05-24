const express = require("express");

const app = express();

app.get("/", (req, resp) => {
    resp.sendFile(__dirname + "index.html");
});

app.listen(3000, () => {
    console.log("server is started on port 3000....");
});
