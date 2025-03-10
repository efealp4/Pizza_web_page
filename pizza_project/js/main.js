/* ====== SHOW MENU ====== */ 
const navMenu= document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose= document.getElementById('nav-close')

/* Menu Show */ 
if(navToggle){
   navToggle.addEventListener('click',()=>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu Hidden */ 
if(navClose){
   navClose.addEventListener('click',()=>{
      navMenu.classList.remove('show-menu')
   })
}

/* Remove Menu Mobile */
const navLink= document.querySelectorAll('.nav-link');

const linkAction = () =>{
   const navMenu= document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

/* Add Shadow Header */ 
const shadowHeader = ()=>{
   const header= document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll',shadowHeader)

/* Swiper popular */ 
const swiperPopular= new Swiper('.popular__swiper', {
   loop:true,
   grapCursor: true,
   slidesPerView: 'auto',
   centeredSlides: 'auto'
})

/* Show Scroll up*/ 
const scrollUp= () =>{
   const scrollUp= document.getElementById('scroll-up');
   // When the scrollup is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp);