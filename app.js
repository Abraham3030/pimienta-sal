// configuracion de express
const express       = require('express');
const path          = require('path');
const app           = express();
const PORT          = process.env.PORT || 3000;
const publicPath    = path.resolve(__dirname, './public');

// configuracion de las rutas
const mainRoutes  = require('./routes/mainRoutes');

// configuracion para archivos estaticos de la carpeta public (fotos, css, etc)
app.use( express.static( publicPath ));

//Configuracion de EJS
app.set('view engine', 'ejs');
//configuracion nombre de la carpeta donde vamos a visualizar las vistas ejs
app.set('views', path.join(__dirname, 'views'));

// MVC configuracion del controlador
app.use('/', mainRoutes);

// Servidor escuchando
app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto: ' + PORT);
});


