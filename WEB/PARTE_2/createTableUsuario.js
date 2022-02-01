var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "VENTAS_MYSQL_2022"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE usuario (ID_USUARIO INT AUTO_INCREMENT PRIMARY KEY, NOMBRE VARCHAR(50), APELLIDO VARCHAR(50),EDAD CHAR(5), CELULAR CHAR(15), CORREO VARCHAR(100))";

    con.query(sql, function(err, result){
        if(err)throw err;
        console.log("Table created usuario");
    });

});