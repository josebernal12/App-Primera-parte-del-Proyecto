//SETITINGS
require('dotenv').config()
const express = require('express')
const app = express()
const puerto = process.env.PORT
const path = require('path')
const router = require('./router/rutas')

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)
app.use((req,res) =>{
 res.status(400).send('la ruta no existe')
})




// CONNECTION A PORT
app.listen(puerto,(error)=>{
      if(error){
        console.log(`hubo un error ${error}`)
      } else{
        console.log(`escuchando el puerto ${puerto}`)
      }
       
})
