"use strict"

const authors = document.querySelector('.authors');
const buttons = authors.querySelectorAll('.img-gallery__button');
const images = authors.querySelectorAll('.authors__img');

authors.addEventListener('click', (e) => {
	let button = e.target.closest('button');
	let activeButton = authors.querySelector('.img-gallery__item_active')
	let activeImage = authors.querySelector('.authors__img_active');
	if (button != null) {
		for (let x = 0; x < 3; x++) {
			if (button == buttons[x]) {
				activeImage.classList.remove('authors__img_active');
				images[x].classList.add('authors__img_active');
				activeButton.classList.remove('img-gallery__item_active');
				buttons[x].parentNode.classList.add('img-gallery__item_active');
			}
		}
	}
})