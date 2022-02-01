var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/VENTAS_MONGODB_2022";

MongoClient.connect(url, function (err, db) {

    if (err) throw err;
    var dbo = db.db("VENTAS_MONGODB_2022");
    var myobj = { ID_LIBRO:4,NOMBRE:"Medea", AUTOR: "Eurípides", NUMERO_PÁGINAS: 180, COLOR: "Verde"};
    
    
    dbo.collection("libro").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document insert!");
        db.close();
    });


});

// var myobj = { ID_LIBRO:1,NOMBRE:"Orgullo y prejuicio", AUTOR: "Jane Austen", NUMERO_PÁGINAS: 399, COLOR: "Azul"};
//var myobj = { ID_LIBRO:4,NOMBRE:"Medea", AUTOR: "Eurípides", NUMERO_PÁGINAS: 180, COLOR: "Verde"};
//var myobj = { ID_LIBRO:2,NOMBRE:"Divina comedia", AUTOR: "Dante Alighieri", NUMERO_PÁGINAS: 500, COLOR: "Negro"};
//var myobj = { ID_LIBRO:3,NOMBRE:"Papá Goriot", AUTOR: "Honoré de Balzac", NUMERO_PÁGINAS: 450, COLOR: "Negro"};