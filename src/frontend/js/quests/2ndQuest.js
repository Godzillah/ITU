var videoID = document.getElementById("videoID"); 
var lavoB = document.getElementById("lavoB"); 
var pravoB = document.getElementById("pravoB");
var stredB = document.getElementById("stredB");
var source = document.getElementById("mp4") ;

var majstro = document.getElementById("majstro") ;

var stiholBus = false ;
var vyhral = false ;

pravoB.innerHTML = " Cesta na zastavku";
lavoB.innerHTML = " Cesta na FEKT/ FSI VUT ";
stredB.innerHTML = "Chyt autobus";


pravoB.style.visibility = 'hidden';
lavoB.style.visibility = 'hidden';
stredB.style.visibility = 'hidden';



var lvl = 1; 


function sputstiVideo() {
    lvl = 1;
    // odbocim dolava na FEKT alebo v pravo na FIT
    pravoB.innerHTML = " Cesta na zastavku";
    lavoB.innerHTML = " Cesta na FEKT/ FSI VUT ";
    stredB.innerHTML = "Chyt autobus";
    pravoB.style.visibility = 'visible';
    lavoB.style.visibility = 'visible';
    stredB.style.visibility = 'hidden';
    stiholBus = false ;
    source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/c.mp4");
    videoID.load();
    videoID.play();
}

    videoID.addEventListener('ended',myHandler,false);
    function myHandler(e) {
        if(lvl != 812 && lvl != 62 && lvl !=1){
           pravoB.style.visibility = 'hidden';
            lavoB.style.visibility = 'hidden';
            stredB.style.visibility = 'hidden';         
        }

       if(lvl == 22){
           lvl = 32;
            source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cBc.mp4");
            videoID.load(); 
            videoID.play();           
       }
       else if(lvl == 32){
           lvl = 42;
            source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cBcc.mp4");
            videoID.load(); 
            videoID.play();           
       }
       else if(lvl == 42){
           lvl = 52;
            source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cBccc.mp4");
            videoID.load(); 
            videoID.play();           
       }
       else if(lvl == 52){
           lvl = 62;
           // v lavo zastavka v pravo FSI
           lavoB.innerHTML = " Cesta na zastavku";
           pravoB.innerHTML = " vstup na FSI ";
           pravoB.style.visibility = 'visible';
           lavoB.style.visibility = 'visible';
           
            source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cBcccc.mp4");
            videoID.load(); 
            videoID.play();           
       }
       else if(lvl == 21){
           lvl = 31;
            source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cAc.mp4");
            videoID.load(); 
            videoID.play();           
       }
        
        else   if(lvl == 31){
           lvl = 41;
            source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cAcc.mp4");
            videoID.load(); 
            videoID.play();
            stredB.style.visibility = 'visible';
       }
        else if(lvl == 41 && (!stiholBus)){
            //wasted
            stredB.style.visibility = 'hidden';
            
            lvl = 31;
            source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cAcB.mp4");
            videoID.load(); 
            videoID.play();
            
        }
        else if(lvl == 41 && stiholBus){
            stredB.style.visibility = 'hidden';
            //alert("hra pokracuje");
            lvl = 51;
            source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cBAc.mp4");
            videoID.load(); 
            videoID.play()
        }
        
        else if(lvl == 51 ){
            
            
            lvl = 612;
            source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cAccc.mp4");
            videoID.load(); 
            videoID.play()
        }
        else if(lvl == 612 ){
            
            
            lvl = 712;
            source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cAcccc.mp4");
            videoID.load(); 
            videoID.play()
        }
        else if(lvl == 712 ){
            
            
            lvl = 812;
            pravoB.style.visibility = 'visible';
            lavoB.style.visibility = 'visible';
            pravoB.innerHTML = " Nova budova";
            lavoB.innerHTML = " Stara budova ";
            // v lavo FIT kastiel v pravo FIT ISIC 
            source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cAccccc.mp4");
            videoID.load(); 
            videoID.play()
        }
    }


function dolava() {
    pravoB.style.visibility = 'hidden';
    lavoB.style.visibility = 'hidden';
    stredB.style.visibility = 'hidden';

  // alert("lavo");
    //ides smer FEKT
    if(lvl == 1){
        lvl = 22;
        source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cB.mp4");
        videoID.load(); 
        videoID.play(); 
    }
    else if(lvl == 812 ){
            
         //wasted 
        
        lvl = 912;
        source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/AAAAB.mp4");
        videoID.load(); 
        videoID.play();
        alert("Wasted");
    }
    else if(lvl == 62 ){
            
            
        lvl = 41;
        stiholBus = true; 
        source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cBA.mp4");
        videoID.load(); 
        videoID.play();
        
    }

    
}
function doprava() {
    pravoB.style.visibility = 'hidden';
    lavoB.style.visibility = 'hidden';
    stredB.style.visibility = 'hidden';
    //alert("doprava called"); 
    if(lvl == 1){
        lvl = 21;
        source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cA.mp4");
        videoID.load(); 
        videoID.play(); 
    }
    else if(lvl == 812 ){
            
          //vyhral  
        lvl = 913;
        source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cAA.mp4");
        videoID.load(); 
        videoID.play();
        vyhral = true ; 
        alert("vyhral");
    }
    else if(lvl == 62 ){
            
           
        lvl = 722;
        source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cBB.mp4");
        videoID.load(); 
        videoID.play();
        alert("wasted");
        
    }
}
function dostredu() {
    alert(lvl);
     if(lvl == 41){
        stiholBus = true ;
         stredB.style.visibility = 'hidden';
        lvl = 51;
        source.setAttribute("src", "/~xorsak02/ITU/src/frontend/videos/cBAc.mp4");
        videoID.load(); 
        videoID.play(); 
     }
     
    
}


