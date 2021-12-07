import http from "http";
import fetch from "node-fetch";
import axios from "axios";

/*
var options =
{
host: 'localhost',
port: '8081',
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

// fetch("http://localhost:8081/spaces.json", {
//   method: "GET",
//   headers: { "Content-Type": "application/json" },
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res));

axios({
  url: "http://localhost:8081/spaces.json",
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));


// fetch("http://localhost:8081/spaces.json", {
//   method: "POST",
//   body: JSON.stringify({ name: "Aruna modified", col: "MIT" }),
//   headers: { "Content-Type": "application/json" },
// }).then((res) => console.log(res));

// axios({
//   url: "http://localhost:8081/spaces.json",
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   data: JSON.stringify({ name: "Aruna modified", col: "MIT" }),
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));