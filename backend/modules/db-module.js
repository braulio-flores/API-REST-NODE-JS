let mongoose = require('mongoose');

// NOMBRE DE LA BD USUARIOS
let bd = 'usuarios';
let port = '27017';
// SABER EL HOSTING O EN DONDE ESTA
let host = 'localhost';

// HAREMOS UNA CLASE PARA GESTIONAR LA CONEXION USANDO ESTOS DATOS
class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        // USAREMOS EL MODULO MOONGOSE
        mongoose.connect(`mongodb://${host}:${port}/${bd}`)
        .then((res)=>{
            // console.log(res);
            // console.log("se conecto a mongo");
        })
        .catch((error)=>{
            console.error(error);
        });
    }
}

module.exports = new Database();
// LO EXPORTAMOS COMO UN NUEVO OBJETO DE LA CLASE PARA QUE CUANDO SE REQUIERA
// LUEGO LUEGO LLAME AL CONSTRUCTOR Y GENERE LA CONEXION