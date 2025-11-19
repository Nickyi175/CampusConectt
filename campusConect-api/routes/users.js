//aqui manejo rutas 

var router = require('express').Router();//este me ayuda a manejar las rutas 
// (get, habuilitar, eliminar,entre otras cosas)
var usersCtrl = require('../controllers/users.js');//importo el controlador de users

router.post('/new', usersCtrl.createNewUser);//ruta para crear un usuario

module.exports = router;//creacion de modulo para poder exportar las rutas
