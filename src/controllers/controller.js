const fs = require('fs')
const shopping = []


shopping.push({ products: [], shoppingcart: [] })


//PRODUCTS
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
const postProductos = async (req, res,) => {

    const fecha = Date.now()
    const Productos = { nombre, descripcion, codigo, foto, precio,stock } = req.body
    Productos.datos = fecha
    Productos.id = shopping[0].products.length + 1
    shopping[0].products.push(Productos)
    await fs.promises.writeFile('productos.txt', JSON.stringify(shopping))

    res.sendStatus(201)

}
const putProductos =async (req, res) => {

    const id = req.params.id
    const { nombre, descripcion, codigo, foto, precio,stock } = req.body
    const update = shopping[0].products.find(p => p.id == id)

    update.nombre = nombre
    update.descripcion = descripcion
    update.codigo = codigo
    update.foto = foto
    update.precio = precio
    update.stock = stock
    await fs.promises.writeFile('productos.txt', JSON.stringify(shopping))
    res.json(update)

}

const deleteProducto = async (req, res) => {
    const id = req.params.id
    const remove = shopping[0].products.findIndex(p => p.id == id)
    shopping[0].products.splice(remove, 1)
   await fs.promises.writeFile('productos.txt', JSON.stringify(shopping))
    res.sendStatus(200)
}

//CARRITO
const postCarrito = async (req, res) => {
    const fecha = Date.now()
    const carrito = req.body
    carrito.datos = fecha
    carrito.id = shopping[0].shoppingcart.length + 1

    carrito.Productos = []
    shopping[0].shoppingcart.push(carrito)
    await fs.promises.writeFile('productos.txt', JSON.stringify(shopping))
    res.sendStatus(201)
}
const DeleteCarrito = async (req, res) => {
    const id = req.params.id
    const remove = shopping[0].shoppingcart.findIndex(p => p.id == id)
    shopping[0].shoppingcart.splice(remove, 1)
    await fs.promises.writeFile('productos.txt', JSON.stringify(shopping))
    res.sendStatus(200)
}

const getCarritos = (req, res) => {
    const id = req.body.id
    const idCarrito = req.params.id
    const productadd = shopping[0].products.find(p => p.id == id)
    const cartIndex = shopping[0].shoppingcart.findIndex(cart => cart.id == idCarrito)

    res.json(shopping[0].shoppingcart[cartIndex])
}



const postIdCarrito = async(req, res) => {
    const id = req.body.id
    const idCarrito = req.params.id
    const productadd = shopping[0].products.find(p => p.id == id)
    const cartIndex = shopping[0].shoppingcart.findIndex(cart => cart.id == idCarrito)
    shopping[0].shoppingcart[cartIndex].Productos.push(productadd)
    await fs.promises.writeFile('productos.txt', JSON.stringify(shopping))

    res.sendStatus(201)

}
const deleteIdCarrito = async (req, res) => {
    const id = req.params.id
    const idCarrito = req.params.id
    const productadd = shopping[0].products.findIndex(p => p.id == id)
    const cartIndex = shopping[0].shoppingcart.findIndex(p => p.id == idCarrito)

    shopping[0].shoppingcart[cartIndex].splice[productadd,1]
   
  res.sendStatus(200)

}
// EXPORTAMOS LAS FUNCIONES
module.exports = {
    getProductos,
    getIdProductos,
    postProductos,
    putProductos,
    deleteProducto,
    postCarrito,
    getCarritos,
    postIdCarrito,
    DeleteCarrito,
    deleteIdCarrito
}
