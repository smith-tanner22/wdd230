const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Preston&units=imperial&appid=8fa297084176f2effe2408d4ce142d36"

fetch(apiURL) 
    .then(function(response) { return response.json() })
    .then(function(jsObject) {
        console.log(jsObject);

        document.getElementById('current-temp').textContent = jsObject.main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        //document.getElementById('icon').setAttribute('src', imagesrc);
        //document.getElementById('icon').setAttribute('alt', desc);
    });

    
/*
function weather() {
    fetch(apiURL)
    .then(function(resp) {return resp.json() })
    .then(function(data) {
        drawWeather(data);
        
    })
    .catch(function() {

    });
}

window.onload = function() {
    weather();
}

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
}

*/
/*
var request = new XMLHttpRequest();
request.open('GET', apiURL, true);
request.onload = function() {
    var obj = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        var temp = obj.main.temp;
    } else {
        console.log("City doesn't exist")
    }
}
request.send();
*/