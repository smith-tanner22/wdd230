const date = new Date(Date.now());
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};


document.querySelector("#currentDate").textContent = date.toLocaleDateString('en-UK', options);

document.querySelector("#prestonCopyrightYear").textContent = date.getFullYear();