const multer= require('multer')
const moment=require('moment')


  const storage = multer.diskStorage({
   
    destination: (req, file, callback) => {
        console.log(file)
        console.log(req)
      callback(null, 'supports');
    },
    filename: (req, file, callback) => {

      callback(null,moment(Date.now()).format('DD-MM-YYYY')+"_"+file.originalname);
    }
  });
  
  module.exports = multer({storage: storage}).single('file');