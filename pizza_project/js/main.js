/* ====== SHOW MENU ====== */ 
// That part control the hamburger menu. 
const navMenu= document.getElementById('nav-menu'),
      // It symbolize to the all of the mobile menu.
      navToggle= document.getElementById('nav-toggle'),
      // The button that provide the open the menu.
      navClose= document.getElementById('nav-close')
      // The button that provide the close the menu.

/* Menu Show */
/* 
If hamburger menu is visible : 
* show-menu is adding to the nav-menu when click. 
* Because of that property, it gets visible in CSS.
*/ 
if(navToggle){
   navToggle.addEventListener('click',()=>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu Hidden */ 
/* 
If there is x button on menu: 
* It take the show-menu off from CSS when click.
*/ 
if(navClose){
   navClose.addEventListener('click',()=>{
      navMenu.classList.remove('show-menu')
   })
}

/*---------------------------------------------*/ 
/* Remove Menu Mobile */
/* 
That code blocks provide close the menu if user clicl any link. 
*/ 
const navLink= document.querySelectorAll('.nav__link');

/* 
* Choose the all nav__link elements.
* By forEach, Run the linkAction when click every each of link. 
*/ 
const linkAction = () =>{
   const navMenu= document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

/* Add Shadow Header */ 
/* 
That code blocks provide that add a shadow behind the header while scroll down. 
* window.addEventListener('scroll',shadowHeader): 
   * It runs when scrolls. 
* scrollY >= 50: 
   * It adds the shadowHeader class to the #header.
   * On the top level, the shadow gets remove. 
*/ 
const shadowHeader = ()=>{
   const header= document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll',shadowHeader)

/* Swiper popular */ 
/* 
That code blocks manage the slider that on the popular pizzas.
* It uses the librarie of swiper(swiper-bundle.min.js).
* loop: true -> Slider continue slide infinit. 
* grabCursor -> Set the cursor. 
* slidePerView: 'auto' : Showing the screen card as much as avaible.
* centeredSlides: 'auto' : It gets middle the cards as otomatic. 
*/ 
const swiperPopular= new Swiper('.popular__swiper', {
   loop:true,
   grabCursor: true,
   slidesPerView: 'auto',
   centeredSlides: 'auto'
})

/* Show Scroll up*/ 
/* 
That code blocks provide that show the button of scrollUp when scroll down after 350px.
* ScrollUp function runs while scroll. 
* If the height of page will be bigger than 350px, show-scroll element gets add to the #scroll-up.
* It gets unvisible, if scroll up. 
*/ 
const scrollUp= () =>{
   const scrollUp= document.getElementById('scroll-up');
   // When the scrollup is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp);

/* Scroll Sections Active Links */
/* 
That code blocks provide that highlights the menu links that belong that's sections. 
* Choose every each elements of id.
* When scroll: 
   * Whichever section is on the screen, the active-link class is added to the corresponding menu link.
   * Gets remove from another ones. 
*/
const sections= document.querySelectorAll('section[id]');

const scrollActive= ()=> {
   const scrollDown= window.scrollY
  
   sections.forEach(current => {
      const sectionHeight= current.offsetHeight,
      sectionTop = current.offsetTop -58,
      sectionId= current.getAttribute('id'),
      sectionsClass= document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
         sectionsClass.classList.add('active-link')
      }
      else{
         sectionsClass.classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll',scrollActive)

/* ====== SCROLL REVEAL ANIMATION ====== */ 
const sr= ScrollReveal({
   origin: 'top',
   distance: '60px', 
   duration: 2500, 
   delay: 300, 
   // reset: true, //Animations repeat
})

sr.reveal('.home__data, .popular__container, .footer, .recipe__img')
sr.reveal('.home__board', {delay: 700, distance: '100px', origin: 'right'})
sr.reveal('.home__pizza', {delay: 1400, distance: '100px', origin: 'bottom', rotate: {z: -90}})
sr.reveal('.home__ingredient', {delay: 1400, interval: 100})
sr.reveal('.about__data, .recipe__list, .contact__data' ,{origin: 'right'})
sr.reveal('.about__img, .contact__image' ,{origin: 'left'})
sr.reveal('.products__card', {interval: 100})
