const {Router} = require('express')
const router = Router()
const {getProductos,getIdProductos,postProductos, putProductos,deleteProducto,postCarrito,getCarritos,postIdCarrito} = require('../controllers/controller')
const {checkstatus} = require('../checkroles/rol')


//ROUTER PRODUCTS
router.get('/productos',getProductos)
router.get('/productos/:id', getIdProductos)
router.post('/Productos',checkstatus, postProductos)
router.put('/productos/:id',checkstatus,putProductos)
router.delete('/productos/:id',checkstatus,deleteProducto)

// ROUTER CARRITO
router.post('/carrito',postCarrito)
router.delete('/carrito/:id')
router.get('/carrito/',getCarritos )
router.post('/carrito/:id',postIdCarrito)
router.delete('/carrito/:id/:id')



module.exports = router