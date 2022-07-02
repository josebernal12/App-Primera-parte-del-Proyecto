const checkstatus = (req,res,next) =>{
    const rol = req.body.rol
    if(rol == 'admin'){
       next()
      } else{
        res.sendStatus(401)
      }
}

module.exports = {
    checkstatus
}