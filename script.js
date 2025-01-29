// script.js
document.addEventListener("scroll", function () {
    let textBlocks = document.querySelectorAll(".text-block");
    let backgroundContainer = document.querySelector(".background-container");
    let currentImage = backgroundContainer.style.backgroundImage;
    
    textBlocks.forEach((block) => {
        let rect = block.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            let newImage = block.getAttribute("data-image");

            if (currentImage !== `url(${newImage})`) {
                backgroundContainer.style.opacity = "0";
                setTimeout(() => {
                    backgroundContainer.style.backgroundImage = `url(${newImage})`;
                    backgroundContainer.style.opacity = "1";
                }, 300);
            }
        }
    });
});