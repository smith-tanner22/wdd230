function Hide(HideID) {
    HideID.style.display = "none";
}


const copyrightyear = document.getElementById("currentdate2");
copyrightyear.textContent = new Date().getFullYear();

var string = document.getElementById("lastmodified");
string.textContent = new Date(document.lastModified);

function toggleSelection(rating) {
    document.getElementById("value").innerHTML = rating;
}

