const express = require ('express')

const response = require ('../../red/response.js');
const controller = require ('./index.js');
const router = express.Router();

//Indicamos que cuando se consulte cualquiera de estas rutas 
//tome el codigo de la funcion que se le esta pasando dentro de los parentecis
router.get('/',allData);
router.get('/:id', oneData);
router.post('/', addData);
router.put('/', deleteData);

async function allData (req, res, next){
    try {
        const items = await controller.allData()
        response.success(req, res, items, 200)
    } catch (error) {
        next(err) 
    }
    
};

async function oneData (req, res, next){
    try {
        const items = await controller.oneData(req.params.id)
        response.success(req, res, items, 200)
    } catch (err) {
        next(err)
    }
    
};

async function addData (req, res, next){
    try {
        const items = await controller.addData(req.body)
        if(req.body.id == 0){
            message = 'Usuario Guardado exitosamente'
        }else{
            message = 'Usuario Actualizado exitosamente'

        }
        response.success(req, res, message, 201)
    } catch (err) {
        next(err)
    }
};

async function deleteData (req, res, next){
    try {
        const items = await controller.deleteData(req.body)
        response.success(req, res, 'Usuario Eliminado Satisfactoriamente', 200)
    } catch (err) {
        next(err)
    }
    
};

module.exports = router;