window.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.container');
	const anchors = document.querySelectorAll('.anchor');

	

	window.addEventListener('mousemove', event => {
		container.style.backgroundPositionX = -event.clientX / 75 +'px';
		container.style.backgroundPositionY = -event.clientY / 75 +'px';
	});
});