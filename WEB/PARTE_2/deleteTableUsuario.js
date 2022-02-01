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

    var sql = "DELETE FROM usuario WHERE ID_USUARIO = 2";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("se elimino 1 usuario");
        
    })

});
