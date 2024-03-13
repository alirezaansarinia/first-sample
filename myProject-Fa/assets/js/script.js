// mySwiperEffectCards
var mySwiperEffectCards = new Swiper(".mySwiperEffectCards", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// mySwiper2EffectCreative
var mySwiper2EffectCreative = new Swiper(".mySwiper2EffectCreative", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// mySwiper4EffectCreative
var mySwiper4EffectCreative = new Swiper(".mySwiper4EffectCreative", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -800],
      rotate: [180, 0, 0],
    },
    next: {
      shadow: true,
      translate: [0, 0, -800],
      rotate: [-180, 0, 0],
    },
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// mySwiper5EffectCreative
var mySwiper5EffectCreative = new Swiper(".mySwiper5EffectCreative", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-125%", 0, -800],
      rotate: [0, 0, -90],
    },
    next: {
      shadow: true,
      translate: ["125%", 0, -800],
      rotate: [0, 0, 90],
    },
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// mySwiperCube
var mySwiperCube = new Swiper(".mySwiperCube", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".mySwiperCube-pagination",
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// mySwiperCoverflow
var mySwiperCoverflow = new Swiper(".mySwiperCoverflow", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".mySwiperCoverflow-pagination",
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// chatBox
let communicateUs = document.querySelector('.communicateUs');
let chatBox = document.querySelector('.chatBox');
let btnClose = document.querySelector('.btn-close');
communicateUs.onclick = function (e) {
  e.preventDefault();
  chatBox.classList.remove('d-none');
  chatBox.classList.add('d-block');
  communicateUs.classList.add('d-none');

};
btnClose.onclick = function () {
  chatBox.classList.add('d-none');
  communicateUs.classList.remove('d-none');
  communicateUs.classList.add('d-block');

};