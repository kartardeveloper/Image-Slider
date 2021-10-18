const imageCorousel = document.querySelector(".image-corousel");
const images = document.querySelectorAll('.image-corousel__images');
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");


let counter = 1;
const imageSize = images[0].clientWidth;

imageCorousel.style.transform = 'translate(' + (-imageSize * counter) + 'px)';

setInterval(() => {
    imageCorousel.style.transform = 'translate(' + (-imageSize * counter) + 'px)';
    counter++;

    if(counter === images.length-1) {
        counter = 0;
    }
}, 4000);


prevBtn.addEventListener('click' , () => {
    imageCorousel.style.transform = 'translate(' + (-imageSize * counter) + 'px)';
    counter--;

    if(counter === -1) {
        counter = images.length-1;
    }
});

nextBtn.addEventListener('click' , () => {
    imageCorousel.style.transform = 'translate(' + (-imageSize * counter) + 'px)';
    counter++;

    if(counter === images.length-1) {
        counter = 0;
    }
})