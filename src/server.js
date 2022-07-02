require('dotenv').config()
const express = require('express')
const app = express()
const puerto = process.env.PORT
const router = require('./router/rutas')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use('/api', router)


app.listen(puerto,(error)=>{
      if(error){
        console.log(`hubo un error ${error}`)
      } else{
        console.log(`escuchando el puerto ${puerto}`)
      }
       
})
