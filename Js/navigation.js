"use strict"
// variables
const main = document.querySelector('.main');
const header = document.querySelector(".header");
const nav = header.querySelectorAll(".navigation__button_active, .navigation__button");
const altNav = document.querySelectorAll(".sidebar__button");
const navDeco = header.querySelector(".navigation__active-element");
const burger = document.querySelector('.header__burger');
const sidebar = document.querySelector('.sidebar');
let ticking = false;
let setTimeoutId = null;
let decoStyle = window.getComputedStyle(navDeco);

// on page reload
burger.addEventListener('click', () => {
	burger.classList.toggle('_active');
	sidebar.classList.toggle('_active');
	header.classList.toggle('_active');
	document.body.classList.toggle('_locked');
})

sidebar.addEventListener('click', (e) => {
	let button = e.target.closest('button');
	if (button != null && button.classList.contains('sidebar__button')) {
		for (let x = 0; x < altNav.length; x++) {
			if (button == altNav[x]) {
				navClick(nav[x]);
				hideSidebar();
			}
		}
	}
})

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

// functions
function scrollListener() {
	if (!ticking && decoStyle.display != 'none') {
		window.requestAnimationFrame(() => {
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
			ticking = false;
		});
		ticking = true;
	}
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
		if (oldButton == nav[x] && decoStyle.display != 'none') {
			navDeco.classList.remove(classes[x]);
		}
		if (newButton == nav[x]) {
			if (decoStyle.display != 'none') {
				navDeco.classList.add(classes[x]);
			}
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

function hideSidebar() {
	burger.classList.remove('_active');
	sidebar.classList.remove('_active');
	header.classList.remove('_active');
	document.body.classList.remove('_locked');
}