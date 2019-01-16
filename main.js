var button = document.querySelector('button');
button.addEventListener('click', function () {
<<<<<<< HEAD
	document.querySelector('div').classList.toggle('show')
=======
	document.querySelector('div').classList.toggle('show');
    document.querySelector('div2').classList.toggle('closed');
>>>>>>> fc821a89d02615f5438d5000dbe7119786c3142b
});
var span = document.querySelector('span');
span.addEventListener('click', function(){
	document.querySelector('div').className = '';
<<<<<<< HEAD
})
=======
});
>>>>>>> fc821a89d02615f5438d5000dbe7119786c3142b

document.addEventListener('keydown', function(e){
	if(e.keyCode == 27){
		document.querySelector('div').className = '';
	}
<<<<<<< HEAD
})
var input = document.querySelectorAll('input')[1];
input.addEventListener('click', function(){
	document.querySelector('div').className = ''
})
=======
});
>>>>>>> fc821a89d02615f5438d5000dbe7119786c3142b
