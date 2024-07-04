var express = require('express');
var cors = require('cors');
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));
var bodyParser = require('body-parser');

const clientId = "dd0b2775e92fd4b69830";
const clientSecret = "6a0f14d77877f5a5ee87f1fb996c60bcc2b9b126";

var app=express();

app.use(cors());
app.use(bodyParser.json());

app.get('/getAccessToken', async function (req, res) {
    req.query.code;

    const params = "?client_id=" + clientId + "&client_secret=" + clientSecret + "&code=" + req.query.code;

    await fetch("https://github.com/login/oauth/access_token" + params, {
        method:"POST",
        headers:{
            "Accept" : "application/json"
        }
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
        res.json(data);
    })
})

app.get('/getUserData', async function (req, res) {
    req.get("Authorization");
    await fetch("https://api.github.com/user", {
        method:"GET",
        headers:{
            "Authorization" : req.get("Authorization")
        }
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        res.json(data);
    })
})

app.listen(4000, function(){
    console.log("cors server running on port 4000");
})