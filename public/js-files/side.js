
//let sideNa=document.getElementById('NavId');

  var li=document.getElementsByClassName('ItemNav');
  var links=document.getElementsByClassName('sideItem');
  var icons=document.getElementsByClassName('Icons');
  var active=0;
  var activelink=0;
  var activeicon=0;
  
  for(var i=0;i < li.length ;i++){

    li[i].addEventListener('click',(e) => {
       console.log('test',e.target);
     active=document.getElementById('active');
  	 if(active != null){
     active.id=""
     active.firstChild.id=""
     if( active.firstChild.firstChild != null){
     active.firstChild.firstChild.id=""	
 	}}

 	 
     activelink=document.getElementById('activelink');
     if(activelink != null){
     activelink.parentNode.id=""
     activelink.id=""
     activelink.firstChild.id=""
      }
      
     activeicon=document.getElementById('activeicon');
     if(activeicon != null){
     activeicon.parentNode.id=""
     activeicon.id=""
     activeicon.parentNode.parentNode.id=""
 		}
 	if(e.target.tagName == "LI"){
	     e.target.id="active"
	     e.target.firstChild.id="activelink"
	     e.target.firstChild.firstChild.id="activeicon"     

     }else if(e.target.tagName == "A"){
     	 e.target.parentNode.id="active"
	     e.target.id="activelink"
	     e.target.firstChild.id="activeicon" 

     }else if(e.target.tagName=='IMG'){
     	e.target.parentNode.id="activelink"
        e.target.id="activeicon"
        e.target.parentNode.parentNode.id="active"	
     }

    })

  }

