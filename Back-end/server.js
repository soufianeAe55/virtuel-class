const http=require('http')
const multer = require('multer');
const app= require('./app.js')
const server=http.createServer(app);
const firebase=require('./FireConfig')
const firestore=firebase.firestore()
const io=require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  })
const ChatFileMidll=require('./Middlerwares/ChatFileMiddl') 
server.listen(8000);


 io.on('connection', async (soc)=>{

  app.post('/api/sendPics',ChatFileMidll,async (req,res,next)=>{
  
    let Msgs=[]
    if(req.body.mode != 'forContact'){

     if(req.body.type=='image' || req.body.type=='docx' ||req.body.type=='pdf' )
    firestore.collection('Messages').add(req.body)
    let data= await firestore.collection('Messages')
      .where('idMod','==',req.body.idMod)
      .get()
     
      data.forEach(doc => {
          let obj=doc.data()  
          obj.id=doc.id
          Msgs.push(obj)
      });
     
    
    }else{

        let Msgs2=[]
       // console.log(req.body.idFriend,req.body.email)
        let data2= await firestore.collection('FriendList')
        .where('idUser','==',req.body.idFriend)
        .where('idFriend','==',req.body.email)
        .get()
       
        data2.forEach(doc => {
            let obj=doc.data()
            obj.id=doc.id
            Msgs2.push(obj)
        });
        if(Msgs2.length == 0 ){
          firestore.collection('FriendList').add({
            idUser: req.body.idFriend,
            idFriend: req.body.email
          })
        }else{
          console.log('exist')
        }

  

        let data= await firestore.collection('Messages')
        .where('idFriend','==',req.body.idFriend)
        .where('email','==',req.body.email)
        .get()
        let dataU= await firestore.collection('Messages')
        .where('idFriend','==',req.body.email)
        .where('email','==',req.body.idFriend)
        .get()
       
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
      

    }
    soc.broadcast.emit('messagesData',Msgs)
    soc.emit('messagesData',Msgs)
    next()
  })


    soc.on('message',async (dataV2)=>{

      if(dataV2.type == 'text'){
       
      firestore.collection('Messages').add(dataV2)
       
       let Msgs=[]

        if(dataV2.mode != 'forContact'){

       let data= await firestore.collection('Messages')
        .where('idMod','==',dataV2.idMod)
        .get()
       
        data.forEach(doc => {
            let obj=doc.data()
            obj.id=doc.id
            Msgs.push(obj)
        });
      }else{

        let Msgs2=[]
        let data2= await firestore.collection('FriendList')
        .where('idUser','==',dataV2.idFriend)
        .where('idFriend','==',dataV2.email)
        .get()
       
        data2.forEach(doc => {
            let obj=doc.data()
            obj.id=doc.id
            Msgs2.push(obj)
        });
        if(Msgs2.length == 0 ){
          firestore.collection('FriendList').add({
            idUser: dataV2.idFriend,
            idFriend: dataV2.email
          })
        }else{
          console.log('exist')
        }

  

        let data= await firestore.collection('Messages')
        .where('idFriend','==',dataV2.idFriend)
        .where('email','==',dataV2.email)
        .get()
        let dataU= await firestore.collection('Messages')
        .where('idFriend','==',dataV2.email)
        .where('email','==',dataV2.idFriend)
        .get()
       
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
      }
        
        soc.broadcast.emit('messagesData',Msgs)
        soc.emit('messagesData',Msgs)
      }
     })


 })