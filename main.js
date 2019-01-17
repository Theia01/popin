
var div = document.querySelectorAll('div')[1];
var button = document.querySelector('button');

//quand on click sur le bouton recevoir peluche
button.addEventListener('click', function () {	
	if(div.className == 'hidden'){
		div.className = 'show';
	}else{
		div.className = 'hidden';
	}
});

//transforme le bouton lors de la pop in
document.addEventListener('click', function () {
    if(div.className == 'show'){
        button.className = 'btnclosed';
    }else{
        button.className = 'btn';
    }
});


document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        button.className = 'btn';
    }else{
    	button.className = 'btnclosed';
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
	var p = document.createElement('p');
	var texte = document.createTextNode('Votre demande a bien été prise en compte');
	p.appendChild(texte);
	document.body.append(p)
});

//permet d'activer ou non le bouton selon email
document.querySelectorAll('input')[0].addEventListener("keypress", function(){
	var email = document.querySelectorAll('input')[0].value;
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(re.test(email)){
		document.querySelectorAll('input')[1].disabled = "";
		document.querySelectorAll('input')[1].className = "vbtn"
	}else{
		document.querySelectorAll('input')[1].disabled = "disabled";
		document.querySelectorAll('input')[1].className = "vbtndbld"
	}
	});

document.addEventListener('submit', function(e) {
    e.preventDefault();
});

