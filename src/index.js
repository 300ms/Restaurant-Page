/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import cssBootstrap from './bootstrap.min.css';
import cssStylesheet from './stylesheet.css';
import back from './images/background.jpg';
import Home from './home.js';
import Menu from './menu.js';
import Contact from './contact.js';

document.getElementById('content').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${back})`;
document.getElementById('content').style.backgroundRepeat = 'no-repeat';
document.getElementById('content').style.backgroundPosition = 'center top';
document.getElementById('content').style.backgroundSize = '100% 100%';

const createNav = () => {
  const nav = document.createElement('nav');
  nav.className += 'navbar navbar-expand-lg navbar-dark bg-primary';
  nav.id = 'nav';
  nav.innerHTML = `
  <a class="navbar-brand" href="#">Restaurant</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" id="homePage" href="#">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="menuPage" href="#">Menu</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contactPage" href="#">Contact</a>
      </li>
    </ul>
  </div>`;
  document.body.insertBefore(nav, document.getElementById('content'));
};

const clearContainer = () => { document.getElementById('content').innerHTML = ''; };

createNav();
Home.homePage();

document.getElementById('homePage').addEventListener('click', () => {
  clearContainer();
  Home.homePage();
});

document.getElementById('menuPage').addEventListener('click', () => {
  clearContainer();
  Menu.addMenu();
});

document.getElementById('contactPage').addEventListener('click', () => {
  clearContainer();
  Contact.contactPage();
});
