const multer = require('multer');
const moment = require('moment')


const storage = multer.diskStorage({

  destination: (req, file, callback) => {
    callback(null, 'images/Actualites');
    
  },
  filename: (req, file, callback) => {
    const name = file.originalname
    let da=new Date(req.body.date).getTime()
    callback(null,moment(da).format('DD-MM-YYYY-hh:mm:ss')+'_'+name);
  }
});

module.exports = multer({storage: storage}).single('file');