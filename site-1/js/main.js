var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 3,
  autoplay: true,
  spaceBetween: 30,
  loop: true,
  speed: 500,
  // ADICIONE ISSO:
  breakpoints: {
    0: { // de 0px até 599px
      slidesPerView: 1,
    },
    600: { // a partir de 600px
      slidesPerView: 2,
    },
    900: {
        slidesPerView: 3
    }
  }
});
var swiper = new Swiper(".mySwiper1", {
  watchSlidesProgress: true,
  slidesPerView: 3,
  autoplay: true,
  spaceBetween: 30,
  loop: true,
  speed: 500,
  // ADICIONE ISSO:
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: { 
      slidesPerView: 2,
    },
    800:{
      slidesPerView:3
    },
    900: {
        slidesPerView: 4
    },
    1200:{
      slidesPerView: 5  
    }
  }
});

var swiper = new Swiper(".mySwiper2", {
      pagination: {
        el: ".swiper-pagination",
      },
      loop:true,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        800:{
          slidesPerView: 2,
        }
      }
    });

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
