var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/VENTAS_MONGODB_2022";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("VENTAS_MONGODB_2022");
    dbo.createCollection("libro", function (err, res) {
        if (err) throw err;
        console.log("collection Create!");
        db.close();
    });
});