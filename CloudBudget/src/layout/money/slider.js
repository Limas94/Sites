let buttons = document.querySelectorAll(".slider__buttons--elem");
let slides = document.querySelectorAll(".slider__slide");
let prevSlide = 0, state = null;


let setState = (index) => {
    state = index

    nexSlide(state);
};

let nexSlide = (state) => {
    if (slides[state].classList[1] !== "slider__slide--active") {
        slides[prevSlide].classList.remove("slider__slide--active")
        slides[state].classList.add("slider__slide--active");
        prevSlide = state;
    }
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => setState(i));
}