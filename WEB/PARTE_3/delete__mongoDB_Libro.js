var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/VENTAS_MONGODB_2022";

MongoClient.connect(url, function (err, db) {

    if (err) throw err;
    var dbo = db.db("VENTAS_MONGODB_2022");
    var myobj = {ID_LIBRO:2};
    
    dbo.collection("libro").deleteOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("documento Libro eliminado!");
        db.close();
    });

});