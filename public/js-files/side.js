
//let sideNa=document.getElementById('NavId');

  var li=document.getElementsByClassName('ItemNav');
  var links=document.getElementsByClassName('sideItem');
  var icons=document.getElementsByClassName('Icons');
  var active=0;
  var activelink=0;
  var activeicon=0;

  //console.log("path",window.location.pathname)
 //  var test=document.getElementById('test');
   for(var i=0;i < links.length ;i++){

   links[i].addEventListener('click',(e) => {
   		
      
    /*   if(e.target.lastChild.data=="Actualites"){
       	console.log("testt")
       window.history.pushState('', '', '/acts');
       }    */
      e.preventDefault()
   	/*	switch(e.target.lastChild.data){

   			case 'Home': window.history.pushState('', '', '/homeEtu');
   			case 'Actualites': window.history.pushState('', '', '/acts');
   			case 'Myclass': window.history.pushState('', '', '/Myclass');
   			case 'Support': window.history.pushState('', '', '/support');
   			case 'Contact': window.history.pushState('', '', '#');
   			case 'Hide': ;
   			//default : 
   		}*/
   	
   	

   })
}

  
  /* 
  for( i=0;i < li.length ;i++){

    li[i].addEventListener('click',(e) => {
       console.log('test',e.target);

     active=document.getElementById('active');
  	 if(active != null){
  	 	console.log('00')
     active.id=""
     active.firstChild.id=""
     if( active.firstChild.firstChild != null){
     active.firstChild.firstChild.id=""	
 	}}

 	 
     activelink=document.querySelector('.active10');
     console.log('testtt80',activelink)
     if(activelink != null){
     	console.log('11')
     activelink.parentNode.id=""
     activelink.id=""
     activelink.firstChild.id=""
      }
      
     activeicon=document.querySelector('.active11');
     if(activeicon != null){
     	console.log('22')
     activeicon.parentNode.className.replace(" active10","")
     activeicon.className.replace(" active11","")
     activeicon.parentNode.parentNode.id=""
 		}

 	if(e.target.tagName == "LI"){
 		 console.log('33')
	     e.target.id="active"
	     e.target.firstChild.className+=" active10"
	     e.target.firstChild.firstChild.className+=" active11"    

     }else if(e.target.tagName == "A"){
       	 console.log('44')
       	 e.target.isConnected=true;
     	 e.target.parentNode.id="active"
	     e.target.className+=" active10"
	   //  console.log()
	     e.target.firstChild.className+=" active11"

     }else if(e.target.tagName=='IMG'){
     	console.log('55')
     	e.target.parentNode.className+=" active10"
        e.target.className+=" active11"
        e.target.parentNode.parentNode.id="active"	
     }

    })

  }*/

 /*var active=document.getElementById('active')
    	 active.id=""
	     active.firstChild.firstChild.className.replace(" active11","")

	if(e.target.tagName == "LI"){
 		 console.log('33')
	     e.target.id="active"
	     e.target.firstChild.firstChild.className+=" active11"    

     }else if(e.target.tagName == "A"){
       	 console.log('44')
     	 e.target.parentNode.id="active"
	     e.target.firstChild.className+=" active11"

     }else if(e.target.tagName=='IMG'){
     	console.log('55')
        e.target.className+=" active11"
        e.target.parentNode.parentNode.id="active"	
     }*/