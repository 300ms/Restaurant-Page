import {foods, drinks, dessert} from './menuObjects.js';

const calculateAspectRatioFit = (srcWidth, srcHeight, maxWidth = 200, maxHeight = 200) => {
  let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return { width: srcWidth*ratio, height: srcHeight*ratio };
}

export default class Menu {
  static addMenu() {
    Menu.addFoods();
    Menu.addDrinks();
    Menu.addDessert();
  }

  static addFoods() {
    const foodMenu = document.createElement("div");
    foodMenu.className += "d-flex d-flex flex-column text-center";
    const header = document.createElement("h3");
    header.innerHTML = "Foods";
    foodMenu.appendChild(header);

    foods.forEach (food => {
      const div = document.createElement("div");
      div.className += "mx-1 my-1 px-1 py-1 d-flex flex-column align-items-center";

      const img = document.createElement("img");
      img.src = food.img;
      let wh = calculateAspectRatioFit(img.width, img.height);
      img.width = wh.width;
      img.height = wh.height;
      
      const name = document.createElement("h3");
      name.innerHTML = `${food.name}`;

      const description = document.createElement("span");
      description.innerHTML = `${food.description}`;

      const price = document.createElement("span");
      price.innerHTML = `${food.price}`;

      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(description);
      div.appendChild(price);
      foodMenu.appendChild(div);
      document.getElementById("content").appendChild(foodMenu);
    });
  }

  static addDrinks() {
    const drinksMenu = document.createElement("div");
    drinksMenu.className += "d-flex d-flex flex-column text-center";
    drinksMenu.style.borderLeft = "2px solid #3D315B";
    drinksMenu.style.borderRight = "2px solid #3D315B";
    const header = document.createElement("h3");
    header.innerHTML = "Drinks";
    drinksMenu.appendChild(header);

    drinks.forEach (drink => {
      const div = document.createElement("div");
      div.className += "mx-1 my-1 px-1 py-1 d-flex flex-column align-items-center";

      const img = document.createElement("img");
      img.src = drink.img;
      let wh = calculateAspectRatioFit(img.width, img.height);
      img.width = wh.width;
      img.height = wh.height;
      
      const name = document.createElement("h3");
      name.innerHTML = `${drink.name}`;

      const description = document.createElement("span");
      description.innerHTML = `${drink.description}`;

      const price = document.createElement("span");
      price.innerHTML = `${drink.price}`;

      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(description);
      div.appendChild(price);
      drinksMenu.appendChild(div);
      document.getElementById("content").appendChild(drinksMenu);
    });
  }

  static addDessert() {
    const dessertMenu = document.createElement("div");
    dessertMenu.className += "d-flex d-flex flex-column text-center";
    const header = document.createElement("h3");
    header.innerHTML = "Dessert";
    dessertMenu.appendChild(header);

    dessert.forEach (dessert => {
      const div = document.createElement("div");
      div.className += "mx-1 my-1 px-1 py-1 d-flex flex-column align-items-center";

      const img = document.createElement("img");
      img.src = dessert.img;
      let wh = calculateAspectRatioFit(img.width, img.height);
      img.width = wh.width;
      img.height = wh.height;
      
      const name = document.createElement("h3");
      name.innerHTML = `${dessert.name}`;

      const description = document.createElement("span");
      description.innerHTML = `${dessert.description}`;

      const price = document.createElement("span");
      price.innerHTML = `${dessert.price}`;

      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(description);
      div.appendChild(price);
      dessertMenu.appendChild(div);
      document.getElementById("content").appendChild(dessertMenu);
    });
  }
}
