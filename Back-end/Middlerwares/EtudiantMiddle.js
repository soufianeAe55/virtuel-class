const jwt=require('jsonwebtoken')


module.exports= (req,res,next) => {
    try{
        let token=req.headers.authorization.split(' ')[1]
        
        let tok=jwt.verify(token,'RANDOM_TOKEN_SECRET',(err,data) => {
           
            if(err){
                res.status(201).json({MsgErr: err.name})
            }else if(data.type != 'Etudiant'){
                res.status(201).json({MsgErr: 'JustForEtu'})
            }

        });
        
        next()
    }catch(erreur){
        res.status(401).json({Error: erreur});
    }
}