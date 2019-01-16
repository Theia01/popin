
var div = document.querySelectorAll('div')[1];
var button = document.querySelector('button');
button.addEventListener('click', function () {	
	if(div.className == 'hidden'){
		div.className = 'show';
	}else{
		div.className = 'hidden';
	}
});

var span = document.querySelector('span');
span.addEventListener('click', function(){
	div.className = 'hidden';
});

document.addEventListener('keydown', function(e){
	if(e.keyCode == 27){
		div.className = 'hidden';
	}
});

var input = document.querySelectorAll('input')[1];
input.addEventListener('click', function(){
	div.className = 'hidden';
});

document.querySelectorAll('input')[0].addEventListener("keypress", function(){
	var email = document.querySelectorAll('input')[0].value;
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(re.test(email)){
		console.log("ok");
		document.querySelectorAll('input')[1].disabled = ""
		document.querySelectorAll('input')[1].className = "vbtn"
	}
	})

