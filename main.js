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
const artProject = document.querySelectorAll('.art-container');
const background = document.querySelector('.background');
const proffesionalArt = document.querySelector('.professional-art');

const projects = [
  {
    projectId: 'projectOne',
    name: 'Website Portfolio',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting jklds 
     industry. Lorem Ipsum has been the industry's standard dummy text
     ever since the 1500s, when an unknown printer took a galley of type
     and scrambled it to make a type specimen book. It has survived not
     only five centuries, but also the leap into electronic typesetting,
     remaining essent`,
    featuredImage: 'icons/imgPlaceholder1.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
  },
  {
    projectId: 'projectTwo',
    name: 'Haile Portfolio',
    description:
      "Haile's daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    featuredImage: 'icons/imgplace202.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
  },
  {
    projectId: 'projectThree',
    name: 'Website Portfolio',
    description:
      "A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    featuredImage: 'imageplaceholder303.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
  },
  {
    projectId: 'projectFour',
    name: 'Website Portfolio',
    description:
      "A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    featuredImage: 'icons/imgPlaceholder1.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
  },
  {
    projectId: 'projectFive',
    name: 'Website Portfolio',
    description:
      "A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    featuredImage: 'icons/imgplace202.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
  },
  {
    projectId: 'projectSix',
    name: 'Website Portfolio',
    description:
      "A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industry's standard",
    featuredImage: 'imageplaceholder303.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
  },
];

function closeBtn() {
  nav.classList.remove('desk-li-menu');
  nav.style.display = 'none';
}

function cancelPop() {
  view.classList.remove('pop-up-menu');
  view.style.display = 'none';
  flow.style.overflow = 'auto';
  background.style.opacity = '1';
  background.style.filter = 'none';
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

function popList(project) {
  view.classList.add('pop-up-menu');
  view.style.display = 'block';
  flow.style.overflow = 'hidden';
  background.style.opacity = '0.5';
  background.style.filter = 'blur(6px)';

  projectName.innerHTML = project.name;
  projectDescription.innerHTML = project.description;
  projectImage.setAttribute('src', project.image);
  const projectTechnologiesList = project.technologies.reduce(
    (acc, tehnology) => `${acc}<li>${tehnology}</li>`,
    '',
  );
  projectTechnologies.innerHTML = projectTechnologiesList;
  projectLink1.setAttribute('href', project.link1);
  projectLink2.innerHTML = project.link2;
}

list.forEach((element) => {
  element.addEventListener('click', closeBtn);
});

artProject.forEach((art) => {
  art.addEventListener('click', popList);
});

pop.addEventListener('click', popList);
btn.addEventListener('click', navList);
closePop.addEventListener('click', cancelPop);
closeButton.addEventListener('click', closeBtn);
portfolioLink.addEventListener('click', openPortfolio);
aboutLink.addEventListener('click', openAbout);
contactLink.addEventListener('click', openContact);

function initializeProjects() {
  projects.forEach((project) => {
    const projectTechnologiesList = project.technologies.reduce(
      (acc, tehnology) => `${acc}<li>${tehnology}</li>`,
      '',
    );
    const currentProjectHTML = `
   <div class="art-item">
     <div class="test"></div>
     <h2 class="data">${project.name}</h2>
     <p class="selections">
      ${project.description}
     </p>
     <ul class="buttons">
      ${projectTechnologiesList}
     </ul>
   </div>
   <div class="invite-container">
     <p class="invite">See Project</p>
   </div>
 `;

    const projectElement = document.createElement('div');
    projectElement.classList.add('art-container', project.projectId);

    projectElement.innerHTML = currentProjectHTML;
    projectElement.addEventListener('click', () => {
      popList(project);
    });

    proffesionalArt.appendChild(projectElement);
  });
}

initializeProjects();
