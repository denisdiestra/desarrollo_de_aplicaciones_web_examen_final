var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "VENTAS_MYSQL_2022"
});

con.connect(function(err){
    if(err)throw err;
    console.log("Conectado!");

    var sql = "SELECT * FROM usuario";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log(result);
        console.log('Lista de Usuario');

        
    })

});