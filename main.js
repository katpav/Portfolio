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
