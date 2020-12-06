const express=require('express')
const Router=express.Router()
const Login = require('../../Controllers/Users/LoginController')


Router.post('/RegisterEtu',Login.Register)
      .post('/loginEtu',Login.Login)
      .get('/deconnecter',Login.deconnecter)

module.exports= Router