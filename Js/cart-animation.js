"use strict"

const shoppingCart = header.querySelector(".header__shopping-cart-img");
const products = document.querySelectorAll(".product__button, .product-special__button");
const cartNumber = shoppingCart.parentNode.style;
let productsInCart = 0;

products.forEach((button) => {
	button.addEventListener('click', () => {
		animateCart();
		productsInCart++;
		cartNumber.setProperty('--number', "\'" + productsInCart + "\'");
	})
})

function animateCart() {
	shoppingCart.classList.add('header__shopping-cart-img_active');
	setTimeout((e) => {
		shoppingCart.classList.remove('header__shopping-cart-img_active');
	}, '1000');
}