"use strict"

const mapButton = document.querySelector('.footer__adress-link_map');
const map = document.querySelector('.footer__map');

mapButton.addEventListener('click', (e) => {
	e.preventDefault();
	map.classList.toggle('_active');
})