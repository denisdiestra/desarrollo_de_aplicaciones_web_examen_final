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

    var sql = "INSERT INTO usuario (NOMBRE, APELLIDO, EDAD, CELULAR, CORREO) VALUES('LAURA', 'BACA', '27','921762798','DENISDIESTRA@HOTMAIL.COM')";
    
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("se inserto un usuario");
        
    })

});

// "INSERT INTO usuario (NOMBRE, APELLIDO, EDAD, CELULAR, CORREO) VALUES('MANUEL', 'INGA', '37','937394753','MANPOOH7@GMAIL.COM')";
// "INSERT INTO usuario (NOMBRE, APELLIDO, EDAD, CELULAR, CORREO) VALUES('KEVIN', 'VILCHEZ', '19','923348516','KEVINVILCHEZ@GMAIL.COM')";
// "INSERT INTO usuario (NOMBRE, APELLIDO, EDAD, CELULAR, CORREO) VALUES('DENIS', 'DIESTRA', '29','987746696','DENISDIESTRA@HOTMAIL.COM')";
//"INSERT INTO usuario (NOMBRE, APELLIDO, EDAD, CELULAR, CORREO) VALUES('LAURA', 'BACA', '27','921762798','DENISDIESTRA@HOTMAIL.COM')";