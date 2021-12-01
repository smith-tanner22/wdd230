// make navigation hamburger menu work

const menuButton = document.querySelector('.ham');
const mainNav = document.querySelector('.navigation')

menuButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

// to solve the mid resizing issue with responsive class
window.onresize = () => {if (window.innerWidth > 760)
mainNav.classList.remove('responsive')};

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
                image.setAttribute('src', "images/preston_400.jpg");
                image.setAttribute('alt', "");
            } else if (townname.name === 'Soda Springs') {
                image.setAttribute('src', "images/sodasprings.JPG");
                image.setAttribute('alt', "");
            } else {
                image.setAttribute('src', "images/fishhaven_400.jpg");
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

    // storm severity rating
function toggleRating(rating) {
    document.getElementById("value").innerHTML = rating;
}

function selectResponse() {
    const s = document.querySelector('#selected')
    const sel = document.querySelector('#storm-region');
    s.style.display = "block";
    s.textContent = sel.value;
}