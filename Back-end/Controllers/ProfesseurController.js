const firebase=require('../FireConfig')
const firestore=firebase.firestore()
const jwt = require('jsonwebtoken')
const fs= require('fs')

exports.getFilieres= async (req,res) => {
   
    
    let fils=[]
      let token=req.headers.authorization.split(' ')[1]
      jwt.verify(token,'RANDOM_TOKEN_SECRET', async (err,User)=>{
          
            let docs = await firestore.collection('FiliereProf')
            .where('emailProf','==',User.userEmail).get()
            let length=0//Object.keys(docs).length
            let i=0
            
            docs.forEach( async (doc) => {
                length++
            })
            length++
              docs.forEach( async (doc) => {
                  
                  let obj=doc.data()
                   obj.id=doc.id
  
                let docs2= await firestore.collection('ClassProf')
                  .where('emailProf','==',User.userEmail)
                  .where('idFil','==',obj.idFil).get()
                let classes=[]
                docs2.forEach( (doc) => {
                    let objet=doc.data()
                    objet.id=doc.id
                    classes.push(objet)
  
                })
                i++
                    obj.classes=classes
                    fils.push(obj)
                   // console.log(fils)
                    console.log(length,i)
                    if(i== length-1){ 
                      //  console.log(length,i)
                        res.status(201).json(fils)
                    }
                    console.log(fils)
              })
            
           
         
         
      })
  }

exports.getClasses = (req,res) => {
    let token=req.headers.authorization.split(' ')[1]
    jwt.verify(token,'RANDOM_TOKEN_SECRET',(err,User)=>{
        
        firestore.collection('ClassProf')
        .where('emailProf','==',User.userEmail)
        .where('idFil','==',req.params.idFl).get()
        .then(docs => {
            let classes=[]
            docs.forEach(doc => {
                let obj=doc.data()
                 obj.id=doc.id
                 classes.push(obj)

            })
          //  console.log(classes)
            res.status(201).json(classes)
        })
        .catch(err => {
            res.status(401).json({err})
        })

        

    })
}
exports.getModules= async (req,res) => {

    let token=req.headers.authorization.split(' ')[1]
    jwt.verify(token,'RANDOM_TOKEN_SECRET',async (err,User)=>{
        let docs= await firestore.collection('Modules')
        .where('className','==',req.params.idCl)
        .where('emailProf','==',User.userEmail).get()
        let mods=[]
        docs.forEach(doc => {
            let obj=doc.data()
            obj.id=doc.id
            mods.push(obj)
        })
        res.status(201).json(mods)

    })   
}
exports.getModule= async (req,res) => {

    let token=req.headers.authorization.split(' ')[1]
    jwt.verify(token,'RANDOM_TOKEN_SECRET',async (err,User)=>{
        let doc= await firestore.collection('Modules')
        .doc(req.params.idMod)
        .get()
        let mods=[]
       
            let obj=doc.data()
            obj.id=doc.id
            mods.push(obj)
       
        res.status(201).json(mods)

    })   
}

exports.getAnnonces= (req,res)=> {

    firestore.collection('Annonces')
    .where('module_id','==',req.params.idMod).get() 
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
}

exports.addAnn = (req,res) => {
    firestore.collection('Annonces')
    .add(req.body)
    .then(() => {
        res.status(201).json({msg: 'added!'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'not added!'})
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

exports.addComment= (req,res) => {
    firestore.collection('Commentaires').add(req.body)
       .then( ()=> {
              
         res.status(201).json({'msg': 'comment bien ajoutee'})
       })
       .catch(err => {
        res.status(401).json({err})
       })
}

exports.UpdateAnnonce= (req,res) => {
      
    let Ann =req.body
    firestore.collection('Annonces')
    .doc(Ann.ann_id)
    .update({
            
            titre: Ann.titre,
            contenu: Ann.contenu,
            
    })
    .then((answer) => {
            res.status(201).json({msg: 'mise a jour!'})
    })
    .catch(err => {
            res.status(401).json(err)
    })
}

exports.deleteAnn = (req,res) => {

   firestore.collection('Annonces')
   .doc(req.body.id).delete()
   .then(() => {
        res.status(201).json({msg: 'deleted!'})
   })
   .catch(() => {
    res.status(401).json({msg: 'not deleted!'})
   })
}

exports.getDevoirsForProf= (req,res) => {

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
}
exports.addDevoirProf= (req,res) =>{
    firestore.collection('Devoirs').add(req.body)
       .then( ()=> {
              
         res.status(201).json({'msg': 'devoir bien ajoutee'})
       })
       .catch(err => {
        res.status(401).json({err})
       })
}

exports.getDevoirForProf = (req,res) => {
    firestore.collection('Devoirs')
    .doc(req.params.idDev).get()
    .then( docs => {
            let data=[]
            let obj=docs.data()
            obj.id=docs.id  
            data.push(obj)
           
            res.status(201).json(data)
    })
    .catch(err => {
            res.status(401).json(err)
    })
}
exports.getDevoirReponses = (req,res) => {
     firestore.collection('DevoirReponse')
    .where('devoir_id','==',req.params.idDev).get()
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
}
exports.updateDevoirProf= (req,res) => {
    let dev=req.body
    console.log(dev)
    firestore.collection('Devoirs')
    .doc(dev.id)
    .update({
            
            name: dev.name,
            contenu: dev.contenu,
            date: dev.date
            
    })
    .then((answer) => {
            res.status(201).json({msg: 'mise a jour!'})
    })
    .catch(err => {
            res.status(401).json(err)
    })
}
exports.deleteDev = (req,res) => {

    firestore.collection('Devoirs')
    .doc(req.body.id).delete()
    .then(() => {
         res.status(201).json({msg: 'deleted!'})
    })
    .catch(() => {
     res.status(401).json({msg: 'not deleted!'})
    })
 }