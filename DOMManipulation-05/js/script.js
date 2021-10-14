// References to 
const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');
const main = document.querySelector('main');

// Click event listener for the Add Chapter button, using 
// addEventListener and an anonymous function
button.addEventListener('click', function() {
    let inputText = input.value;
    let para;

    // If its left blank and clicked
    if (inputText == "") {
        para = document.createElement('p');
        para.textContent = 'Please enter your favorite chapter in the Book of Mormon.';
        main.appendChild(para);

    }

    else {
        const listItem = document.createElement('li');
        const listButton = document.createElement('button');
        listItem.textContent = inputText;
        listButton.textContent = '❌'; // Delete icon
        listItem.appendChild(listButton);
        list.appendChild(listItem);
        // if Delete icon is clicked we remove the child
        listButton.addEventListener('click', function() {
            list.removeChild(listItem);
        })
    }
    // send the foucs to the input element
    input.focus();
    input.value = "";

    if (inputText != "") {
        main.removeChild(para);
    }
})