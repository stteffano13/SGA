'use strcit'

var bcrypt = require('bcrypt-nodejs');

var Administrador = require('../models/administrador');
const Estudiante = require('../models/estudiante');

var jwt = require('../services/jwt');
const { Op } = require("sequelize");


async function saveEstudiante(req, res) {

    try {
        var estudiante = Estudiante.build();
        var params = req.body; // cuerpo de la peticion post de la direccion http por post
        var count = 0;
        // console.log(params);

        let estudianteEncontrado = await Estudiante.findOne({
            where: {
                [Op.and]: [{
                    ESTADO_ESTUDIANTE: 0
                },

                {
                    [Op.or]: [
                        { CORREO_ESTUDIANTE: params.correo },
                        { CEDULA_ESTUDIANTE: params.cedula },

                    ]
                }
                ]
            }
        })
        console.log("params", params);
        if (estudianteEncontrado) {
            return res.status(500).send({
                message: "El estudiante ya existe, revise  cédula y correo electronico"
            });
        } else {

            var array = await Estudiante.findAll()

            if (array) {
                array.forEach(element => {
                    console.log("numero de regsitros", count);
                    count++
                });
                count = count + 1;
                estudiante.CODIGO_ESTUDIANTE = "CODE" + count;
                estudiante.NOMBRE_ESTUDIANTE = params.nombre.toUpperCase();;
                estudiante.APELLIDO_ESTUDIANTE = params.apellido.toUpperCase();;
                estudiante.CORREO_ESTUDIANTE = params.correo;
                estudiante.CONTRASENA_ESTUDIANTE = params.contrasena;
                estudiante.CELULAR_ESTUDIANTE = params.tel_celular;
                estudiante.CEDULA_ESTUDIANTE = params.cedula;
                estudiante.ESTADO_ESTUDIANTE = params.estado;

                if (params.contrasena) {

                    // encriptar contrasena y guardar datos
                    bcrypt.hash(params.contrasena, null, null, async function (err, hash) {

                        estudiante.CONTRASENA_ESTUDIANTE = hash;
                        if (estudiante.NOMBRE_ESTUDIANTE != null && estudiante.APELLIDO_ESTUDIANTE != null && estudiante.CORREO_ESTUDIANTE != null && estudiante.CEDULA_ESTUDIANTE != null) {
                            let estudianteGuardado = await estudiante.save();

                            if (!estudianteGuardado) {
                                res.status(404).send({
                                    message: 'No se ha registrado el  estudiante'
                                });
                            } else {
                                res.status(200).send({
                                    message: 'El estudiante se ha registrado correctamente'
                                });

                            }



                        } else {
                            res.status(200).send({
                                message: 'Introduce la contraseña '
                            });
                        }
                    });

                } else {
                    res.status(500).send({
                        message: 'Introduce la contraseña'
                    });
                }
            }



        }
    } catch (err) {
        res.status(500).send({
            message: err.name
        });
    }

}

async function loginEstudiante(req, res) {


    try {
        var params = req.body;
        var correo = params.Correo;
        var password = params.Contrasenia;


        let estudiante = await Estudiante.findOne({ where: { CORREO_ESTUDIANTE: correo } });

        console.log("correo", correo, password);
        if (!estudiante) {
            // console.log("error 404 el usuario no existe");
            res.status(402).send({
                message: 'El Usuario no existe.'
            });
        } else {
            console.log(estudiante.dataValues.CONTRASENA_ESTUDIANTE);
            let result = bcrypt.compareSync(password, estudiante.dataValues.CONTRASENA_ESTUDIANTE);
            if (result) {
                if (params.getHash) {


                    res.status(200).send({
                        token: jwt.createTokenEstudiante(estudiante)
                    });
                } else {
                    res.status(200).send({
                        estudiante
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

async function getEstudiantes(req, res) {


    try {

        let listadoEstudiantes = await Estudiante.findAll();


        if (!listadoEstudiantes) {
            return res.status(200).send({
                message: 'No tiene Estudiantes'
            });
        }

        return res.status(200).send({
            listadoEstudiantes
        });
    } catch (err) {
        res.status(500).send({
            message: err.name
        });
    }

}


async function buscarEstudiante(req, res) {

    try {
        var busqueda = req.params.busqueda;
        console.log(busqueda);
        if (!busqueda) {
            res.status(404).send({
                message: 'Ingrese un parametro de busqueda'
            });
        } else {
            let estudiante = await Estudiante.findOne({
                where: {
                    [Op.and]: [{
                        ESTADO_ESTUDIANTE: 0
                    },

                    {
                       ID_ESTUDIANTE: busqueda

                        
                    }
                    ]
                }
            });

            if (!estudiante) {
                res.status(404).send({
                    message: "No se encuentra resultados de la busqueda"
                });
            } else {
                res.status(200).send({
                    estudiante
                });
            }

        }
    } catch (err) {
        res.status(500).send({
            message: err.name
        });
    }
}


module.exports = {          // para exportar todas las funciones de este modulo
    saveEstudiante,
    loginEstudiante,
    getEstudiantes,
    buscarEstudiante



};