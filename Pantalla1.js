
var parpadeo2= 1;



var fechaparpadeo2= function(){ 
    
    var parpadeointervalo2=setInterval(function(){
           
        
        if(parpadeo2==1){
             $('.playy').css({"opacity":"0.5"});
            parpadeo2=2;
            
        }else if(parpadeo2==2){
            $('.playy').css({"opacity":"1"});
            parpadeo2=1;
        }
          $('.playy').click(function(){    
                   $('.playy').css({"opacity":"1"});         
             clearInterval(parpadeointervalo2); 
             
                                      });
    
        
        },500);
        
    }

fechaparpadeo2();


$('.Btninicio').click(function(){
    
    $('.ModalInicio').remove();        
    //pista de fondo
     $('body').append('<audio class="audio" src="pantalla1.mp3" ></audio>')
        $('.audio').get(0).play()
    
    //video de mapache inicio
             $('.Pesonaje').append('<video    class="Cvideo" src="morado.mp4" poster="blanco.jpg"></video>');
    
   $('.Cvideo').get(0).play()
    
     $(document).ready(function(){
  $('.Cvideo').on('ended', function(){
     $('.Cvideo').get(0).play()  
  });
});
    //fin de video mapache inicio
    
////////////////////////////////////////
      
    //video de mujer inicio
             $('.mujerespacio').append('<video    class="Cvideo mujer" src="mujerP1.mp4" poster="blanco.jpg"></video>');
    
   $('.mujer').get(0).play()
    
     $(document).ready(function(){
  $('.mujer').on('ended', function(){
     $('.mujer').get(0).play()  
  });
});
    
    /////////////////////////////////////////////////
    
     //video de mujer inicio
             $('.mapache').append('<video    class="Cvideo tiburon" src="tiburonP1.mp4" poster="blanco.jpg"></video>');
    
   $('.tiburon').get(0).play()
    
     $(document).ready(function(){
  $('.tiburon').on('ended', function(){
     $('.tiburon').get(0).play()  
  });
});
         })
            