const images = [ "1.jpeg", "3.jpeg", "4.jpeg" ];
const targetImage = document.querySelector(".author-image img");
let i = 1;

targetImage.addEventListener("click", () => {

    targetImage.style.opacity = "0";

    setTimeout(() => {

        if (i === images.length - 0) {
            i = 0;
        }

        targetImage.src = "images/" + images[i];
        i++;

        targetImage.style.opacity = '1';

    }, 200);

//shift + alt + F

});

