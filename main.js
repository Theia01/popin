var button = document.querySelector('button');
button.addEventListener('click', function () {
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