let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    // res.header('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
    next();
});

// app.header = "Access-Control-Allow-Origin", "*";

let usuarios = [{
    nombre:'Juan',
    apellido:'Flores',
    fechaNacimiento:'12/02/2022',
    pais:'Mexico'
}];
// COMO HAREMOS BASICO EL API, VAMOS A ALMACENAR LA INFO EN UN ARRAY
// POSTERIORMENTE LO HAREMOS CON MONGO DB

// 1)CREAR USUARIO
app.post("/usuarios",(req,res)=>{
    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        pais: req.body.pais
    }

    usuarios.push(usuario);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({sucess:1,usuario:usuario});
});

// ESTA OPCION SE MODIFICO PARA BUSCAR USUARIOS POR NOMBRE Y COINCIDENCIAS en lugar de por iD
app.get("/usuarios/:includes",(req,res)=>{    
        if (req.params.includes=='') {
            res.send(usuarios);
        } else {
            let includUsers = [];
            usuarios.map((item,i)=>{
                if (item.nombre.includes(req.params.includes)) {
                    includUsers.push(item);
                }
            });
            if (includUsers.length==0) {
                res.send([{users:'any'}]);
            }else{
                res.send(includUsers);
            }
        }
})

// PARA BUSCAR POR "ID"
app.get("/usuarios/id/:id",(req,res)=>{
    if (req.params.id>usuarios.length-1) {
        res.send({error:1});
    }else{
        res.send(usuarios[req.params.id]);
    }
})

app.get("/usuarios",(req,res)=>{
    // res.header(Access-Control-Allow-Origin, '*');
    res.send(usuarios);
})

// ACTUALIZAR USER
app.put("/usuarios/:id",(req,res)=>{
    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        pais: req.body.pais
    }

    usuarios[req.params.id] = usuario;
    res.header("Access-Control-Allow-Origin", "*");
    res.send({modified:1,usuario:usuario});
})

// DELETE USER
app.delete("/usuarios/:id",(req,res)=>{
    if (req.params.id>usuarios.length-1) {
        res.header("Access-Control-Allow-Origin", "*");
        res.send({error:1});
    }else{
        usuarios.splice( req.params.id, 1 );
        res.header("Access-Control-Allow-Origin", "*"); 
        res.send({deleted:1});
    }
})

app.get("/",(req,res)=>{
    console.log("peticion recibida");
    res.send('peticion recibida'); //!RESPUESTA RAPIDA
})

app.listen(8888,()=>{
    console.log('Se levanto el server');
});