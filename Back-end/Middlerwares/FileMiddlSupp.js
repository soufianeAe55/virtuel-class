const multer= require('multer')
const moment=require('moment')
const jwt=require("jsonwebtoken")


  const storage = multer.diskStorage({
   
    destination: (req, file, callback) => {
        
      callback(null, 'supports');
    },
    filename: (req, file, callback) => {
      let token=req.headers.authorization.split(' ')[1]
      let dataUser=jwt.verify(token,'RANDOM_TOKEN_SECRET')
      let userName=dataUser.userEmail.split('-')[0]

      callback(null,moment(Date.now()).format('DD-MM-YYYY_h:mm_a')+"_"+file.originalname);
    }
  });
  
  module.exports = multer({storage: storage}).single('file');