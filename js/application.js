	// custom code goes here
	var aud=new Audio('sounds/bateria.mp3');
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
	
	function playInit( i ){
	var aux=i;
	while (i>=aux) {
			recargarInit(aux);
			aud[i].play();
			aux++;
        }
	}

	function recargarInit(i){
		switch(i){
		case 0:
			aud[0]=new Audio('sounds/hit-hat.mp3');
			break;
		case 1:
			aud[1]=new Audio('sounds/ride.mp3');
			break;
		}
	}
