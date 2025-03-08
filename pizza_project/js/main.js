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