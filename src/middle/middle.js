const jwt=require('jsonwebtoken')
const athunticateToken=(req,res,next)=>{
    const token=req.header('Authorization');
    
    if(!token){
        return res.status(401).json({error:"unathorized:token not provided"})
    }
    jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(403).json({error:'invalid token'});  
        }
        if(user.email!=req.body.email){
            return res.status(403).json({error:'token does not match'})
        }
        req.user=user;
        next();
    });

};
module.exports=athunticateToken;