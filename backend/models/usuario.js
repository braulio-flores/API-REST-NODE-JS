let mongoose = require('mongoose');

let esquema = new mongoose.Schema({
    // RECIBE COMO PARAMETRO UN JSON CON LAS REGLAS, ESQUEMA O ESTRUCTURA QUE DEBERIAN DE TENER TODOS LOS JSON
    // PARA ESTA COLECCION, PONIENDO UN JOSN CON LOS ATRIBUTOS QUE DESEAMOS TENER
    nombre: String,
    apellido: String,
    fechaNacimiento: mongoose.SchemaTypes.Mixed, //Con mixed digo que puedo poner lo que sea
    pais: String
});

// HAY QUE EXPORTAR ESTE ESQUEMA
module.exports = mongoose.model('usrs', esquema) 
// PRIMER PARAMETRO, NOMBRE DE LA COLECCION, SEGUDO PARAMETROY EL SEGUNDIO ES EL ESQUEMA QUE SE ACABA DE CREAR
// Y ESTE MODELO LO VAMOS A USAR EN DONDE SE GESTIONAN LAS RUTAS

// *PARA CADA COLECCION HAY QUE CREAR UN MODELO COMO ESTE
