// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');
// listen for click events on modal-btn
modalBtn.addEventListener('click', function () {
	// when user clicks modal-btn add .open-modal to modal-overlay
	modalOverlay.classList.add('open-modal');
});
// listen for click events on close-btn
closeBtn.addEventListener('click', function () {
	// when user clicks close-btn remove .open-modal from modal-overlay
	modalOverlay.classList.remove('open-modal');
});
