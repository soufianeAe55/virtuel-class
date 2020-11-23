const express= require('express')
const app=express()
const Login =require('./Routes/Users/Login')
const body= require('body-parser')
const path = require('path')
const Etudiant = require('./Routes/Etudiants')

    app.use(body.json())
        .use((req,res,next)=>{
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
                next();
        })
        .use('/images',express.static(path.join(__dirname,'images')))
        .use('/api',Login)
        .use('/api',Etudiant)
        .use('/',(req,res) => {
                    res.setHeader("Content-Type","text/html")
                    res.status(200)
                    .end('just un hhtest');
            })
module.exports=app