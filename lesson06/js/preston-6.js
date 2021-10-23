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

/*
const d = new Date();
const day = d.getDay();

if (day == 5) {
    document.querySelector('.pancakes').style.display = "block";
}
*/