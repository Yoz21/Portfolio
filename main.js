const btn = document.getElementById('btn');
const pop = document.getElementById('invite');
const closeButton = document.getElementById('close');
const closePop = document.getElementById('xx');
const view = document.querySelector('.pop-up');
const nav = document.querySelector('.desk-head');
const list = document.querySelectorAll('.common-li');

const portfolioLink = document.querySelector('#portfolio');
const portfolio = document.querySelector('.work-section');
const aboutLink = document.querySelector('#about');
const about = document.querySelector('.about-me');
const contactLink = document.querySelector('#contact');
const contact = document.querySelector('.last-contact');

function closeBtn() {
  nav.classList.remove('desk-li-menu');
  nav.style.display = 'none';
}

function cancelPop() {
  view.classList.remove('pop-up-menu');
  view.style.display = 'none';
}

function openPortfolio() {
  portfolio.scrollIntoView();
}

function openAbout() {
  about.scrollIntoView();
}

function openContact() {
  contact.scrollIntoView();
}
function navList() {
  nav.classList.add('desk-li-menu');
  nav.style.display = 'block';
}

function popList() {
  view.classList.add('pop-up-menu');
  view.style.display = 'block';
}

list.forEach((element) => {
  element.addEventListener('click', closeBtn);
});
pop.addEventListener('click', popList);
btn.addEventListener('click', navList);
closePop.addEventListener('click', cancelPop);
closeButton.addEventListener('click', closeBtn);
portfolioLink.addEventListener('click', openPortfolio);
aboutLink.addEventListener('click', openAbout);
contactLink.addEventListener('click', openContact);
