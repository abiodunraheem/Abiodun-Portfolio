// mobile menu
const openButton = document.getElementById('menu-button');
const closeButton = document.querySelector('.close');
const closeItems = document.querySelector('.closeItem');

openButton.onclick = function openMenu() {
  document.querySelector('#mobile-menu').style = 'display: block';
  document.querySelector('#menu-button').style = 'display: none';
  document.querySelector('body').style = 'overflow: hidden';
  document.querySelector('main').style = 'filter: blur(6px); z-index: -1';
};

closeButton.onclick = function closeMenu() {
  document.querySelector('#mobile-menu').style = 'display: none';
  document.querySelector('#menu-button').style = 'display: block';
  document.querySelector('body').style = 'overflow: scroll';
  document.querySelector('main').style = 'filter: none; z-index: 0';
};

closeItems.onclick = function closeItem() {
  document.querySelector('#mobile-menu').style = 'display: none';
  document.querySelector('#menu-button').style = 'display: block';
  document.querySelector('body').style = 'overflow: scroll';
  document.querySelector('main').style = 'filter: none; z-index: 0';
};
// end

const projectsList = [
  {
    id: 1,
    image: './assets/budget App.jpeg',
    title: 'Budget App',
    description: 'My Budget app is a Ruby on Rails application that aims to make the process of tracking my expenses easier. It will hopefully help you too! You will be able to create your account and have all your expenses there.',
    spans: [
      'Microverse',
      'Full Stack Dev',
      '2022',
    ],
    skills: [
      'Ruby on Rails',
      'bootstrap',
      'CSS',
    ],
    liveLink: 'https://abiodun-budget-app.herokuapp.com/',
    sourceLink: 'https://github.com/abiodunraheem/Budget-app',
  },
  {
    id: 2,
    image: './assets/bookstore.jpeg',
    title: 'CMS Bookstore',
    description: 'Book Store is a single page application that allow users to keep track of books coming into the store, and books leaving the store. This project was built with react and redux.',
    spans: [
      'Microverse',
      'Full Stack Dev',
      '2022',
    ],
    skills: [
      'JavaScript',
      'bootstrap',
      'RSpec',
      'CSS',
      'netlify',
    ],
    liveLink: 'https://react-redux-books.netlify.app/',
    sourceLink: 'https://github.com/abiodunraheem/book-store',
  },
  {
    id: 3,
    image: './assets/silverbird cinemas.jpeg',
    title: 'Silverbird Cinemas',
    description: 'Silverbird Cinemas is an application that gives users access to keep track of their favorite movies, by adding comments and likes to any movie of their choice. This application was built with vanilla JavaScript.',
    spans: [
      'Microverse',
      'Front End Dev',
      '2022',
    ],
    skills: [
      'JavaScript',
      'CSS',
      'Jest',
      'Movie-API',
      'Netlify',
    ],
    liveLink: 'https://abiodunraheem.github.io/Silverbird-Cinemas/',
    sourceLink: 'https://github.com/abiodunraheem/Silverbird-Cinemas',
  },
  {
    id: 4,
    image: './assets/leaderboard.jpeg',
    title: 'Abiodun Leader Board',
    description: 'Abiodun Leader Board is a game that returns the highest scores each time the game is played.',
    spans: [
      'Microverse',
      'Front End Dev',
      '2022',
    ],
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    liveLink: 'https://abiodunraheem.github.io/Abiodun-LeaderBoard/',
    sourceLink: 'https://github.com/abiodunraheem/Abiodun-LeaderBoard',
  }];

const cards = () => {
  const card = projectsList.map((elem, index) => ` <div class="card flex">
            <div class="${index % 2 !== 0 ? 'card-items-reverse' : 'card-items'} flex">
                <img class='card-image' src="${elem.image}" alt="Project-${elem.id} screenshot" />
                <div class="card-continent flex">
                    <div class="card-header-container">
                        <h2 class="card-header">${elem.title}</h2>
                    </div>
                    <div class="card-elemnts">
                        <span class="span-weight-500">${elem.spans[0]}</span>
                        <img class="counter" src="./assets/counter.png" alt="counter" />
                        <span class="span-weight-400">${elem.spans[1]}</span>
                        <img class="counter" src="./assets/counter.png" alt="counter" />
                        <span class="span-weight-400">${elem.spans[2]}</span>
                    </div>
                    <p class="card-text">${elem.description}</p>
                    <ul class="skills-list flex list-style">
                    ${elem.skills.map((e) => `<li>${e}</li>`).join('')}
                    </ul>
                    <div class="button-container flex">
                        <button onclick="projectData(${elem.id})" type="button" class="check-project button flex">See Project</button>
                    </div>
                </div>
            </div>
        </div>`);
  return card;
};

window.addEventListener('load', () => {
  document.getElementById('cards-container').innerHTML = cards();
});

// popup window

const projectData = (projectId) => {
  if (projectId === null) return;
  let item = projectsList.filter((elem) => elem.id === projectId);
  item = item.shift();
  const popup = `<div class="window"> 
            <div id="popup-window" class="flex">
                <div class="window-header-container ">
                    <div class="window-header">
                        <h2>${item.title}</h2>
                    </div>
                    <a onclick='closeWindow()' id="closeWindow" href="#window"><i class="fa fa-close"></i></a>
                </div>
                <div class="window-elemnts">
                    <span class="span-weight-500">${item.spans[0]}</span>
                    <img class="counter" src="./assets/counter.png" alt="counter" />
                    <span class="span-weight-400">${item.spans[1]}</span>
                    <img class="counter" src="./assets/counter.png" alt="counter" />
                    <span class="span-weight-400">${item.spans[2]}</span>
                </div>
                <div class='window-image-container'>
                    <img class='window-image' src="${item.image}" alt="Project-4 screenshot" />
                </div>
                <div class="window-card-container flex">
                    <div class="window-items">
                        <p class="window-text">${item.description}</p>
                    </div>
                    <div class="window-card">
                        <ul class="window-skills flex list-style">${item.skills.map((s) => `<li>${s}</li>`).join('')}</ul>
                        <div class="window-button-container flex">
                            <a class="check-project window-button flex" href="${item.liveLink}" target="”_blank”" rel="noreferrer noopener">
                                See live<i class="fa fa-power-off size"></i>
                            </a>
                            <a class="check-project window-button flex" href="${item.sourceLink}" target="”_blank”" rel="noreferrer noopener">
                                See Source<i class="fa fa-github-alt size"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  document.querySelector('#window-container').innerHTML = popup;
  document.querySelector('body').style = 'overflow: hidden';
  document.querySelector('.window').style = 'display: block; position: fixed; top: 5px; left: 15px';
  document.querySelector('#popup-window').style = 'overflow-y: scroll';
};
projectData(null);

const closeWindow = (status) => {
  if (status === null) return;
  document.body.style.overflow = 'scroll';
  document.querySelector('#window-container').innerHTML = '';
};
closeWindow(null);

// end popup window