// Vanilla Node code commented out below:

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("INCOMING REQUEST");
//   console.log(req.method, req.url);

//   if (req.method === "POST") {
//     let body = "";

//     req.on("end", () => {
//       console.log(body);
//       const userName = body.split("=")[1];
//       res.end("<h1>" + userName + "</h1>");
//     });

//     req.on("data", (chunk) => {
//       body += chunk;
//     });
//   } else {
//     res.setHeader("Content-Type", "text/html");
//     res.end(
//       "<form method='POST'><input type='text' name='username'><button type='submit'>Create User</button></form>"
//     );
//   }
// });

// server.listen(5000);

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user", (req, res, next) => {
  res.send("<h1>" + req.body.username + "</h1>");
});

app.get("/", (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(5000);
