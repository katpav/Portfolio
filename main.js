//Highlight Nav Menu on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', ()=> {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight / 3)){
      current = section.getAttribute('id');
    }
  })

  navItems.forEach(li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })
})

//Responsive Nav Menu
const menu = document.querySelector('.menu_btn')
const navLinks = document.querySelector('ul')

menu.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

//Elements reveal on scroll - borrowed, need to understand - HOW & WHY
/* window.onload = function() {
  const effect1 = document.querySelector('#about')

  window.addEventListener('scroll', scrollEffect)

  function scrollEffect() {
    if(window.scrollY>=500) {
      effect1.style.opacity = '1';
      effect1.style.transform = 'translateX(0px)';
      effect1.style.transition = '1s ease-in-out';
    }
    else {
      effect1.style.opacity = '0';
      effect1.style.transform = 'translateX(-50px)'; //change
    }
  }
} */

/* window.onload = function() {
  const effect2 = document.querySelector('#skills')

  window.addEventListener('scroll', scrollEffect)

  function scrollEffect() {
    if(window.scrollY>=1000) {  //how to get Y
      effect2.style.opacity = '1';
      effect2.style.transform = 'translateY(0px)';
      effect2.style.transition = '1s ease-in-out';
    }
    else {
      effect2.style.opacity = '0';
      effect2.style.transform = 'translateY(20px)';  //change
    }
  }
} */