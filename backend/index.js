let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

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
    res.send({sucess:1,usuario:usuario});
});

app.get("/usuarios/:id",(req,res)=>{
    if (req.params.id>usuarios.length-1) {
        res.send({error:1});
    }else{
        res.send(usuarios[req.params.id]);
    }
})

app.get("/usuarios",(req,res)=>{
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
    res.send({modified:1,usuario:usuario});
})

// DELETE USER
app.delete("/usuarios/:id",(req,res)=>{
    if (req.params.id>usuarios.length-1) {
        res.send({error:1});
    }else{
        usuarios.splice( req.params.id, 1 );
        res.send({deleted:1});
    }
})

app.get("/",(req,res)=>{
    console.log("peticion recibida");
    // res.send('peticion recibida'); //!RESPUESTA RAPIDA
})

app.listen(8888,()=>{
    console.log('Se levanto el server');
});