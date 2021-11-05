// lazy loading

// get all images with data-src attribute
const imagesToLoad = document.querySelectorAll('img[data-src');

// optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

// first check to see if intersection observer is supported
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    // loop through each image and check status and load if necessary 
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

// local storage
const daySinceLastVisit = document.querySelector('#gallery-last-visited');

function setDateLastVisited() {
    localStorage.setItem('dateLastVisited', date);
}

function getDateLastVisited(daySinceLastVisit) {
    try {
        const millisecondsToDays = 8640000;
        const lastVisit = localStorage.getItem('dateLastVisited') || date;
        const days = Math.round((lastVisit - date) / millisecondsToDays);

        if (days > 0) {
            daySinceLastVisit.textContent = days;
        } else {
            daySinceLastVisit.textContent = 0;
        }
    }
    catch(er) {
        daySinceLastVisit.textContent = 0;
    }
}

getDateLastVisited(daySinceLastVisit)
setDateLastVisited()

/*
// other
const date = new Date(Date.now());

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};


document.querySelector("#currentDate").textContent = date.toLocaleDateString('en-UK', options);

document.querySelector("#prestonCopyrightYear").textContent = date.getFullYear();
// make pancake banner work


if (date.getDay() === 5) {
    let banner = document.createElement('div');
    banner.classList.add('friday-banner');
    banner.textContent = 'Saturday = Preston Pancakes in the Park! 9:00AM Saturday at the city park pavilion.';

    const main = document.querySelector('body');
    main.prepend(banner);
} else {
    bannerClass = document.querySelector('friday-banner');
    if (bannerClass != null) {
        banner.remove('friday-banner');
    }
}
*/