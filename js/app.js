const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector("#btn--left");
const btnRight = document.querySelector("#btn--right");


slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function next() {
    let sliderSectionFirst = document.querySelectorAll(".slider_section") [0];
    slider.style.marginleft= "-200%";
    slider.style.transition= "all 0.5s";

    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginleft= "-100%";
 
    }, 500);
};

function prev() {
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginleft= "0";
    slider.style.transition= "all 0.5s";
    setTimeout(function () {
        slider.style.transition= "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginleft= "-100%";
 
    });
};


btnLeft.addEventListener('click', function() {
    prev();
});

btnRight.addEventListener('click', function() {
    next();
});

setInterval(function () {
    next();
}, 4000);




