let productsCountElement = document.getElementById("products-count");

console.log(productsCountElement);


// https://github.com/Sergii92/sergii92.github.io

let addToCartButtons = document.querySelectorAll(".add_to_cart")

console.log(addToCartButtons);

for(let i=0;i< addToCartButtons.length;i++) {
	addToCartButtons[i].addEventListener("click", function () {
		// console.log("clicked")
		let prevProductsCount = +productsCountElement.textContent;
		productsCountElement.textContent = prevProductsCount + 1;
	})
}


// let productsLikeEl = document.getElementById("like-product");

// console.log(productsLikeEl);

// let likeButtons = document.querySelectorAll(".like-img")

// console.log(likeButtons);

// for(let i=0; i< likeButtons.length; i++) {

// 	likeButtons[i].addEventListener("click", )
// }




//toggle like state

// let likeButtons = document.querySelectorAll(".like-img");

// console.log(likeButtons);

// for(let i=0; i< likeButtons.length; i++) {

// likeButtons[i].addEventListener("click",function () {
// 	// console.log("clicked")

// 	if (likeButtons[i].classList.contains("liked")) {
// 		likeButtons[i].classList.remove("liked")
// 	} else {
// 		likeButtons[i].classList.add("liked")
// 	}
// } )

// }

//через toggle

let likeButtons = document.querySelectorAll(".like-img");

for(let i=0; i< likeButtons.length; i++) {

likeButtons[i].addEventListener("click",function () {
	likeButtons[i].classList.toggle("liked");
})
}


$('.slider-items').slick({
	dots:true,
	autoplay:true,
	autoplaySpeed:2000,
})