"use strict"

let paused = document.querySelectorAll('.paused');

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.remove("paused");
				observer.unobserve(entry.target);
			}
		})
	},
	{
		threshold: 0.2,
	})

paused.forEach(element => {
	observer.observe(element);
})