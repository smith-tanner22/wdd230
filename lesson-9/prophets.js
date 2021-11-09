const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];

        for (let i = 0; i <prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birth_date = document.createElement('p');
            let birth_place = document.createElement('p');
            let ex_image = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            birth_date.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            birth_place.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            ex_image.setAttribute('src', prophets[i].imageurl);
            ex_image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);

            card.appendChild(h2);
            card.appendChild(birth_date);
            card.appendChild(birth_place);
            card.appendChild(ex_image);


            document.querySelector('div.cards').appendChild(card);
        }
    });


// watch recording to see how to accomplish this this week.