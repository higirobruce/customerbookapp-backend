const express = require("express");
var cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const recordsRoute = require('./routes/records')

const PORT = process.env.PORT ? process.env.PORT : 9000;

var mongoose = require("mongoose");

// var mongoDB =
//   "mongodb+srv://mongo-admin:2tij6e0anAgKU6tb@myfreecluster.kxvgw.mongodb.net/customerbook?retryWrites=true&w=majority";
// "mongodb+srv://root:Beniyak1@cluster0.8ycbagi.mongodb.net/construck?retryWrites=true&w=majority";

var mongoDB = "";
mongoDB = process.env.CONS_MONGO_DB;

mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", () => console.log("connected to db"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Basic Authorization
let auth = (req, res, next) => {
    const auth = { login: "customerb00k", password: "@9T4Tr73%62l!iHqdhWv" }; // change this
    // const auth = {
    //   login: process.env.CONS_API_USER,
    //   password: process.env.CONS_API_PASS,
    // }; // change this
    const b64auth = (req.headers.authorization || "").split(" ")[1] || "";
    const [login, password] = Buffer.from(b64auth, "base64")
      .toString()
      .split(":");
    if (login && password && login === auth.login && password === auth.password) {
      return next();
    }
    res.set("WWW-Authenticate", 'Basic realm="401"'); // change this
    res.status(401).send("Authentication required."); // custom message
  };

  app.get('/', (req,res)=>{
    res.send('Welcome')
  })
  app.use('/records', recordsRoute)


  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
  