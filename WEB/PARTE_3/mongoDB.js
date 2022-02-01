var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/VENTAS_MONGODB_2022";

MongoClient.connect(url, function (err, db) {

    if (err) throw err;
    console.log("Database create!");
    db.close();
});