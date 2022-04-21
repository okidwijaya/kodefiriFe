//# Test number 10-11

const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 8000;

const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const users = [
  {
    name: "John",
    age: 34,
  },
  {
    name: "Doe",
    age: 36,
  },
];

app.get("/users/:name", (req, res) => {
  const { name } = req.params;
  const user = users.find((user) => user.name === name);
  if (user) res.status(200).send(user);
  else res.status(404).send("User Not found");
});

app.post("/users", (req, res) => {
  const { Userid } = req.headers;
  const { Scope } = req.headers;
  const response = {
    responseCode: 401,
    responseMessage: "UNAUTHORIZED",
  };
  if (Userid && Scope && Userid === "ifabula" && Scope === "user") {
    const user = req.body;
    users.push(user);
    res.status(200).send(users);
  } else {
    res.status(401 || 403).send(response);
  }
});

// router.use(function (req, res, next) {
//   next();
// });

// router.get("/test", function (req, res) {
//   req.headers("User-id", "ifabula");
//   req.headers("Scope", "user");
//   req.headers();
//   console.log(req.headers);
//   console.log("success");
//   res.status(500).send("something broke!").json({ err: "message" });
// });

// router.get("/r", function (req, res) {
//   console.log(req.headers);
// });

// app.get("/hello", function (req, res) {
//   req.headers("User-id", "ifabula");
//   req.headers("Scope", "user");
//   req.headers();
//   console.log(req.headers);
//   console.log("success");
//   res.send("success get");
//   // res.status(500).send("something broke!").json({ err: "message" });
// });

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("listening on port", port);
});
