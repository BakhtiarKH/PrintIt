const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let selecteur = 0

const arrowleft = document.querySelector('.arrow_left')
const arrowright = document.querySelector('.arrow_right')

arrowleft.addEventListener('click', function() {

	document.querySelector('.dot_selected').className = 'dot'+(selecteur)

	if (selecteur > 0) {
		selecteur --;
	}
	else {
		selecteur = 3
	}
	document.querySelector('.banner-img').src = './assets/images/slideshow/' + slides[selecteur].image
	document.querySelector('.banner-description').innerHTML = slides[selecteur].tagLine
	document.querySelector('.dot'+selecteur).className = 'dot_selected'
})

arrowright.addEventListener('click', function() {

	document.querySelector('.dot_selected').className = 'dot'+(selecteur)

	if (selecteur < 3) {
		selecteur ++;
	}
	else {
		selecteur = 0
	}
	document.querySelector('.banner-img').src = './assets/images/slideshow/' + slides[selecteur].image
	document.querySelector('.banner-description').innerHTML = slides[selecteur].tagLine
	document.querySelector('.dot'+selecteur).className = 'dot_selected'
})

