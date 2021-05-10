const express = require("express");
const bodyParse = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
        return console.log(err)
    }
    console.log("connect successful")
})
