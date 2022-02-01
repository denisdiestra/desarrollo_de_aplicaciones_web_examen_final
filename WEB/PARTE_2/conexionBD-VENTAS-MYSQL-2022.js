var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

// CREAR LA CONEXION HACIA LA BASE DE DATOS

con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");

  // CREAR UNA BASE DE DATOS MYSQL

  con.query("CREATE DATABASE VENTAS_MYSQL_2022", function (err, result) {
    if (err) throw err;

    console.log("Database Created");
  });
  
});
