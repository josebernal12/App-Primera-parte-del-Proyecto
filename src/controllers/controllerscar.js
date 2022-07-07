const {products} = require('./controller')
const shoppingcart = []
const fs = require('fs')
const postCarrito = async (req, res) => {
    const fecha = Date.now()
    const carrito = req.body
    carrito.datos = fecha
    carrito.id = shoppingcart.length + 1
    carrito.Productos = []
    shoppingcart.push(carrito)
    await fs.promises.writeFile('./src/carrito/carrito.txt', JSON.stringify(shoppingcart))
    res.sendStatus(201)
}
const DeleteCarrito = async (req, res) => {
    const id = req.params.id
    const remove = shoppingcart.findIndex(p => p.id == id)
    shoppingcart.splice(remove, 1)
    await fs.promises.writeFile('./src/carrito/carrito.txt.txt', JSON.stringify(shoppingcart))
    res.sendStatus(200)
}

const getCarritos = (req, res) => {
    const id = req.body.id
    const idCarrito = req.params.id
    const productadd = products.find(p => p.id == id)
    const cartIndex = shoppingcart.findIndex(cart => cart.id == idCarrito)

    res.json(shoppingcart[cartIndex])
}



const postIdCarrito = async (req, res) => {
    const id = req.body.id
    const idCarrito = req.params.id
    const productadd = products.find(p => p.id == id)
    const cartIndex = shoppingcart.findIndex(cart => cart.id == idCarrito)
    shoppingcart[cartIndex].Productos.push(productadd)
    await fs.promises.writeFile('./src/carrito/carrito.txt', JSON.stringify(shoppingcart))

    res.sendStatus(201)

}
const deleteIdCarrito = async (req, res) => {
    const id = req.params.id
    const idCarrito = req.params.idCarrito
    const productadd = shoppingcart[0].Productos.findIndex(p => p.id == id)
    const cartIndex = shoppingcart.findIndex(cart => cart.id == idCarrito)
    shoppingcart[cartIndex].Productos.splice(productadd, 1)
    res.sendStatus(200)
}

module.exports = {
    shoppingcart, postCarrito,
    getCarritos,
    postIdCarrito,
    DeleteCarrito,
    deleteIdCarrito


}