var button = document.querySelector('button');
console.log('ok')
button.addEventListener('click', function () {	
	document.querySelector('div').classList.toggle('show');
});

var span = document.querySelector('span');
span.addEventListener('click', function(){
	document.querySelector('div').className = '';
});

document.addEventListener('keydown', function(e){
	if(e.keyCode == 27){
		document.querySelector('div').className = '';
	}
});

var input = document.querySelectorAll('input')[1];
input.addEventListener('click', function(){
	document.querySelector('div').className = '';
});

document.querySelectorAll('input')[0].addEventListener("keypress", function(){
	var email = document.querySelectorAll('input')[0].value;
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(re.test(email)){
		document.querySelectorAll('input')[1].disabled = ""
	}})

