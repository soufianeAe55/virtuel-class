const firebase=require('../FireConfig')
const firestore=firebase.firestore()
const Actus=firestore.collection('actualites')
const auth=firebase.auth()
const jwt = require('jsonwebtoken')
const fs= require('fs')




exports.getActus=  (req,res) => {

        let payloads=[]
         Actus.get()
          .then(snapshot => {
           snapshot.forEach(doc => {
                    let row={}
                    row={id: doc.id,data: doc.data()}
                    payloads.push(row)
            });
             res.status(201).json({payloads})   
         })
         .catch(err => {
            res.status(401).json(err)
         })
       

}

exports.getSems = (req,res) => {
        
        let token=req.headers.authorization.split(' ')[1]
        
        let tok=jwt.verify(token,'RANDOM_TOKEN_SECRET',(err,data) => {
        firestore.collection('users').where('email','==',data.userEmail).get()
        .then(data =>{
                let userActuel=[]
                      data.forEach(user => {
                                userActuel.push(user.data())
                      })

        res.status(201).json(userActuel)
              })
        .catch(err => {
                res.status(401).json({err})
         })
        })

}
exports.getMods = (req,res) => {
        
        let token=req.headers.authorization.split(' ')[1]
        jwt.verify(token,'RANDOM_TOKEN_SECRET',(err,data)=>{
                firestore.collection('Modules')
                .where('className','==',data.class)
                .where('Semster_id','==',parseInt(req.params.idS)).get()
                .then(docs => {
                    let data=[]
                    docs.forEach(doc => {
                          let obj=doc.data()
                          obj['id']=doc.id
                          data.push(obj)
                    })    
                    res.status(201).json({data})
                })
                .catch( err => {
                    res.status(401).json(err)
                })
        })

}

exports.getAnnonces = (req,res) => {
        let token=req.headers.authorization.split(' ')[1]
        jwt.verify(token,'RANDOM_TOKEN_SECRET',(err,data)=>{
                firestore.collection('Annonces')
                .where('module_id','==',req.params.idAn).get() 
                .then(docs => {
                        let data=[]
                        docs.forEach(doc => {
                                let obj=doc.data()
                                obj.id=doc.id
                                data.push(obj)
                        })
                        res.status(201).json(data)
                })
                .catch(err => {
                        res.status(401).json(err)
                })
        })
}

exports.addComment = (req,res) => {
       firestore.collection('Commentaires').add(req.body)
       .then( ()=> {
              
         res.status(201).json({'msg': 'comment bien ajoutee'})
       })
       .catch(err => {
        res.status(401).json({err})
       })
}

exports.getComments = (req,res) => {
        firestore.collection('Commentaires')
        .where('id_annonces','==',req.params.idAn).get()
        .then(docs => {
                let data=[]
                docs.forEach(doc => {
                        let obj=doc.data()
                        obj.id=doc.id
                        data.push(obj)
                })
                res.status(201).json(data)
        })
        .catch( err => {
                res.status(401).json(err)
        }) 
 
}

exports.getDeviors = (req,res) => {
        let token=req.headers.authorization.split(' ')[1]
        jwt.verify(token,'RANDOM_TOKEN_SECRET',(err,data)=>{
                firestore.collection('Devoirs')
                .where('id_module','==',req.params.idMod).get()
                .then( docs => {
                        let data=[]
                        docs.forEach(doc => {
                                let obj=doc.data()
                                obj.id=doc.id
                                data.push(obj)
                        })
                        res.status(201).json(data)
                })
                .catch(err => {
                        res.status(401).json(err)
                })
        })
}

