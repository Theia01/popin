var button = document.querySelector('button');
button.addEventListener('click', function () {
<<<<<<< HEAD
	document.querySelector('div').classList.toggle('show');
    document.querySelector('div2').classList.toggle('closed')
});
=======
	document.querySelector('div').classList.toggle('show')
});

var span = document.querySelector('span');
span.addEventListener('click', function(){
	document.querySelector('div').className = '';
})

document.addEventListener('keydown', function(e){
	if(e.keyCode == 27){
		document.querySelector('div').className = '';
	}
})
>>>>>>> 6b8124b5933b7dbdd6c08b4ba06b714aaaf97b3c
