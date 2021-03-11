let btn = document.querySelector('.menu-button');
let navigation = document.querySelector('.navigation');

btn.addEventListener( 'click', function () {
	btn.classList.toggle('menu-button-active');
	navigation.classList.toggle('navigation-active');
});