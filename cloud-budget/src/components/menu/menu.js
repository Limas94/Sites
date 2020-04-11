export default function () {
	let btn = document.querySelector(".mobile-menu__btn"),
		menu = document.querySelector(".menu"),
		toggleMenu = false;

	btn.addEventListener("click", () => {
		if (toggleMenu) {
			menu.style.opacity = 0;
			menu.style.pointerEvents = 'none';
		} else {
			menu.style.opacity = 1;
			menu.style.pointerEvents = 'auto';
		}

		toggleMenu = !toggleMenu;
	});
};
