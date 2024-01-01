var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    autoplay: {
                delay: 1000, // Set the delay between slides in milliseconds (5 seconds in this example)
                disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
              },
    speed:800,
    grabCursor: true,
    initialSlide: 2,
    loop: true,
    rotate: true,
    mousewheel: {
    invert: false,
  },
});
