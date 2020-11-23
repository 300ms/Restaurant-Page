export default class Home {
  static homePage() {
    const homeDiv = document.createElement('div');
    homeDiv.className += 'd-flex flex-column justify-content-center text-center';
    const header = document.createElement('h3');
    header.innerHTML = 'Welcome to Restaurant';
    const description = document.createElement('span');
    description.innerHTML = 'Best food, Good Food';
    homeDiv.appendChild(header);
    homeDiv.appendChild(description);
    document.getElementById("content").appendChild(homeDiv);
  }
}
