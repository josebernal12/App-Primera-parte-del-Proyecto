const fs = require('fs')

const products = []

//PRODUCTS
const getProductos = (req, res) => {
    res.json(products)
}
const getIdProductos = (req, res) => {
    const id = req.params.id

    found = products.filter(product => {
        return product.id == id
    })
    res.json(found)


}
const postProductos = async (req, res,) => {

    const fecha = Date.now()
    const Productos = { nombre, descripcion, codigo, foto, precio, stock } = req.body
    Productos.datos = fecha
    Productos.id = products.length + 1
    products.push(Productos)
    await fs.promises.writeFile('./src/productos/productos.txt', JSON.stringify(products))

    res.sendStatus(201)

}
const putProductos = async (req, res) => {

    const id = req.params.id
    const { nombre, descripcion, codigo, foto, precio, stock } = req.body
    const update = products.find(p => p.id == id)

    update.nombre = nombre
    update.descripcion = descripcion
    update.codigo = codigo
    update.foto = foto
    update.precio = precio
    update.stock = stock
    await fs.promises.writeFile('./src/productos/productos.txt', JSON.stringify(products))
    res.json(update)

}

const deleteProducto = async (req, res) => {
    const id = req.params.id
    const remove = products.findIndex(p => p.id == id)
    products.splice(remove, 1)
    await fs.promises.writeFile('./src/productos/productos.txt', JSON.stringify(products))
    res.sendStatus(200)
}

//CARRITO





// EXPORTAMOS LAS FUNCIONES
module.exports = {
    getProductos,
    getIdProductos,
    postProductos,
    putProductos,
    deleteProducto,
    products

}
