const express = require("express");
const app = express.Router();
const burger = require("../models/burger");

app.get("/", function (req, res) {
    burger.selectAll(function(data){
        const handlebarObject = {burgers: data};
        res.render("index", handlebarObject);
    })
});

app.post("/burger/create", function(req, res){
    burger.insertOne(req.body.burger_name, function(){
        res.redirect("/");
    })
});

app.post("/burger/eat", function(req, res){
    burger.updateOne(req.body.id, function(){
        res.redirect("/");
    })
});

module.exports = app;

