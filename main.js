var button = document.querySelector('button');
console.log('ok')
button.addEventListener('click', function () {	
	document.querySelector('div').classList.toggle('show');
    document.querySelector('div2').classList.toggle('closed');
});

var span = document.querySelector('span');
span.addEventListener('click', function(){
	document.querySelector('div').className = '';
});

document.addEventListener('keydown', function(e){
	if(e.keyCode == 27){
		document.querySelector('div').className = '';
	}
})

var input = document.querySelectorAll('input')[1];
input.addEventListener('click', function(){
	document.querySelector('div').className = '';
});
