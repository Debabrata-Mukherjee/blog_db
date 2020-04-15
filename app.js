const express = require("express");
const bodyParser = require("body-parser");
const user = require("./route/user");
const mongoose = require("mongoose");
const path = require("path")

const app = express();



const InitiateMongoServer = async () => {
  try {
    await mongoose.connect("mongodb+srv://mukherjeedebabrata667:mukherjeedebabrata123@cluster0-vijkf.mongodb.net/blog", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("DataBase Connected!!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

InitiateMongoServer()


// PORT
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Pathetic API!!!</h1>");
});

app.use("/user", user);


app.listen(PORT, (req, res) => {
  console.log(`App started on Port ${PORT}`);
});



