const express = require("express");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const app = express();
const port = 3000;
const resTextSuccess = "Login success !";
const resTextPassFailed = `Login failed , " Password is wrong ! "`;
const resTextUserFailed = `Login failed , " User is wrong ! "`;


app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//------------------------------------------------------------
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "singto11442525",
  database: "loginDB"
});
app.get("/employee", (req, res) => {
  let sql = "SELECT * FROM loginDB.tableDB;";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
//------------------------------------------------------------
app.post("/employee/login", (req, res) => {
  let sql = `SELECT user,password,name FROM loginDB.tableDB WHERE user='${req.body.user}';`;
  let privateKey = fs.readFileSync("./private.pem", "utf8");
  let token = jwt.sign({ body: req.body.user }, privateKey, {
    algorithm: "HS256"
  });
  db.query(sql, (err, results) => {
    console.log("user:", req.body.user);
    if (err) throw err;
    if (results.length > 0) {
      const userFormDB = results[0];
      console.log("pass:", userFormDB.password);
      if (userFormDB.password === req.body.password) {
        res.json({userFormDB, token, resTextSuccess });
      } else {
        res.json({ resTextPassFailed });
      }
    } else {
      res.json({ resTextUserFailed });
    }
  });
});
//------------------------------------------------------------
app.post("/employee/del", (req, res) => {
  console.log({ id: req.body.id });
  let sql = `DELETE FROM loginDB.tableDB WHERE id=${req.body.id};`;

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
//------------------------------------------------------------
app.post("/employee/add", (req, res) => {
  let sql = `INSERT INTO loginDB.tableDB (user, password, name) VALUES ('${req.body.user}', 
  '${req.body.password}', '${req.body.name}');`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
//------------------------------------------------------------

app.listen(port, () => {
  console.log("Project running on port: ", port);
});
