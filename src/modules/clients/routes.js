const express = require ('express')

const response = require ('../../red/response.js');
const controller = require ('./controller.js')

const router = express.Router();

router.get('/', function (req, res){
    const allData = controller.allData();
    response.success(req, res, 'Todos los clientes', 200)

});

module.exports = router;