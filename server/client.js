import axios from "axios";
import fetch from "node-fetch";
import http from "http";

/*
var options =
{
host: 'localhost',
port: '5000',
path : '/pes.html',
};
//callback function is used to deal with the response
var callback = function(response)
{
 var body = '';
 response.on('data',function(data)
 {
 body+= data;
 });
}
//make a request to the server
var req = http.request(options,callback);
req.end(); */

// fetch("http://localhost:5000/spaces.json", {
//   method: "GET",
//   headers: { "Content-Type": "application/json" },
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// axios({
//   url: "http://localhost:5000/auth.json",
//   data: JSON.stringify({
//     username: "PES1UG20CS001",
//     password: "PES1UG20CS001",
//   }),
//   method: "GET",
//   headers: { "Content-Type": "application/json" },
// })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// POST

// fetch("http://localhost:5000/spaces.json", {
//   method: "POST",
//   body: JSON.stringify({ name: "Aruna modified", col: "MIT" }),
//   headers: { "Content-Type": "application/json" },
// }).then((res) => console.log(res));

// axios({
//   url: "http://localhost:5000/spaces.json",
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   data: JSON.stringify({ name: "Aruna modified", col: "MIT" }),
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

axios.post("http://localhost:5000/mouse", {
      name: "asf"
    }).then((res) => {
      alert(res.data.message);
      //document.getElementById("contactForm").reset()
    });
