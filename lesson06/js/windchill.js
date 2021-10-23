let temp = document.querySelector(".temperature").textContent;
let speed = document.querySelector(".windspeed").textContent;

if ((temp <=50) && (speed > 3)) {
    windchill = Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + ((0.4275 * temp) * Math.pow(speed, 0.16)));
}

document.querySelector(".windchill").textContent = windchill

