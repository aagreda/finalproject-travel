// Dependencies
var express = require("express");
var axios = require('axios')
var path = require("path");
var request = require("request");

// Initialize Express
var app = express();

// 
//app.get("/todo/:city", function(req, res) {
   //console.log('TODO');
// //https://api.tripexpert.com/v1/categories?8bed1c3e068b84f0388ec817dd255fd4    
//     let url = "https://api.tripexpert.com/v1/categories?venue_type_id=2/";
//     let api_key = "8bed1c3e068b84f0388ec817dd255fd4";
//     let searchLocation = req.params.city;
//     let queryURL = `https://api.tripexpert.com/v1/venues/destination_id=${searchLocation}&api_key=8bed1c3e068b84f0388ec817dd255fd4`
//     //url + `` + "&api_key=" + api_key;
//     //+ "&query=" + city;
    

//     //request and response
//     request(queryURL, function(error, response, body) {
//       console.log("body", body);
//       res.send(body);
//     });

//create a function to get the data
const getData = axiosRes => axiosRes.data;

app.get("/todo/:city", function(req, res) {
  console.log('TODO');

//Send the request and sresponse to the server
//const sendJson = dataToSend=> res.json(dataToSend);

    //https://api.tripexpert.com/v1/categories?8bed1c3e068b84f0388ec817dd255fd4    
    // let url = "https://api.tripexpert.com/v1/categories?";
    // let api_key = "8bed1c3e068b84f0388ec817dd255fd4";
    // let searchLocation = req.params.city;
    // let queryURL = url + "api_key=" + api_key + "venue_type_id=2" + "venue_type_id=2";
    
    let searchURL = `https://api.tripexpert.com/v1/venues/636532?latitude=40.716236&longitude=-73.965237&api_key=8bed1c3e068b84f0388ec817dd255fd4`
  
  //Create the axios conection 
    axios.get(searchURL)
        .then(getData)
        .then(next => {
            console.log('~~~~~~~~todo~~~~~~~~~~~~~~~~~~')
            
        });

    //request and response
    request(queryURL, function(error, response, body) {
      console.log("body", body);
      res.send(body);
    });

});


 module.exports = app