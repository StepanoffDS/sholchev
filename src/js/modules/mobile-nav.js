function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn')
	const nav = document.querySelector('.mobile-nav')
	const menuIcon = document.querySelector('.nav-icon')
	const menuItems = document.querySelectorAll('.mobile-nav__item')
	const submenu = document.querySelectorAll('.mobile-nav__submenu')
	const submenuTitle = document.querySelectorAll('.mobile-nav__submenu-title')

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open')
		menuIcon.classList.toggle('nav-icon--active')
		document.body.classList.toggle('no-scroll')

		submenu.forEach((item) => {
			item.classList.remove('mobile-nav__submenu--open')
		})
	}

	menuItems.forEach((item) => {
		item.addEventListener('click', () => {
			if (item.querySelector('.mobile-nav__submenu')) {
				item
					.querySelector('.mobile-nav__submenu')
					.classList.add('mobile-nav__submenu--open')
			}
		})
	})

	submenuTitle.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.stopPropagation()
			item.parentElement.classList.remove('mobile-nav__submenu--open')
		})
	})
}

export default mobileNav
