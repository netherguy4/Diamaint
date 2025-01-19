"use strict"

const header = document.querySelector(".header");
const nav = header.querySelectorAll(".navigation__button_active, .navigation__button");
const navDeco = header.querySelector(".navigation__active-element");
let lastKnownScrollPosition = 0;
let setTimeoutId = null;


header.addEventListener('click', (e) => {
	let button = e.target.closest('button');
	if (button != null && button.classList.contains('navigation__button')) {
		navClick(button);
	} else if (button != null && button.classList.contains('header__logo')) {
		navClick(nav[0]);
	}
})

document.addEventListener("scroll", scrollListener);

document.querySelector('.about__button').addEventListener('click', () => {
	navClick(nav[1]);
})

function scrollListener() {
	let scrollBy = [
		document.querySelector('.about').getBoundingClientRect().y - 300,
		document.querySelector('.catalogue__title').getBoundingClientRect().y - 300,
		document.querySelector('.slider-special__title').getBoundingClientRect().y - 300,
		document.querySelector('.hero__title').getBoundingClientRect().y - 300,
		document.querySelector('.authors__title').getBoundingClientRect().y - 300
	];
	for (let x = scrollBy.length; x > 0; x--) {
		if (scrollBy[x] <= 0) {
			navClick(nav[x], 1);
			break;
		} else navClick(nav[0], 1);
	}
	lastKnownScrollPosition = window.scrollY;
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
		document.querySelector('.about').getBoundingClientRect().y - 100,
		document.querySelector('.catalogue__title').getBoundingClientRect().y - 100,
		document.querySelector('.slider-special__title').getBoundingClientRect().y - 100,
		document.querySelector('.hero__title').getBoundingClientRect().y - 100,
		document.querySelector('.authors__title').getBoundingClientRect().y - 100
	];
	let oldButton = header.querySelector(".navigation__button_active");
	let newButton = button;
	if (!noscroll) document.removeEventListener("scroll", scrollListener);
	if (!noscroll) clearTimeout(setTimeoutId);
	oldButton.classList.remove('navigation__button_active');
	newButton.classList.add('navigation__button_active');
	for (let x = 0; x < scrollBy.length; x++) {
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
	if (!noscroll) {
		setTimeoutId = setTimeout(() => {
			document.addEventListener("scroll", scrollListener);
		}, '1000');
	}
}