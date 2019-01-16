var button = document.querySelector('button');
button.addEventListener('click', function () {
	document.querySelector('div').classList.toggle('show');
    document.querySelector('div2').classList.toggle('closed')
});