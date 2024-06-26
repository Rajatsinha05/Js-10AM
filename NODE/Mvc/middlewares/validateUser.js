
const isLogged =(req,res,next)=>{
    if(req.user){
        next()
    }
    else{
        res.redirect("/user/login")
    }
}

module.exports ={isLogged}