"use strict";

const ratingSection = document.querySelector(".rating-section");
const thankYouSection = document.querySelector(".thank-you-section");
const rating = document.querySelector(".rating");
const submitBtn = document.querySelector(".submit-btn");
const ratingBtns = document.querySelectorAll(".ratings");


submitBtn.addEventListener("click", () => {
    ratingSection.classList.add("hidden");
    thankYouSection.classList.remove("hidden");
    thankYouSection.classList.add("transition", "duration-500", "transform", "opacity-0", "scale-50");

    setTimeout(() => {
        thankYouSection.classList.remove("opacity-0", "scale-50");
        thankYouSection.classList.add("opacity-100", "scale-100");
    }, 100);
});

ratingBtns.forEach(ratingBtn => {
    ratingBtn.addEventListener("click", () => {
        ratingBtns.forEach((btn) => {
            btn.classList.remove("bg-lightGrey", "text-white");
        });
        ratingBtn.classList.add("bg-lightGrey", "text-white");
        rating.textContent = ratingBtn.textContent;
    });
})
