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

    var sql = "UPDATE  usuario SET NOMBRE = 'LAURA', APELLIDO = 'BACA',EDAD='28',CELULAR='921762798', CORREO='LAURABACA@GMAIL.COM' WHERE ID_USUARIO=4";
    
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("se actualizo un usuario");
        
    })

});

// SE ACTUALIZO  CORREO  CORREO='LAURABACA@GMAIL.COM'  Y EDAD 27 A 28 
