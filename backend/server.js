//nodemon
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbbiblioteca',
});

db.connect((error)=>{
    if(error){
        console.log("Error de contexion a la base de datos",error);
    }else{
        console.log("Conexion a la base de datos");
    }
})

app.listen(5000, () =>{
    console.log("servidor corriendo");
});