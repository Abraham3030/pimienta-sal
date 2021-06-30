// configuracion express
const express = require('express');
/**
 *  configuracion metodo Router de express para renderizar 
 * motor de vistas ejs*/ 
const router  = express.Router();

// Variable que requiere el modulo/importación de Controller
const mainController = require('../controller/mainController');

// rutas para las vistas
router.get('/', mainController.index);

router.get('/detalleMenu', mainController.detalleMenu);

// exportacion routes
module.exports = router;