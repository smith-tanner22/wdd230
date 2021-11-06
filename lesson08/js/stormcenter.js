// storm severity rating
function toggleRating(rating) {
    document.getElementById("value").innerHTML = rating;
}

function selectResponse() {
    const s = document.querySelector('#selected')
    const sel = document.querySelector('#storm-region');
    s.style.display = "block";
    s.textContent = sel.value;
}