const firebase=require('../../FireConfig')
const auth=firebase.auth()
const firestore=firebase.firestore()
const Users=firestore.collection('users')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

exports.Register = (req, res) => {
   
    auth.createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then(user => {
        firebase.auth().onAuthStateChanged((user) => {
            addUser(req.body,user.uid);
          });

      user.user.updateProfile({
        displayName: req.body.type,
        photoURL: req.body.class

      }).then(() => {
        let tokenData={
            userId: user.user.uid,
            userEmail: user.user.email,
            type: user.user.displayName,
            class: user.user.phoneNumber
        }  
          res.status(201).json({
            user:user.user,
            Token:jwt.sign(tokenData,'RANDOM_TOKEN_SECRET',{ expiresIn: 604800 })
        })
      })
      .catch((err) => {
          res.status(401).json({err})
      })
         
    })
    .catch(err => {

        res.status(401).json({err})
    })

const addUser = (data,id) =>{
    bcrypt.hash(data.password,10)
    .then(hash => {
        data.password=hash;
        Users.doc(id).set(data)
        .then(res => {
            //res.status(201).json({responseFire})
        })
        .catch(err => {
            res.status(401).json({err: 'firestore error'})
        })
    })
    .catch(err => {
        res.status(401).json({err: 'hashing error'})
    })
}

}
/***************** Login  ****************/

exports.Login= (req,res) => {
  
    auth.signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(user => {
        let tokenData={
            userId: user.user.uid,
            userEmail: user.user.email,
            type: user.user.displayName,
            class: user.user.photoURL
        }  
        let Token= jwt.sign(tokenData,'RANDOM_TOKEN_SECRET',{ expiresIn: '1h' })
        res.status(201).json({
            user:user.user,
            Token
        })
    })
    .catch(err => {
        res.status(401).json({err})
    })


}


exports.deconnecter = (req,res) => {
   
  auth.signOut()
  .then(() => {
  
      res.status(201).json({deconncted})
  })
  .catch(err => {
   res.status(201).json({err})
  })
  
  
}
