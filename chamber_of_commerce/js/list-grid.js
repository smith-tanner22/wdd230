document.querySelector('.grid-button').addEventListener('click', () => {
    document.querySelector('.directory').classList.add('grid-layout');
    document.querySelector('.directory').classList.remove('list-layout');
}, false);

document.querySelector('.list-button').addEventListener('click', () => {
    document.querySelector('.directory').classList.add('list-layout');
    document.querySelector('.directory').classList.remove('grid-layout');
}, false);