const { products } = require('./controller')
const shoppingcart = []
const fs = require('fs')



const postCarrito = async (req, res) => {
    const fecha = new Date().toString()
    const carrito = req.body
    carrito.datos = fecha
    carrito.id = shoppingcart.length + 1
    carrito.Productos = []
    shoppingcart.push(carrito)
    await fs.promises.writeFile('./src/carrito/carrito.txt', JSON.stringify(shoppingcart))
    res.status(201).send([`el id del carrito es: ${carrito.id}`])
}
const DeleteCarrito = async (req, res) => {
    const id = req.params.id
    const remove = shoppingcart.findIndex(p => p.id == id)
    if (!products[remove]) {
        res.status(404).send('el id no existe')

    } else {
        shoppingcart.splice(remove, 1)
        await fs.promises.writeFile('./src/carrito/carrito.txt.txt', JSON.stringify(shoppingcart))
        res.sendStatus(200)
    }
}

const getCarritos = (req, res) => {

    const idCarrito = Number(req.params.id)
    const checkCart = shoppingcart.some(c => c.id == idCarrito)
    if (checkCart) {
        const cartIndex = shoppingcart.filter(cart => cart.id == idCarrito)
        res.json(cartIndex)
    

    } else {

        res.status(400).send(`Lo siento no pudimos encontrar el carrito con el id: ${idCarrito}`)
    }


}

const postIdCarrito = async (req, res) => {
    const id = req.params.id_prod
    const idCarrito = req.params.id
    const checkCart = shoppingcart.some(c => c.id == idCarrito)
    const checkproduct =products.some(c => c.id == id)
     if  (!checkproduct){
        res.status(400).send(`Lo siento no pudimos encontrar el producto`)
    }
   
   else if (checkCart) {
        const productadd = products.find(p => p.id == id)
        const cartIndex = shoppingcart.findIndex(cart => cart.id == idCarrito)
        shoppingcart[cartIndex].Productos.push(productadd)
        res.sendStatus(201)
    }
  
    else {
        res.status(400).send(`Lo siento no pudimos encontrar el carrito con el id: ${idCarrito}`)
    }
}
const deleteIdCarrito = async (req, res) => {
    const id = req.params.id_prod
    const idCarrito = req.params.id
    const checkCart = shoppingcart.some(c => c.id == idCarrito)
    const checkproduct =shoppingcart[0].Productos.some(c => c.id == id)
    if  (!checkproduct){
       res.status(400).send(`Lo siento no pudimos encontrar el producto`)
   }
    else if (checkCart) {
        const productadd = shoppingcart[0].Productos.findIndex(p => p.id == id)
        const cartIndex = shoppingcart.findIndex(cart => cart.id == idCarrito)
        shoppingcart[cartIndex].Productos.splice(productadd, 1)
        res.sendStatus(200)
    }
    else {
        res.status(400).send(`Lo siento no pudimos encontrar el carrito con el id: ${idCarrito}`)
    }
}
module.exports = {
    shoppingcart, postCarrito,
    getCarritos,
    postIdCarrito,
    DeleteCarrito,
    deleteIdCarrito


}