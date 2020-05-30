const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, resp) => {
    resp.sendFile(`${__dirname}/signup.html`);
});

app.post("/", (req, resp) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                },
            },
        ],
    };

    var jsonData = JSON.stringify(data);

    const url = "https://us10.api.mailchimp.com/3.0/lists/359ec7b8ae";

    const options = {
        method: "POST",
        auth: "ambuj:36fe8306db7ef4c3e8c875ac10397d29-us10",
    };

    const request = https.request(url, options, (response) => {
        if (response.statusCode === 200) {
            resp.sendFile(`${__dirname}/success.html`);
        } else {
            resp.sendFile(`${__dirname}/failure.html`);
        }

        response.on("data", (data) => {
            console.log(JSON.parse(data));
        });
    });

    // request.write(jsonData);
    request.end();
});

app.get("/failure", (req, resp) => {
    resp.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("server is running on port 3000...");
});

// mailchimp API key
// 36fe8306db7ef4c3e8c875ac10397d29-us10

// list id
// 359ec7b8ae
