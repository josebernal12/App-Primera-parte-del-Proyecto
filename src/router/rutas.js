// CONFIGURATION 
const {Router} = require('express')
const router = Router()
const {getProductos,getIdProductos,postProductos, putProductos,deleteProducto,postCarrito,getCarritos,postIdCarrito,DeleteCarrito,deleteIdCarrito} = require('../controllers/controller')
const {checkstatus} = require('../checkroles/rol')


//ROUTER PRODUCTS
router.get('/productos',getProductos)
router.get('/productos/:id', getIdProductos)
router.post('/Productos',checkstatus, postProductos)
router.put('/productos/:id',checkstatus,putProductos)
router.delete('/productos/:id',checkstatus,deleteProducto)

// ROUTER CARRITO
router.post('/carrito',postCarrito)
router.delete('/carrito/:id',DeleteCarrito)
router.get('/carrito',getCarritos )
router.post('/carrito/:id',postIdCarrito)
router.delete('/carrito/:id/:id',deleteIdCarrito)


// EXPORTAMOS ROUTER
module.exports = router