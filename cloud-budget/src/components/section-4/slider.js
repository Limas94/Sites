export default function slider () {
	let slides = document.querySelectorAll(".slider__slide");
	let indexSlide = 0,
		tmp = 0;

	for (let i = 0; i < slides.length; i++) {
		slides[i].addEventListener("click", () => {
			if (slides[i].classList[1] !== "slider__slide--active") {
				tmp = slides[indexSlide].innerHTML;
				slides[indexSlide].innerHTML = slides[i].innerHTML;
				slides[i].innerHTML = tmp;
			}
		})
	}
}
