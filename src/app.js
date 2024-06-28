const express = require('express');
const config = require('./config');

const app = express();
const clients = require('./modules/clients/routes')

//Configuración de la variable app
app.set('port', config.app.port);


//Rutas
app.use('/api/clients', clients)

module.exports = app;