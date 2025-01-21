"use strict"

const shoppingCart = document.querySelector(".header__shopping-cart-img");
const products = document.querySelectorAll("[data-price]");
const cartNumber = shoppingCart.parentElement.style;
let productsInCart = 0;
let animation = false;

products.forEach((button) => {
	button.addEventListener('click', (e) => {
		animateCart();
		showPopup(e.target);
	})
})

function animateCart() {
	productsInCart++;
	cartNumber.setProperty('--number', "\'" + productsInCart + "\'");
	if (!animation) {
		animation = true;
		shoppingCart.classList.add('header__shopping-cart-img_active');
		setTimeout((e) => {
			shoppingCart.classList.remove('header__shopping-cart-img_active');
			animation = false;
		}, '1000');
	}
}

function showPopup(product) {
	const popupWrapper = document.querySelector(".popup__wrapper");
	const div = document.createElement('div');
	div.classList.add('popup__item');
	product.dataset.bundle == 'yes' ? div.innerText = `Набор \"${product.dataset.name}\" был добавлен в корзину!` : div.innerText = `Товар \"${product.dataset.name}\" был добавлен в корзину!`;
	popupWrapper.appendChild(div);
}