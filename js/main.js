$('.prosto-slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows:false,
});


/*===== modals ======*/

const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');


function openModal() {
   modal.classList.add('show');
   modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  clearInterval(modalTimerId);
}

modalTrigger.forEach(btn =>{
  btn.addEventListener('click', openModal);
});

function CloseModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}
  modalCloseBtn.addEventListener('click', CloseModal);
  
  modal.addEventListener('click', (e)=>{ 
    if(e.target === modal){ CloseModal();}
  
  document.addEventListener('keydown', (e)=>{
    if(e.code === "Escape" && modal.classList.contains('show'))
      { CloseModal(); }
  });

});

/* = burger menu =*/

const menuBtn = document.querySelector(".menu-btn");
const BurgMenu = document.querySelector(".header-menu__burger");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-btn_active");
  BurgMenu.classList.toggle("active");
});
