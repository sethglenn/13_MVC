const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const burger = require('./controllers/burgerController.js')


app.use('/', burger)


app.listen(PORT, function () {
  
  console.log("Server listening on: http://localhost:" + PORT);
});