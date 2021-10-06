const prosuctCards = document.querySelectorAll('.product-card')

if (prosuctCards) {
	prosuctCards.forEach(card => {
		const imageSwitchItems = card.querySelectorAll('.image-switch__item')
		const imagePagination = card.querySelector('.image-pagination')

		if (imageSwitchItems.length > 1) {
			imageSwitchItems.forEach((img, idx) => {
				img.setAttribute('data-index', idx)
				imagePagination.innerHTML += `<li class="image-pagination__item ${
					idx == 0 ? 'active' : ''
				}" data-index="${idx}"></li>`

				img.addEventListener('mouseenter', event => {
					card.querySelectorAll('.image-pagination__item').forEach(item => {
						item.classList.remove('active')
					})
					card
						.querySelector(
							`.image-pagination__item[data-index="${event.currentTarget.dataset.index}"]`
						)
						.classList.add('active')
				})

				img.addEventListener('mouseleave', event => {
					card.querySelectorAll('.image-pagination__item').forEach(item => {
						item.classList.remove('active')
					})
					card
						.querySelector(
							`.image-pagination__item[data-index="0"]`
						)
						.classList.add('active')
				})
			})
		}
	})
}
