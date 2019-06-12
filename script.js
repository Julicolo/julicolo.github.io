window.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.clickable');
	const container = document.querySelector('.container');
	const header = document.querySelector('.header');
	const main = document.querySelector('.main');
	const top = document.querySelector('.top');
	const bot = document.querySelector('.bot');

	window.addEventListener('mousemove', event => {
		container.style.backgroundPositionX = -event.clientX / 75 +'px';
		container.style.backgroundPositionY = -event.clientY / 75 +'px';
	});

	const moveHeaderUp = () => {
		header.classList.add('topLeft');
		top.classList.add('topRight');
		main.classList.add('reposition');
	};

	const moveHeaderDown = () => {
		header.classList.remove('topLeft');
		top.classList.remove('topRight');
		main.classList.remove('reposition');	
	};


	const toggleContent = pageClass => {
		const contentToShow = document.querySelector(`.content.${pageClass}`);

		if (contentToShow.classList.contains('visible')) {
			moveHeaderDown();
			contentToShow.classList.remove('visible');
			bot.classList.remove('content-shown');
		} else {
			const contentToHide = document.querySelector('.content.visible');

			if (contentToHide !== null) {
				contentToHide.classList.remove('visible');
			}

			moveHeaderUp();
			bot.classList.add('content-shown');
			contentToShow.classList.add('visible');
		}						
	};

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			toggleContent(button.name);			
		});
	});
});
