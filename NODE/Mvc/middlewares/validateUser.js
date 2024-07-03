
const isLogged =(req,res,next)=>{
    if(req.user){
       next()
    }
    else{
        res.redirect("/user/login")
    }
}


const Admin =(req,res,next)=>{
    if(req.user.role=='admin'){
        // req.body.userId=req.user._id
        next()
    }
    else{
        res.send("you are not admin")
    }
}

module.exports ={isLogged,Admin}