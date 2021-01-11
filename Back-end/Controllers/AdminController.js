const firebase=require('../FireConfig')
const firestore=firebase.firestore()
const jwt = require('jsonwebtoken')
const fs = require('fs')
const moment = require('moment')

exports.addActu = (req,res) => {
   
     firestore.collection('actualites').add(req.body)
    .then(() => {
        res.status(201).json({msg: 'Added'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'error'})
    })
}

exports.updateActu= (req,res) => {

    
    firestore.collection('actualites')
    .doc(req.body.id)
    .update({
        name: req.body.titre,
        contenu: req.body.contenu
    })
    .then(() => {
        res.status(201).json({msg: 'updated'})
    })
    .catch( err => {
        res.status(401).json({msg: 'err'})
    })
}

exports.deleteActu = (req,res) => {

    let d =new Date(req.body.date).getTime()
    let path='images/Actualites/'+moment(req.body.date).format('DD-MM-YYYY-hh:mm:ss')+'_'+req.body.image
    fs.unlink(path, (error) => {
        if (error) {
          console.error(error)
          return
        }
        firestore.collection('actualites')
        .doc(req.body.id).delete()
        .then(() => {
                 res.status(201).json({msg: 'deleted!'})
        })
        .catch(err => {
                res.status(401).json(err)
        })  
 })

}

exports.getDepts= async (req,res) => {

     let depts= await firestore.collection('Departements').get()
     let deptTab=[]
     depts.forEach(doc => {
         let obj=doc.data()
         obj.id=doc.id
         deptTab.push(obj)
     });
    
     let fils= await firestore.collection('Filieres').get()
     let filTab=[]
     fils.forEach(doc => {
         let obj=doc.data()
         obj.id=doc.id
         filTab.push(obj)
     });

     let classes= await firestore.collection('Class').get()
     let classTab=[]
     classes.forEach(doc => {
         let obj=doc.data()
         obj.id=doc.id
         classTab.push(obj)
     });

     let mods= await firestore.collection('Modules')
     .get()
     let modTab=[]
     mods.forEach(doc => {
         let obj=doc.data()
         obj.id=doc.id
         modTab.push(obj)
     });

     let etuds= await firestore.collection('users')
     .where('type','==','Etudiant').get()
     let etuTab=[]
     etuds.forEach(doc => {
         let obj=doc.data()
         obj.id=doc.id
         etuTab.push(obj)
     });
     let profs= await firestore.collection('users')
     .where('type','==','Professeur').get()
     let profTab=[]
     profs.forEach(doc => {
         let obj=doc.data()
         obj.id=doc.id
         profTab.push(obj)
     });

     let profsDept= await firestore.collection('DepartProfs').get()
     let profsDeptTab=[]

     profsDept.forEach(doc => {
         let obj=doc.data()
         obj.id=doc.id
         profsDeptTab.push(obj)
     });

     let profFils= await firestore.collection('FiliereProf').get()
     let profFilsTab=[]
     profFils.forEach(doc => {
         let obj=doc.data()
         obj.id=doc.id
        profFilsTab.push(obj)
     });
     let profClass= await firestore.collection('ClassProf').get()
     let profClassTab=[]
     profClass.forEach(doc => {
         let obj=doc.data()
         obj.id=doc.id
         profClassTab.push(obj)
     });

     let AdminData=[]
     AdminData.push(deptTab)
     AdminData.push(filTab)
     AdminData.push(classTab)
     AdminData.push(modTab)
     AdminData.push(etuTab)
     AdminData.push(profTab)
     AdminData.push(profsDeptTab)
     AdminData.push(profFilsTab)
     AdminData.push(profClassTab)
     res.status(201).json(AdminData) 
    
}

