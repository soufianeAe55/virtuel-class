const express=require('express')
const Router=express.Router()
const Etu = require('../Controllers/EtudiantController')
const EtuMiddl= require('../Middlerwares/EtudiantMiddle')
const FileMiddl=require('../Middlerwares/FileMiddl')
const FileMiddlSupp=require('../Middlerwares/FileMiddlSupp')


Router.get('/getActus',Etu.getActus)
      .get('/getSemsters',EtuMiddl,Etu.getSems)
      .get('/getModules/:idS',EtuMiddl,Etu.getMods)
      .get('/getAnnonces/:idAn',EtuMiddl,Etu.getAnnonces)
      .post('/addComment',EtuMiddl,Etu.addComment)
      .get('/getComments/:idAn',EtuMiddl,Etu.getComments)
      .get('/getDeviors/:idMod',EtuMiddl,Etu.getDeviors)
      .get('/getDevior/:idDev',EtuMiddl,Etu.getDevior)
      .post('/setDevior',EtuMiddl,FileMiddl,Etu.setDevior)
      .post('/deleteDevoir',EtuMiddl,Etu.deleteDevoir)
      .get('/getModulesForSupp',EtuMiddl,Etu.getModsForSupp)
      .post('/addSupport',EtuMiddl,FileMiddlSupp,Etu.addSupport)
      .put('/UpdateSupport',EtuMiddl,Etu.UpdateSupport)
      .get('/getSupports',EtuMiddl,Etu.getSupports)
      .post('/deleteSupport',EtuMiddl,Etu.deleteSupport)


module.exports= Router