exports.getDevior = (req,res) => {
        let data=[]
        let token=req.headers.authorization.split(' ')[1]
        jwt.verify(token,'RANDOM_TOKEN_SECRET',(err,dataGlo)=>{
                firestore.collection('Devoirs')
                .doc(req.params.idDev).get()
                .then( docs => {
                       
                        data.push(docs.data())

                        firestore.collection('DevoirReponse')
                        .where('emailEtu','==',dataGlo.userEmail)
                        .where('devoir_id','==',req.params.idDev).get()
                        .then(docs => {
                                docs.forEach(doc => {
                                        data.push(doc.data())
                                })
                                res.status(201).json(data)
                        })
                        .catch(err => {
                                res.status(401).json(err)
                        })
                        
                })
                .catch(err => {
                        res.status(401).json(err)
                })
        })
}

exports.setDevior =(req,res) =>{
   firestore.collection('DevoirReponse').add(req.body)
   .then(() => {
        res.status(201).json({msg: 'devoir added'})
   })
   .catch(() => {
        res.status(401).json({msg: 'devoir err'})
   })
}
exports.deleteDevoir= (req,res) => {
       
       let path='devoirs/'+req.body.date+'_'+req.body.name     
       let token=req.headers.authorization.split(' ')[1]

       jwt.verify(token,'RANDOM_TOKEN_SECRET',(err,dataGlo)=>{
        fs.unlink(path, (error) => {
                if (error) {
                  console.error(error)
                  return
                }
              firestore.collection('DevoirReponse')
              .where('devoir_id','==',req.body.idDev)
              .where('emailEtu','==',dataGlo.userEmail).get()
              .then((docs) => {
                    
                     docs.forEach(doc => {
                       doc.ref.delete()
                     })
                res.status(201).json({msg: 'Devoir deleted!'})
              })
              .catch(err => {
                res.status(401).json({msg: 'Devoir not delered!'})
              })
         })
        })
}

exports.getModsForSupp = (req,res) => {
        let token=req.headers.authorization.split(' ')[1]

        jwt.verify(token,'RANDOM_TOKEN_SECRET',(err,dataGlo)=>{
               // console.log(dataGlo)
                firestore.collection('Modules')
                .where('className','==',dataGlo.class)
                .get()
                .then(docs => {
                        let data=[]
                        docs.forEach(doc => {
                                let obj=doc.data()
                                obj.id=doc.id
                                data.push(obj)
                        })
                        res.status(201).json(data)
                })
                .catch(err => {
                        res.status(401).json(err)
                })
        })
}
exports.addSupport= (req,res) => {
        firestore.collection('Supports')
        .add(req.body)
        .then( () => {
                res.status(201).json({msg : 'support bien ajoutee!'})
        })
        .catch(err => {
                res.status(401).json(err)
        })
}

exports.getSupports = (req,res) => {
        let token=req.headers.authorization.split(' ')[1]

        jwt.verify(token,'RANDOM_TOKEN_SECRET',(err,dataGlo)=>{
                
                firestore.collection('Supports')
                .where('class','==',dataGlo.class)
                .get()
                .then(docs => {
                        let data=[]
                        docs.forEach(doc => {
                                let obj=doc.data()
                                obj.id=doc.id
                                data.push(obj)
                        })
                        res.status(201).json(data)
                })
                .catch(err => {
                        res.status(401).json(err)
                })
        })
}
exports.UpdateSupport= (req,res) => {
      
        let support =req.body
        firestore.collection('Supports')
        .doc(support.idSupport)
        .update({
                module:support.module,
                semstre: support.semstre,
                titre: support.titre,
                contenu: support.contenu,
                
        })
        .then((answer) => {
                res.status(201).json({msg: 'mise a jour!'})
        })
        .catch(err => {
                res.status(401).json(err)
        })
}

exports.deleteSupport= (req,res)=>{
     //   console.log(req.body)
        if(req.body.fileName != ''){
       let path='supports/'+req.body.date+'_'+req.body.fileName     
       fs.unlink(path, (error) => {
                 if (error) {
                   console.error(error)
                   return
                 }
               
          })
        }
        firestore.collection('Supports')
        .doc(req.body.id).delete()
        .then(() => {
                 res.status(201).json({msg: 'support deleted!'})
        })
        .catch(err => {
                res.status(401).json(err)
        })  
         
}