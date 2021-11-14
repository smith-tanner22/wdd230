// make navigation hamburger menu work

const menuButton = document.querySelector('.ham');
const mainNav = document.querySelector('.navigation')

menuButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

// to solve the mid resizing issue with responsive class
window.onresize = () => {if (window.innerWidth > 760)
mainNav.classList.remove('responsive')};

// to add date
let d = new Date();
document.getElementById("copyrightYear").textContent = d.getFullYear();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
};

document.getElementById('currentDate').textContent = d.toLocaleDateString(
    "en-UK",
    options
);

// get json data

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        const townname = towns.filter((town) => town.name === 'Preston' || town.name === 'Soda Springs' || town.name === 'Fish Haven');
        townname.forEach((townname) => {
            let section = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let annualRain = document.createElement('p');
            let image = document.createElement('img');
            let div = document.createElement('div');

            h2.innerHTML = `${townname.name}`;
            motto.textContent = `${townname.motto}`;
            yearFounded.textContent = `Year Founded: ${townname.yearFounded}`;
            population.textContent = `Population: ${townname.currentPopulation}`;
            annualRain.textContent = `Annual Rain Fall: ${townname.averageRainfall}`;

            if (townname.name === 'Preston') {
                image.setAttribute('src', "images/preston.jpg");
                image.setAttribute('alt', "");
            } else if (townname.name === 'Soda Springs') {
                image.setAttribute('src', "images/sodasprings.JPG");
                image.setAttribute('alt', "");
            } else {
                image.setAttribute('src', "images/fishhaven.jpg");
                image.setAttribute('alt', "");
            }

            div.appendChild(h2);
            div.appendChild(motto);
            div.appendChild(yearFounded);
            div.appendChild(population);
            div.appendChild(annualRain);
            section.appendChild(div);
            section.appendChild(image);

            document.querySelector('div.town-cards').appendChild(section);
        });
    });

/*
fetch('https://byui-cit230.github.io/weather/data/towndata.json')
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    // console.table(jsonObject);   temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const townname = towns.filter((town) => town.name === 'Preston' || town.name === 'Soda Springs' || town.name === 'Fish Haven');
    townname.forEach((town) => {
      let section = document.createElement('section');
      let h2 = document.createElement('h2');
      let motto = document.createElement('p');
      let yrfounded = document.createElement('p');
      let population = document.createElement('p');
      let annualrainfall = document.createElement('p');
      let image = document.createElement('img');
      let div = document.createElement('div');

      h2.textContent = `${town.name}`;
      motto.textContent = `${town.motto}`;
      yrfounded.textContent = `Year Founded: ${town.yearFounded}`;
      population.textContent = `Population: ${town.currentPopulation}`;
      annualrainfall.textContent = `Annual Rain Fall: ${town.averageRainfall}`;

      if (town.name === 'Preston') {
        image.setAttribute('src', "images/hotairballoons.webp");
        image.setAttribute('alt', "Hot air balloons over a valley with a town in the background.");
      } else if (town.name === 'Soda Springs') {
        image.setAttribute('src', "images/sodafountain.webp");
        image.setAttribute('alt', "A store with a soda fountain sign and several soda refrigerators.");
      } else {
        image.setAttribute('src', "images/manfishingonriver.webp");
        image.setAttribute('alt', "A man flyfishing while wading in a river.");
      }

      div.appendChild(h2);
      div.appendChild(motto);
      div.appendChild(yrfounded);
      div.appendChild(population);
      div.appendChild(annualrainfall);
      section.appendChild(div);
      section.appendChild(image);

      document.querySelector('div.sections').appendChild(section);
    });
  });

  */