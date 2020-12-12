const express=require('express')
const Router=express.Router()
const Prof = require('../Controllers/ProfesseurController')
const ProfMiddl= require('../Middlerwares/ProfesseurMiddle')

Router.get('/getFilieres',ProfMiddl,Prof.getFilieres)
      .get('/getClasses/:idFl',ProfMiddl,Prof.getClasses)
      .get('/getModulesForProf/:idCl',ProfMiddl,Prof.getModules)
      .get('/getModuleForProf/:idMod',ProfMiddl,Prof.getModule)
      .get('/getAnnoncesForProf/:idMod',ProfMiddl,Prof.getAnnonces)
      .post('/addAnnProf',ProfMiddl,Prof.addAnn)
      .post('/addCommentForProf',ProfMiddl,Prof.addComment)
      .get('/getCommentsForProf/:idAn',ProfMiddl,Prof.getComments)
      .put('/updateAnnProf',ProfMiddl,Prof.UpdateAnnonce)
      .post('/deleteAnn',ProfMiddl,Prof.deleteAnn)

module.exports=Router