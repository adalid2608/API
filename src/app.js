const express = require('express');
const config = require('./config');
const morgan = require('morgan')

const app = express();
const error = require('./red/errors')
const clients = require('./modules/clients/routes');
const users = require('./modules/users/routes');

//Middleware
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//Configuración de la variable app
app.set('port', config.app.port);


//Rutas
app.use('/api/clients', clients)
app.use('/api/users', users)
app.use(error)

module.exports = app;