// make navigation hamburger menu work

const menuButton = document.querySelector('.ham');
const mainNav = document.querySelector('.navigation')

menuButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

// to solve the mid resizing issue with responsive class
window.onresize = () => {if (window.innerWidth > 760)
mainNav.classList.remove('responsive')};

/*
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
*/
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

// Preston Weather API
const weatherapiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=8fa297084176f2effe2408d4ce142d36';

fetch(weatherapiURL).then((response) => response.json()).then((jsonObject) => {
    
    const temperature = document.querySelector('.temperature');
    t = jsonObject.main.temp;
    temperature.textContent = t;

    const currently = document.querySelector('.current_temp');
    currently.textContent = jsonObject.weather[0].description;

    const windspeed = document.querySelector('.windspeed');
    w = jsonObject.wind.speed;
    windspeed.textContent = w;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = jsonObject.main.humidity;

    let windchill_factor = 'N/A';

    if ((t <= 50) && (w > 3)) {
        windchill_factor = `${Math.round(35.74 + (0.6215 * t) - (35.75 * Math.pow(w, 0.16)) + ((0.4275 * t) * Math.pow(w, 0.16)))}&#176;F`;
    } 
    
    document.querySelector('.windchill').innerHTML = windchill_factor;
  });
//#endregion

//#region Preston Weather Forecast API
const forecastapiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=8fa297084176f2effe2408d4ce142d36';

fetch(forecastapiURL).then((response) => response.json()).then((jsonObject) => {
    
    let forecast = jsonObject.list;

    for (let i = 0; i < forecast.length; i++) {
        
        let forecastdate_string = forecast[i].dt_txt;
        let dt = forecastdate_string.substring(11, 24);
        let forecastdate = new Date(forecastdate_string);
        
        if (dt === '18:00:00') {

            let flexcol = document.createElement('div');
            flexcol.classList.add('flex-col');

            let col_head_span = document.createElement('span');
            col_head_span.classList.add('col-head');
            col_head_span.textContent = forecastdate.toLocaleString("default", {weekday: "long"});
            flexcol.appendChild(col_head_span);

            let weather_info_div = document.createElement('div');
            weather_info_div.classList.add('weather-info');
            flexcol.appendChild(weather_info_div);

            let img = document.createElement('img');
            img.setAttribute("src", `http://openweathermap.org/img/wn/${forecast[i].weather["0"].icon}@2x.png`);
            img.setAttribute("alt", `Icon depicting ${forecast[i].weather["0"].description} in ${jsonObject.city.name}, Idaho`);
            weather_info_div.appendChild(img);

            let data_span = document.createElement('span');
            data_span.classList.add('data');
            data_span.innerHTML = `${Math.round(forecast[i].main.temp)}&#176;F`;
            weather_info_div.appendChild(data_span);            
    
            document.querySelector('div.flex').appendChild(flexcol);
        }
    }
  });