const hero = document.getElementById('header');
const heroBG = document.getElementById('heroBG');
const heroLogo = document.getElementById('Title');

window.addEventListener('scroll', function () {
	hero.style.backgroundSize = 100 + +window.pageYOffset / 8 + '%';
	heroBG.style.opacity = 0 + +window.pageYOffset / 400 + '';
	heroLogo.style.opacity = 1 - +window.pageYOffset / 500 + '';
})

window.addEventListener('scroll', reveal);

function reveal() {
	var reveals = document.querySelectorAll('.reveal');

	for (var i = 0; i < reveals.length; i++) {

		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 150;

		if (revealtop < windowheight - revealpoint) {
			reveals[i].classList.add('active');
		}
		else {
			reveals[i].classList.remove('active');
		}
	}
}