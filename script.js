var profileimage = document.querySelector('#profileimage'),
	body = document.querySelector('body');
	
setTimeout(function() {
	profileimage.className = 'open first';
	setTimeout(function() {
		body.className = 'frosted';

		setTimeout(function() {
			body.className = '';
			profileimage.className = '';
		}, 350);
	}, 1000);
}, 30);

//

function openEl(el) {
  el.className = 'open';
}

function closeEl(el) {
  el.className = '';
}