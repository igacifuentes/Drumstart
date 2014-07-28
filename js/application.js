
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
			aud[0]=new Audio('sounds/hit-hat.ogg');
			break;
		case 1:
			aud[1]=new Audio('sounds/ride.ogg');
			break;
		}
	}
