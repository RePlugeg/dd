  // logo
var typed2 = new Typed('#logo', {
    strings: ['Timeless'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    showCursor: false, 
  });
var typed2 = new Typed('#latest', {
    strings: [' Sellers'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    showCursor: false, 
  });

var swiper1 = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2500, 
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    mousewheel: true, 
    releaseOnEdges: true,
    effect: "slide"
    
});
// 1. السويبر الرئيسي للمنتجات

var swiper = new Swiper(".all-swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    
    grabCursor: true, 
    
    autoplay: {
        delay: 6000,
        disableOnInteraction: false, 
    },
    
pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
    


    mousewheel: {
        releaseOnEdges: true,
    },

    breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    }
});

