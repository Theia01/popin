var button = document.querySelector('button');
button.addEventListener('click', function () {
	document.querySelector('div').classList.toggle('show')
});

var span = document.querySelector('span')
span.addEventListener('click', function(e){
	document.querySelector('div').className("")
})