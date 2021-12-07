import { parse } from "url";
import { createServer } from "http";
import { MongoClient } from "mongodb";

createServer(function (request, response) {
    var pathname = parse(request.url).pathname;
    console.log("Request for " + pathname + " Received.");
    
    if (request.method == "GET" && pathname == "/spaces.json") {
      console.log("executing mongo");
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
              response.writeHead(200, { "Content-Type": "application/json" });

              response.write(JSON.stringify(docs));
              client.close();
              response.end();
            });
        }
      );
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
          const db = client.db("pes");
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
  })
  .listen(8081);
console.log("server running at the link http://localhost/8081");
