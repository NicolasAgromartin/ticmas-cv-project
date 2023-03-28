


// fake form submit
const form = document.querySelector('#form');
form.addEventListener('submit', (e) => e.preventDefault() )



// esconder el header
const header = document.querySelector('.header');
var lastScrollTop = 0;

window.addEventListener('scroll', () => {
  document.documentElement.scrollTop > lastScrollTop ? (header.style.top = '-80px') : (header.style.top = '0')
  lastScrollTop = document.documentElement.scrollTop;
})


// mostrar experiencia
const expButton = document.querySelectorAll('.exp-button');

expButton.forEach( button => button.addEventListener('click', () => {
  document.querySelector('.exp-1').style.background = '#000'
  })
)