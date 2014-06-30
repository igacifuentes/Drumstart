var audio=[];
audio[0]=new Audio('sounds/hit-hat.mp3');
audio[1]=new Audio('sounds/snare.mp3');
audio[2]=new Audio('sounds/ride.mp3');
audio[3]=new Audio('sounds/hit-hat-close.mp3');
audio[4]=new Audio('sounds/base-drum.mp3');
audio[5]=new Audio('sounds/tom-floor.mp3');
audio[6]=new Audio('sounds/tom-1.mp3');
audio[7]=new Audio('sounds/tom-2.mp3');
audio[8]=new Audio('sounds/crash-1.mp3');
audio[9]=new Audio('sounds/crash-2.mp3');
var aud=new Audio('sounds/bateria.mp3');

$(document).ready(function(){

var accion= $('#hit-hat');
accion.on('click',function (){
Concurrent.Thread.create(play, 0);	
});
var accion= $('#snare');
accion.on('click',function (){
Concurrent.Thread.create(play, 1);	
});
var accion= $('#ride');
accion.on('click',function (){
Concurrent.Thread.create(play, 2);	
});
var accion= $('#hit-hat-close');
accion.on('click',function (){
Concurrent.Thread.create(play, 3);	
});
var accion= $('#base-drum');
accion.on('click',function (){
Concurrent.Thread.create(play, 4);	
});
var accion= $('#tom-floor');
accion.on('click',function (){
Concurrent.Thread.create(play, 5);	
});
var accion= $('#tom-1');
accion.on('click',function (){
Concurrent.Thread.create(play, 6);	
});
var accion= $('#tom-2');
accion.on('click',function (){
Concurrent.Thread.create(play, 7);	
});
var accion= $('#crash-1');
accion.on('click',function (){
Concurrent.Thread.create(play, 8);	
});
var accion= $('#crash-2');
accion.on('click',function (){
Concurrent.Thread.create(play, 9);	
});

});

function play ( i ){
var aux=i;
while (i>=aux) {
recargar(aux);
audio[i].play();
aux++;
        }
}

function recargar(i){
switch(i){
case 0:
audio[0]=new Audio('sounds/hit-hat.mp3');
break;
case 1:
audio[1]=new Audio('sounds/snare.mp3');
break;
case 2:
audio[2]=new Audio('sounds/ride.mp3');
break;
case 3:
audio[3]=new Audio('sounds/hit-hat-close.mp3');
break;
case 4:
audio[4]=new Audio('sounds/base-drum.mp3');
break;
case 5:
audio[5]=new Audio('sounds/tom-floor.mp3');
break;
case 6:
audio[6]=new Audio('sounds/tom-1.mp3');
break;
case 7:
audio[7]=new Audio('sounds/tom-2.mp3');
break;
case 8:
audio[8]=new Audio('sounds/crash-1.mp3');
break;
case 9:
audio[9]=new Audio('sounds/crash-2.mp3');
break;

}
}

function iniciarSong(){
aud.loop = true;
aud.play();
$('#animationSandbox1').removeClass().addClass('rollIn' + ' animated').
one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
       $(this).removeClass();
     });

     $('#animationSandbox2').removeClass().addClass('fadeInLeftBig' + ' animated').
one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationendanimationend',function(){
       $(this).removeClass();
    });

     $('#animationSandbox3').removeClass().addClass('rotateInUpLeft' + ' animated').
one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
       $(this).removeClass();
     });
}

function detenerSong(){

aud.pause();
aud.currentTime = 0;
}
