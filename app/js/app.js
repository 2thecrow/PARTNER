document.addEventListener('DOMContentLoaded', () => {

	/* Hamburher menu */
	const menu = document.querySelector('.mobile-menu'); /* Aside menu */
	const burger = document.querySelector('.burger'); /* desktop btn aside menu  */
	const menuClose = document.querySelector('.mobile-menu__close'); /* close btn for aside menu */
	const overlay = document.querySelector('.overlay'); /* overlay for aside menu */
  
	/* lock screen scroll */
	const lockScroll = () => {
	  document.body.classList.add('lock');
	}
	/* unlock screen scroll */
	const unlockScroll = () => {
	  document.body.classList.remove('lock');
	}
  
	/* Open menu */
	burger.addEventListener('click', () => {
	  burger.classList.add('hide');
	  menu.classList.add('open');
	  overlay.classList.add('open');
	  lockScroll();
	});
	/* Close aside menu */
	menuClose.addEventListener('click', () => {
	  burger.classList.remove('hide');
	  menu.classList.remove('open');
	  overlay.classList.remove('open');
	  unlockScroll();
	});
	/* Remove overlay and unlock screen scroll */
	overlay.addEventListener('click', () => {
	  burger.classList.remove('hide');
	  menu.classList.remove('open');
	  overlay.classList.remove('open');
	  unlockScroll();
	});
	/* End of Hamburher menu */
})