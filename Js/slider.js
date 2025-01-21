"use strict"

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	grabCursor: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		slideChange: function (swiper) {
			const sliderDescription = document.querySelectorAll('.slider-special__slider-description');
			let activeDescription = document.querySelector('.slider-special__slider-description._active');
			if (activeDescription) {
				activeDescription.classList.remove('_active');
			}
			activeDescription = sliderDescription[swiper.activeIndex];
			activeDescription.classList.add('_active');
		}
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
});