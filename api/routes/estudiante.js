'use stric'


const express = require('express');
const EstudianteController = require('../controllers/estudiante');
const md_auth = require('../middleware/authenticated');

const api = express.Router(); // esto sirve para crear las rutas 
api.post('/saveEstudiante',EstudianteController.saveEstudiante);
api.post('/loginEstudiante', EstudianteController.loginEstudiante);



module.exports = api;// exportamos el router de express para que las routas funcionen por todo el back end