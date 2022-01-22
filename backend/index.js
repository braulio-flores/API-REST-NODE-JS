let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let cors = require('cors');
let usuariosRouter = require('./routes/usuarios-router');

// VAMOS A IMPORTAR LOS MODULOS QUE CREAMOS EN MODULES
var testModule = require('./modules/test-module');
app.use(cors()); //PERMITE PETICIONES DE OTROS ORIGENES PERO NO ME SIRVE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/usuarios',usuariosRouter); //IMPORTANTE QUE VENGA DESPUES DEL BODY PARSER Y CORS
// COMO PRIMER PARAMETRO SE LA PASA LA RUTA QUE GESTIONA Y COMO SEGUNDO EL ENRUTADOR QUE SE HIZO REQUIRE
// BASICAMENTE ES UN MIDLEWARE EN DONDE CUALQUIER PETICION QUE VENGA CON ESA RUTA DE INICIO LO VA A ENRUTAR A NUESTRA ROUTE
//EN EL ARCHIVO DEL ENRUTADOR DEBERIAMOS QUITAR EN LAS RUTAS LOS /usuarios POR EJEMPLO, LO DEJARIAMOS COMO /
//YA QUE DESDE AQUI EN EL MIDDLEWARE ESTAMOS DICIENDO QUE YA ES USUARIIOS

// app.header = "Access-Control-Allow-Origin", "*";
app.get("/",(req,res)=>{
    console.log("peticion recibida");
    // res.send('peticion recibida'); //!RESPUESTA RAPIDA
    res.send(testModule.mostrarMensaje());
})

app.listen(8888,()=>{
    console.log('Se levanto el server');
});