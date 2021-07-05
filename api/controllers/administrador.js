'use strcit'

var bcrypt = require('bcrypt-nodejs');

var Administrador = require('../models/administrador');

var jwt = require('../services/jwt');



async function saveAdministrador(req, res) {


    try {
        var params = req.body; // cuerpo de la peticion post de la direccion http por post
        // console.log(params);
        let administradorEncontrado = await Administrador.findOne({ where: { CORREO_ADMINISTRADOR: params.correo } });

        if (administradorEncontrado) {
            return res.status(402).send({
                message: "El Usuario ya Existe"
            });
        } else {
            let administrador = Administrador.build();
            administrador.CORREO_ADMINISTRADOR = params.correo;
            administrador.CONTRASENA_ADMINISTRADOR = params.contrasena;

            if (params.contrasena) {

                // encriptar contrasena y guardar datos
                await bcrypt.hash(params.contrasena, null, null, async function (err, hash) {

                    administrador.CONTRASENA_ADMINISTRADOR = hash;
                    let administradorGuardado = await administrador.save();
                    if (administradorGuardado) {
                        res.status(200).send({
                            message: 'Administrador guardado correctamente',
                            data: administradorGuardado
                        });
                    }
                });

            } else {
                res.status(500).send({
                    message: 'Introduce la contraseña'
                });
            }
        }
    } catch (err) {
        res.status(500).send({
            message: err.name
        });
    }

}


async function loginAdministrador(req, res) {


    try {
        var params = req.body;
        var correo = params.Correo;
        var password = params.Contrasenia;


        let administrador = await Administrador.findOne({ where: { CORREO_ADMINISTRADOR: correo } });

       console.log("correo", correo, password);
        if (!administrador) {
            // console.log("error 404 el usuario no existe");
            res.status(402).send({
                message: 'El Usuario no existe.'
            });
        } else {
            console.log(administrador.dataValues.CONTRASENA_ADMINISTRADOR);
            let result = bcrypt.compareSync(password, administrador.dataValues.CONTRASENA_ADMINISTRADOR);
            if (result) {
                if (params.getHash) {


                    res.status(200).send({
                        token: jwt.createTokenAdministrador(administrador)
                    });
                } else {
                    res.status(200).send({
                        administrador
                    });
                }

            } else {
                res.status(404).send({
                    message: 'Autencicación fallida usuario o contraseña incorrectos.'
                });

            }




        } //como el where en sql

    } catch (err) {
        res.status(500).send({
            message: err.name
        });
    }
}





module.exports = {          // para exportar todas las funciones de este modulo

    saveAdministrador,
    loginAdministrador,
   


};