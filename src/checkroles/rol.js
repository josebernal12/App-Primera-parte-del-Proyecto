// FUNCION ADMIN
const checkstatus = (req,res,next) =>{
    const admin = true
    if(admin){
       next()
      } else{
        res.status(400).send('no eres administrador')
        }
      }


module.exports = {
    checkstatus
}