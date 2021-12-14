// get elemets with class = column
var elements = document.getElementsByName('section');

// declar a loop variable
var i;

// list view
function listView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
    }
}

// grid view
function gridView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%;"
    }
}