const imagesWrapper = document.querySelector(".images-wrapper");
const image = document.querySelectorAll(".image");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let counter = 0;
nextBtn.addEventListener("click", () => {
  counter++;
  if (counter <= image.length - 1) {
    imagesWrapper.style.transform =
      "translateX(" + -image[0].clientWidth * counter + "px)";
  } else {
    counter = 0;
    imagesWrapper.style.transform =
      "translateX(" + -image[0].clientWidth * counter + "px)";
  }
});

prevBtn.addEventListener("click", () => {
  counter--;
  if (counter >= 0) {
    imagesWrapper.style.transform =
      "translateX(" + -image[0].clientWidth * counter + "px)";
  } else {
    counter = image.length - 1;
    imagesWrapper.style.transform =
      "translateX(" + -image[0].clientWidth * counter + "px)";
  }
});
