const date = new Date(Date.now());
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};


document.querySelector("#currentDate").textContent = date.toLocaleDateString('en-UK', options);

document.querySelector("#prestonCopyrightYear").textContent = date.getFullYear();

// make navigation hamburger menu work

const menuButton = document.querySelector('.ham');
const mainNav = document.querySelector('.navigation')

menuButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

// to solve the mid resizing issue with responsive class
window.onresize = () => {if (window.innerWidth > 760)
mainNav.classList.remove('responsive')};

