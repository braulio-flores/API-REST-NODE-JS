let express = require('express');
let bodyParser = require('body-parser');
// let app = express();
let router = express.Router(); //LO DE ARRIBA LO SUSTITUIMOS POR ROUTE, YA QUE AQUI SE GESTIONAN RUTAS 
// Y APP SOLO HAY UNA


let usuarios = [{
    nombre:'Juan',
    apellido:'Flores',
    fechaNacimiento:'12/02/2022',
    pais:'Mexico'
}];
// COMO HAREMOS BASICO EL API, VAMOS A ALMACENAR LA INFO EN UN ARRAY
// POSTERIORMENTE LO HAREMOS CON MONGO DB

// 1)CREAR USUARIO
// AQUI SERIA /usuarios, PERO COMO ESTAMOS USANDO EL ROUTER Y EL MIDDLEWARE YA DETECTA /usuarios YA NO ES NECESARIO PONERLO
router.post("/",(req,res)=>{
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
router.get("/:includes",(req,res)=>{    
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
router.get("/id/:id",(req,res)=>{
    if (req.params.id>usuarios.length-1) {
        res.send({error:1});
    }else{
        res.send(usuarios[req.params.id]);
    }
})

router.get("/",(req,res)=>{
    // res.header(Access-Control-Allow-Origin, '*');
    res.send(usuarios);
})

// ACTUALIZAR USER
router.put("/:id",(req,res)=>{
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
router.delete("/:id",(req,res)=>{
    if (req.params.id>usuarios.length-1) {
        res.header("Access-Control-Allow-Origin", "*");
        res.send({error:1});
    }else{
        usuarios.splice( req.params.id, 1 );
        res.header("Access-Control-Allow-Origin", "*"); 
        res.send({deleted:1});
    }
})

module.exports = router; //PARA EXPORTAR EL ROUTER