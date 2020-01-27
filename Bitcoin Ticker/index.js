const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

//make request to bitcoin server through the API
app.post("/", function(req, res) {

    //console.log(req.body.crypto);
    //console.log(req.body.fiat);

    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var amount = req.body.amount;

    var baseURL = "https://apiv2.bitcoinaverage.com/convert/global";

    //var finalURL = baseURL + crypto + fiat;

    var options = {
        url: baseURL,
        method: "GET",
        //query strings
        qs: {
            from: crypto,
            to: fiat,
            amount: amount
        }
    };

    request(options, function (error, response, body) {
        //console.log(response.statusCode); //grab information from the response from request
        var data = JSON.parse(body); //parse from JSON to JS object
        //data comes back in the form of JSON
        var price = data.price;

        console.log(price);
        //console.log(body); body is the JSON from the API request
        var date = data.time;

        //send more than one thing to the browser? use this: res.write()
        res.write("<p>The current date is " + date + "</p>");
        res.write("<h1> " + amount + crypto + " is currently worth " + price + fiat + "</h1>")
        //res.send is usually the last thing you do
        res.send()
    });

});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});