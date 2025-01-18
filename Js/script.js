"use strict"

const header = document.querySelector(".header");
const nav = header.querySelectorAll(".navigation__button_active, .navigation__button");
const navDeco = header.querySelector(".navigation__active-element");
const shoppingCart = header.querySelector(".header__shopping-cart-img");
let lastKnownScrollPosition = 0;


header.addEventListener('click', (e) => {
	let button = e.target.closest('button');
	if (button != null && button.classList.contains('navigation__button')) {
		navClick(button);
	} else if (button != null && button.classList.contains('header__logo')) {
		navClick(nav[0]);
	}
})

document.addEventListener("scroll", () => {
	if (!header.classList.contains('header_hidden') && lastKnownScrollPosition < window.scrollY) {
		header.classList.add('header_hidden');
	} else if (header.classList.contains('header_hidden') && lastKnownScrollPosition > window.scrollY) {
		header.classList.remove('header_hidden');
	} else null;
	lastKnownScrollPosition = window.scrollY;
});

document.querySelector('.about__button').addEventListener('click', () => {
	navClick(nav[1]);
})

function animateCart() {
	shoppingCart.classList.add('header__shopping-cart-img_active');
	setTimeout((e) => {
		shoppingCart.classList.remove('header__shopping-cart-img_active');
	}, '1000');
}

function navClick(button, noscroll) {
	let classes = [
		"navigation__active-element_about",
		"navigation__active-element_catalogue",
		"navigation__active-element_special",
		"navigation__active-element_useful",
		"navigation__active-element_authors"
	];
	let scrollBy = [
		document.querySelector('.about').getBoundingClientRect().y - 300,
		document.querySelector('.catalogue__title').getBoundingClientRect().y - 300,
		document.querySelector('.slider-special__title').getBoundingClientRect().y - 150,
		document.querySelector('.hero__title').getBoundingClientRect().y - 100,
		document.querySelector('.authors__title').getBoundingClientRect().y - 150
	];
	let oldButton = header.querySelector(".navigation__button_active");
	let newButton = button;
	oldButton.classList.remove('navigation__button_active');
	newButton.classList.add('navigation__button_active');
	for (let x = 0; x < 5; x++) {
		if (oldButton == nav[x]) {
			navDeco.classList.remove(classes[x]);
		}
		if (newButton == nav[x]) {
			navDeco.classList.add(classes[x]);
			if (!noscroll) {
				window.scrollBy({
					top: scrollBy[x],
					behavior: "smooth",
				})
			};
		}
	}
}