var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/VENTAS_MONGODB_2022";

MongoClient.connect(url, function (err, db) {

    if (err) throw err;
    var dbo = db.db("VENTAS_MONGODB_2022");
    var myobj = { ID_LIBRO:4,NOMBRE:"Medea", AUTOR: "Eurípides", NUMERO_PÁGINAS: 180, COLOR: "Verde"};
    var myobjUpdate = {$set:{ ID_LIBRO:4,NOMBRE:"La historia", AUTOR: "Elsa Morante", NUMERO_PÁGINAS: 100, COLOR: "Blanco"}};


    
    
    dbo.collection("cliente").updateOne(myobj, myobjUpdate, function (err, res) {
        if (err) throw err;
        console.log("1 Libro actualizado!");
        db.close();
    });

});