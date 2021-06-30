// configuracion express
const express = require('express');
/**
 *  configuracion metodo Router de express para renderizar 
 * motor de vistas ejs*/ 
const router  = express.Router();

// Variable que requiere el modulo/importación de Controller
const listMealsController = require('../controller/listMealsController');

// rutas para las vistas
router.get('/', listMealsController.index);
router.get('/meal/detail/:id', listMealsController.detalleMenu);
router.get('/about', listMealsController.about);
router.get('/menu', listMealsController.menu);
//router.get('/about', listMealsController.index);


// exportacion routes
module.exports = router;