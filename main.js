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
const flow = document.querySelector('.overflow');

const projectName = document.querySelector('.pop-desk-title');

const projectDescription = document.querySelector('.msgs');
const projectImage = document.querySelector('.pop-img');
const projectTechnologies = document.querySelector('.puOut');
const projectLink1 = document.querySelector('.live-link');
const projectLink2 = document.querySelector('.git');
// 1.  get all popup elements from the dom, which includes name, description, image, technologies //

const projects = [{
  name: 'Keeping track of hundreds of components website',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  image: 'icons/Snapshoot-Portfolio.png',
  technologies: ['html', 'bootstrap', 'Ruby on rails'],
  link1: 'https://yoz21.github.io/Portfolio/"',
  link2: 'https://github.com/Yoz21/Portfolio',
}];

function closeBtn() {
  nav.classList.remove('desk-li-menu');
  nav.style.display = 'none';
}

function cancelPop() {
  view.classList.remove('pop-up-menu');
  view.style.display = 'none';
  flow.style.overflow = 'auto';
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
  flow.style.overflow = 'hidden';

  // for name, desciption, link, image, and technologies
  // set their innerText with the first object from the array, i.e
  // const project = projects[0]
  // name.innerText =  project.name
  const project = projects[0];

  projectName.innerHTML = project.name;
  projectDescription.innerHTML = project.description;
  projectImage.setAttribute('src', project.image);
  const projectTechnologiesList = project.technologies.reduce((acc, tehnology) => `${acc}<li>${tehnology}</li>`, '');
  projectTechnologies.innerHTML = projectTechnologiesList;
  projectLink1.setAttribute('href', project.link1);
  projectLink2.innerHTML = project.link2;
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
