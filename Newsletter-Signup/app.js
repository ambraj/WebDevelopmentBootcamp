const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, resp) => {
    resp.sendFile(`${__dirname}/signup.html`);
});

app.post("/", (req, resp) => {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(`${firstName} ${lastName} ${email}`);
});

app.listen(3000, () => {
    console.log("server is running on port 3000...");
});

// mailchimp API key
// 36fe8306db7ef4c3e8c875ac10397d29-us10
