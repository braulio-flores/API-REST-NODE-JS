let express = require('express');
// let app = express();
let router = express.Router(); //LO DE ARRIBA LO SUSTITUIMOS POR ROUTE, YA QUE AQUI SE GESTIONAN RUTAS 
// Y APP SOLO HAY UNA

let usuario = require('../models/usuario'); //AQUI IMPORTAMOS EL ESQUEMA QUE CREAMOS DENTRO DEL MODELO

// 1)CREAR USUARIO
// AQUI SERIA /usuariosdb, PERO COMO ESTAMOS USANDO EL ROUTER Y EL MIDDLEWARE YA DETECTA /usuarios YA NO ES NECESARIO PONERLO
router.post("/",(req,res)=>{
    // let usuarioInfo = 

    let userInfo = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: {dia:req.body.fechaNacimiento.dia, mes:req.body.fechaNacimiento.mes, anio:req.body.fechaNacimiento.anio},
        pais: req.body.pais
    };

    let u = new usuario(userInfo);

    u.save()
    .then((result)=>{
        // res.send({sucess:1,usuario:usuario});
        res.send(result);
        res.end;
    })
    .catch((error)=>{
        res.send(error);
        res.end;
    });
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

    usuario.find({_id:req.params.id}) //ESTE ES EL SELECT USANDO EL MODELO LE DECIMOS LA COLECCION
    .then((result)=>{
        res.send(result[0]);
        res.end;
    })
    .catch((error)=>{
        res.send(error);
        res.end;
    });

    
})

router.get("/",(req,res)=>{
    // AQUI VAMOS A USAR EL MODELO PARA MOSTARR A TODOS LOS DOCUMENTOS DE LA COLECCION EN MONGO
    // EL METODO FIND ES BAJO PROMESAS POR ESO USAMOS FIND Y CATCH
    usuario.find() //ESTE ES EL SELECT USANDO EL MODELO LE DECIMOS LA COLECCION
    .then((result)=>{
        // console.log(result);
        res.send(result);
        res.end;
    })
    .catch((error)=>{
        // console.error(error);
        res.send(error);
        res.end;
    });
})

// ACTUALIZAR USER
router.put("/:id",(req,res)=>{

    let usuarioInfoM = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: {dia:req.body.fechaNacimiento.dia, mes:req.body.fechaNacimiento.mes, anio:req.body.fechaNacimiento.anio},
        pais: req.body.pais
    }
    usuario.update({'_id':req.params.id},usuarioInfoM)
    .then((result)=>{
        res.send(result);
        res.end()
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
})

// DELETE USER
router.delete("/:id",(req,res)=>{
    usuario.remove({_id:req.params.id}) 
    .then((result)=>{
        res.send(result);
        res.end;
    })
    .catch((error)=>{
        res.send(error);
        res.end;
    });
})

module.exports = router; //PARA EXPORTAR EL ROUTER