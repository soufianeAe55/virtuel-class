const express=require('express')
const Router=express.Router()
const Etu = require('../Controllers/EtudiantController')


Router.get('/getActus',Etu.getActus)

module.exports= Router