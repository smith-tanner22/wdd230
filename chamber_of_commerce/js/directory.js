const requestURL = 'business.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const businesses = jsonObject['businesses'];

        for (let i = 0; i < businesses.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let b_address = document.createElement('p');
            let b_phone = document.createElement('p');
            let b_owner = document.createElement('p');
            let b_website = document.createElement('p');
            let ex_image = document.createElement('img');

            h2.textContent = businesses[i].name;
            b_address.textContent = 'Address: ' + businesses[i].address;
            b_phone.textContent = 'Phone: ' + businesses[i].phone;
            b_owner.textContent = 'Owner(s): ' + businesses[i].owners;
            b_website.textContent = 'Website: ' + businesses[i].website;
            ex_image.setAttribute('src', businesses[i].logo);
            ex_image.setAttribute('alt', businesses[i].name + ' Logo');

            card.appendChild(h2);
            card.appendChild(b_address);
            card.appendChild(b_phone);
            card.appendChild(b_owner);
            card.appendChild(b_website);
            card.appendChild(ex_image);

            document.querySelector('div.directory').appendChild(card);

        }
    });

