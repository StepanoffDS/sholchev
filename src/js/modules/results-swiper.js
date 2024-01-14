import Swiper from 'swiper'
import { Navigation, EffectCards, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'

function resultsSwiper() {
	const swiper = new Swiper('.results__swiper', {
		modules: [Navigation, EffectCards, Pagination],
		effect: 'cards',
		grabCursor: true,
		// loop: true,
		cardsEffect: {
			perSlideOffset: 6, // Space between cards in px
			perSlideRotate: 0, // Rotation of cards in degrees
			rotate: 1, // Rotation of swiper in degrees
			slideShadows: false, // Enable/disable shadows
		},
		// Navigation arrows
		navigation: {
			prevEl: '.results-swiper__button--prev',
			nextEl: '.results-swiper__button--next',
		},
		pagination: {
			el: '.results-swiper__pagination',
		},
	})

	const dropdownBtn = document.querySelectorAll('.result-slide__dropdown-btn')
	const resultSliders = document.querySelectorAll('.results-swiper__slide')
	const closeDropdown = (el) => {
		if (!el.classList.contains('swiper-slide-active')) {
			el.querySelector('.result-slide__dropdown-btn').classList.remove(
				'result-slide__dropdown-btn--active'
			)

			el.querySelector('.result-slide__dropdown').classList.remove(
				'result-slide__dropdown--show'
			)
		}
	}

	dropdownBtn.forEach((btn) => {
		btn.addEventListener('click', () => {
			btn.classList.toggle('result-slide__dropdown-btn--active')
			btn.parentNode
				.querySelector('.result-slide__dropdown')
				.classList.toggle('result-slide__dropdown--show')
		})
	})

	resultSliders.forEach((slider) => {
		slider.addEventListener('mouseleave', function () {
			setTimeout(closeDropdown(this), 300)
		})
	})

	const resultButton = document.querySelectorAll('.results-swiper__button')
	resultButton.forEach((btn) => {
		btn.addEventListener('click', () => {
			console.log(123)
			resultSliders.forEach((slider) => {
				setTimeout(closeDropdown(slider), 300)
			})
		})
	})
}

export default resultsSwiper
