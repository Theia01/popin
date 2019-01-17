
var div = document.querySelectorAll('div')[1];
var button = document.querySelector('button');

//quand on click sur le bouton recevoir peluche
button.addEventListener('click', function () {	
	if(div.className == 'hidden'){
		document.querySelectorAll('div')[0].className = "open";
		hiddenP();
		div.className = 'show';

	}else{
		showP();
		document.querySelectorAll('div')[0].className = "closed";
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

//pour la croix X
var span = document.querySelector('span');
span.addEventListener('click', function(){
	showP();
	document.querySelectorAll('div')[0].className = "close";
	div.className = 'hidden';
});

//pour le bouton echap
document.addEventListener('keydown', function(e){
	if(e.keyCode == 27){
		showP()
    	document.querySelectorAll('div')[0].className = "close";
		div.className = 'hidden';
	}
});


//permet d'activer ou non le bouton submit selon email
document.querySelectorAll('input')[0].addEventListener("keypress", function(){
	var email = document.querySelectorAll('input')[0].value;
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,4})+$/;
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
    div.className = 'hidden';
	var p = document.createElement('p');
	var texte = document.createTextNode('Votre demande a bien été prise en compte');
	p.appendChild(texte);
	document.body.querySelectorAll('div')[0].append(p)
	document.querySelectorAll('div')[0].className = "close";
	button.className = 'btn';
	showP();
});

//fonction balise p pour qu'elles'affiche ou non
function hiddenP(){
	for(i = 0; i<document.querySelectorAll('p').length; i++){
		document.querySelectorAll('p')[i].className = "text_off";
	}
}
function showP(){
	for(i = 0; i<document.querySelectorAll('p').length; i++){
		document.querySelectorAll('p')[i].className = "";
	}
}