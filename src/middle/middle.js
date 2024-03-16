const jwt=require('jsonwebtoken')
const athunticateToken=(req,res,next)=>{
    const token=req.header('Authorization');
    console.log(token);
    if(!token){
        return res.status(401).json({error:"unathorized:token not provided"})

    }
    jwt.verify(token,'NOTESAPI',(err,user)=>{
        if(err){
            return res.status(403).json({error:'invalid token'});  
        }
        req.user=user;
        next();
    });


};
module.exports=athunticateToken;