exports.addDept= (req,res) => {
    firestore.collection('Departements').add(req.body)
    .then(() => {
        res.status(201).json({msg: 'Added'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'error'})
    })
}
exports.addFil= (req,res) => {
    firestore.collection('Filieres').add(req.body)
    .then(() => {
        res.status(201).json({msg: 'Added'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'error'})
    })
}
exports.addClasse= (req,res) => {
    firestore.collection('Class').add(req.body)
    .then(() => {
        res.status(201).json({msg: 'Added'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'error'})
    })
}
exports.addModule= (req,res) => {
    firestore.collection('Modules').add(req.body)
    .then(() => {
        res.status(201).json({msg: 'Added'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'error'})
    })
}


exports.updateDept= (req,res) => {
    console.log(req.body)

    firestore.collection('Departements').doc(req.body.id)
    .update({
        alias : req.body.alias,
        id_chefDept : req.body.id_chefDept,
        name: req.body.name
    })
    .then(() => {
        res.status(201).json({msg: 'Added'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'error'})
    })
}
exports.updateFil= (req,res) => {
    firestore.collection('Filieres').doc(req.body.id)
    .update({
        name:req.body.name,
        id_chefFil:req.body.id_chefFil,
        alias: req.body.alias,
        idDept: req.body.idDept
    })
    .then(() => {
        res.status(201).json({msg: 'Added'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'error'})
    })
}
exports.updateClasse= (req,res) => {
    firestore.collection('Class').doc(req.body.id)
    .update({
       
        idFiliere : req.body.idFiliere,
        name: req.body.name
    })
    .then(() => {
        res.status(201).json({msg: 'Added'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'error'})
    })
}
exports.updateModule= (req,res) => {
    firestore.collection('Modules').doc(req.body.id)
    .update({
          name:req.body.name,
          NbHeures: req.body.NbHeures,
          className: req.body.className,
          Semstre_id: req.body.Semster_id,
    })
    .then(() => {
        res.status(201).json({msg: 'Added'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'error'})
    })
}
exports.deleteDept= (req,res) => {
    console.log(req.body)

    firestore.collection('Departements').doc(req.body.id)
    .delete()
    .then(() => {
        res.status(201).json({msg: 'Added'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'error'})
    })
}
exports.deleteFil= (req,res) => {
    firestore.collection('Filieres').doc(req.body.id)
    .delete()
    .then(() => {
        res.status(201).json({msg: 'Added'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'error'})
    })
}
exports.deleteClasse= (req,res) => {
    firestore.collection('Class').doc(req.body.id)
    .delete()
    .then(() => {
        res.status(201).json({msg: 'Added'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'error'})
    })
}
exports.deleteModule= (req,res) => {
    firestore.collection('Modules').doc(req.body.id)
    .delete()
    .then(() => {
        res.status(201).json({msg: 'Added'})
    })
    .catch((err) => {
        res.status(401).json({msg: 'error'})
    })
}

exports.approuveEtu = (req,res) => {
      
      firestore.collection('users').doc(req.body.id)
      .update({
        class: req.body.name
      })
      .then(() => {
              
              res.status(201).json({added: 'added'})
          })
          .catch(err => {
              res.status(401).json({err: 'err'})
          })
}
exports.modifyEtu = (req,res) => {
      
    console.log(req.body)
   firestore.collection('users').doc(req.body.id)
    .update({
      class: req.body.name
    })
    .then(() => {
            
            res.status(201).json({added: 'added'})
        })
        .catch(err => {
            res.status(401).json({err: 'err'})
        })
        

}

exports.deleteEtu = (req,res) => {
   
    let user = firebase.auth().currentUser;
    console.log(user)
  

}

