const { Router } = require('express')
const { ObtenerProductos, CrearProducto, ActualizarPrdocuto, BorrarProducto } = require('../controllers/products.controllers') 

const router = Router()

router.get('/products', ObtenerProductos)

router.post('/create', CrearProducto)

router.put('/upDate', ActualizarPrdocuto)

router.delete('/delete', BorrarProducto)

module.exports = router