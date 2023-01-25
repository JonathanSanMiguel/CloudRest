const { Router } = require('express')

const router = Router()

router.get('/products', (req, res) => res.send('Obteniendo productos'))

router.post('/createProduct', (req, res) => res.send('Creando Producto'))

router.put('/upDateProduct', (req, res) => res.send('Actualizando Producto'))

router.delete('/deleteProduct', (req, res) => res.send('Borrando Producto'))

module.exports = router