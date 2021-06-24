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

//Elements reveal on scroll
let animItems = document.querySelectorAll('.anim-items')

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_scroll');
      } else {
        if(!animItem.classList.contains('anim-no-repeat')) {
          animItem.classList.remove('_scroll');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  animOnScroll();

  setTimeout(() => {
    animOnScroll();
  }, 500);
}