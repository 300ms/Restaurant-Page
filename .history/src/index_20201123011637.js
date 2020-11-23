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

function clearContainer() { document.getElementById('content').innerHTML = ''; }

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