exports.approuveProf= (req,res) => {
   // console.log(req.body)
    firestore.collection('users').doc(req.body.id)
      .update({
        class:'prof'
      })
      .then(async () => {
            let obj
        
       let profsDeptV2= await firestore.collection('DepartProfs').get()  
         let c=0
         profsDeptV2.forEach((pr) => {
             let o=pr.data()
             if(o.idDept==req.body.idDept && o.profEmail== req.body.email){
                 c++
             }
         })

            obj={
                idDept: req.body.idDept,
                profEmail: req.body.email
            }
            console.log('c',c)
       if(c == 0)
       { let profsDept= await firestore.collection('DepartProfs').add(obj)
         }

        obj={
            FiliereName: req.body.nameFil,
            emailProf: req.body.email,
            idFil: req.body.idFil
        }
        let filProfV2= await firestore.collection('FiliereProf').get()  
        let c1=0
        filProfV2.forEach((pr) => {
            let o=pr.data()
            if(o.FiliereName==req.body.nameFil && o.emailProf== req.body.email){
                c1++
            }
        })
        console.log('c1',c1)
        if(c1 == 0){
        let filProf= await firestore.collection('FiliereProf').add(obj)
        }
        obj={
            className: req.body.nameClass,
            emailProf: req.body.email,
            idFil: req.body.idFilClasse,
            idClass: req.body.idClasse
        }

        let classProf= await firestore.collection('ClassProf').add(obj)

        let Mods= await firestore.collection('Modules').doc(req.body.idMod)
        .update({
            emailProf: req.body.email,
        })

                
              res.status(201).json({added: 'added'})
          })
          .catch(err => {
              res.status(401).json({err: 'err'})
          })

}



exports.editProf= (req,res) => {
    console.log(req.body)

    firestore.collection('Modules').doc(req.body.idMod)
    .update({
        emailProf: '',
    })
    .then(async () => {

        let docs= await firestore.collection('ClassProf')
        .where('idClass','==',req.body.idClass)
        .where('emailProf','==',req.body.email)
        .get()
        docs.forEach(doc => {
            doc.ref.delete()
          })
        docs= await firestore.collection('ClassProf')
        .where('emailProf','==',req.body.email)
        .get()
        let c=0
        docs.forEach(doc => {
            c++
          })
          if(c==0){
            firestore.collection('users').doc(req.body.id)
            .update({
              class: null
            })
          }

        res.status(201).json({added: 'added'})

    })
    .catch(err => {

        res.status(401).json({err: 'err'})
    })
}
exports.getChats=(req,res) => {
    firestore.collection('Messages')
    .where('idMod','==',req.params.id)
    .get()
    .then(data => {
    let Msgs=[]
    data.forEach(doc => {
        let obj=doc.data()
        obj.id=doc.id
        Msgs.push(obj)
    });
        res.status(201).json(Msgs)
    })
    .catch(err =>{
        res.status(201).json(err)
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

exports.getUsersForChat = async (req,res) => {

    let doc= await firestore.collection('Modules')
    .doc(req.params.id)
    .get()
        let mods=[]
        let obj=doc.data()
        obj.id=doc.id
        mods.push(obj)

    firestore.collection('users')
    .where('class','==',mods[0].className)
    .get()
    .then(data => {
    let Msgs=[]
    data.forEach(doc => {
        let obj=doc.data()
        obj.id=doc.id
        Msgs.push(obj)
    });
        res.status(201).json(Msgs)
    })
    .catch(err =>{
        res.status(201).json(err)
    })
}
exports.getUsersForChatAdmin = async (req,res) => {
    
    firestore.collection('FriendList')
    .where('idUser','==',req.params.id)
    .get()
    .then(data => {
    let Msgs=[]
    data.forEach(doc => {
        let obj=doc.data()
        obj.id=doc.id
        Msgs.push(obj)
    });
        res.status(201).json(Msgs)
    })
    .catch(err =>{
        res.status(201).json(err)
    })
}
exports.getChatsAdmin = async (req,res) => {
    

        
        let data= await firestore.collection('Messages')
        .where('idFriend','==',req.body.idFriend)
        .where('email','==',req.body.idUser)
        .get()
        let dataU= await firestore.collection('Messages')
        .where('idFriend','==',req.body.idUser)
        .where('email','==',req.body.idFriend)
        .get()
       let Msgs=[]
        dataU.forEach(doc => {
          let obj=doc.data()
          obj.id=doc.id
          Msgs.push(obj)
      });
        data.forEach(doc => {
            let obj=doc.data()
            obj.id=doc.id
            Msgs.push(obj)
        });
        res.status(201).json(Msgs)
    
       
       
    }