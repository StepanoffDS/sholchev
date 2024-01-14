import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

function reviewsSwiper() {
	const swiperReviews = new Swiper('.reviews-swiper', {
		modules: [Navigation, Pagination],

		slidesPerView: 1,
		spaceBetween: 15,
		// Navigation arrows
		navigation: {
			prevEl: '.reviews-swiper__button--prev',
			nextEl: '.reviews-swiper__button--next',
		},
		pagination: {
			el: '.reviews-swiper__pagination',
		},

		breakpoints: {
			961: { slidesPerView: 1.5, spaceBetween: 10, grabCursor: true },
		},
	})
}

export default reviewsSwiper
