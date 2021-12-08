import { parse } from "url";
import { createServer } from "http";
import { MongoClient } from "mongodb";

createServer(function (request, response) {
  var pathname = parse(request.url).pathname;
  console.log("Request for " + pathname + " received");

  if (request.method == "GET" && pathname == "/spaces.json") {
    console.log("Executing Mongo");
    MongoClient.connect(
      "mongodb://localhost:27017",
      {
        useUnifiedTopology: true,
      },
      function (err, client) {
        console.log("Connected successfully to server");
        const db = client.db("campus_connect");
        db.collection("spaces_data")
          .find({})
          .toArray(function (err, docs) {
            response.writeHead(200, {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            });

            response.write(JSON.stringify(docs));
            client.close();
            response.end();
          });
      }
    );
  } else if (request.method == "GET" && pathname == "/auth.json") {
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        body = JSON.parse(body)

        console.log(body)

        body = {
          "username": "PES1UG20CS001",
          "password": "PES1UG20CS002"
        }

        console.log("Executing Mongo");
        MongoClient.connect(
          "mongodb://localhost:27017",
          {
            useUnifiedTopology: true,
          },
          function (err, client) {
            console.log("Connected successfully to server");
            const db = client.db("campus_connect");
            db.collection("auth")
              .find({ 
                username: body["username"],
                password: body["password"]
              })
              .toArray(function (err, docs) {
                response.writeHead(200, {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                });
                response.write(docs.length == 0 ? "0" : "1");
                client.close();
                response.end();
              });
          }
        );
      });
  } else {
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
      });
    console.log("executing mongo");
    MongoClient.connect(
      "mongodb://localhost:27017",
      {
        useUnifiedTopology: true,
      },
      function (err, client) {
        console.log("Connected successfully to server");
        const db = client.db("test");
        db.collection("student")
          .insertOne(JSON.parse(body))
          .then((r) => {
            response.writeHead(200, { "Content-Type": "application/json" });

            client.close();
            response.end();
          });
      }
    );
  }
}).listen(5000);
console.log("server running at the link http://localhost/5000");
