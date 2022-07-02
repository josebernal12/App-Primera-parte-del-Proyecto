 const shopping = []
 shopping.push({products: [], shoppingcart: []})

const getProductos = (req, res) => {
    res.json(shopping[0].products)
}
const getIdProductos = (req, res) => {
    const id = req.params.id
    
     found = shopping[0].products.filter(product => {
        return product.id == id
    })
    res.json(found)

}
const postProductos = (req, res,) => {
    const fecha = Date.now()
    const Productos = { nombre, descripcion, codigo, foto, precio } = req.body
     Productos.datos = fecha
    Productos.id = shopping[0].products.length + 1   
    shopping[0].products.push(Productos)
   

    res.sendStatus(201)

}
const putProductos = (req, res) => {

    const id = req.params.id
    const { nombre, descripcion, codigo, foto, precio } = req.body
    const update = shopping[0].products.find(p => p.id == id)

    update.nombre = nombre
    update.descripcion = descripcion
    update.codigo = codigo
    update.foto = foto
    update.precio = precio

    res.json(update)

}

const deleteProducto = (req, res) => {
    const id = req.params.id
    const remove = shopping[0].products.findIndex(p => p.id == id)
    shopping[0].products.splice(remove, 1)

    res.sendStatus(200)
}

//CARRITO
const postCarrito = (req,res) =>{
     const carrito = {productos} = req.body
    carrito.id = shopping[0].shoppingcart.length + 1
    shopping[0].shoppingcart.push(carrito)
    res.sendStatus(201)
}

const postIdCarrito = (req,res) =>{
const id = req.body.id
const shop = shopping[0].products.filter(product =>{
    return product.id == id
})

shopping[0].shoppingcart.push(shop)
res.sendStatus(201)
}

const getCarritos = (req,res) => {
    res.json(shopping)
}





module.exports = {
    getProductos,
    getIdProductos,
    postProductos,
    putProductos,
    deleteProducto,
    postCarrito,
    getCarritos,
    postIdCarrito
}
