$(document).ready(function(){
  $('.slider').slick({
  dots: false,
  arrows:true,
  autoplay: true,
  autoplaySpeed: 2000, 
   
  });

  
});


$('.autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
});


let oldScrollY = 0;
let div = document.querySelector('.header');

window.addEventListener('scroll', function(){
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  let dY = scrolled - oldScrollY;
  
  if ( dY < 0 ){
    div.classList.add('header-top-fixed');
  } else {
    div.classList.remove('header-top-fixed');
  }
  
  oldScrollY = scrolled;
});