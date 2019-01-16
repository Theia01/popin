
var div = document.querySelectorAll('div')[1];
console.log(div)
var button = document.querySelector('button');
button.addEventListener('click', function () {	
	if(div.classList.toggle('show')){
		div.className = 'show';
	}else{
		div.className = 'hidden';
	}
});

var span = document.querySelector('span');
span.addEventListener('click', function(){
	div.className = '';
});

document.addEventListener('keydown', function(e){
	if(e.keyCode == 27){
		div.className = '';
	}
});

var input = document.querySelectorAll('input')[1];
input.addEventListener('click', function(){
	div.className = '';
});

document.querySelectorAll('input')[0].addEventListener("keypress", function(){

	var email = document.querySelectorAll('input')[0].value;
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(re.test(email)){
		console.log("ok");
		document.querySelectorAll('input')[1].disabled = ""
	}})

