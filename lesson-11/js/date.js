// to add date
let d = new Date();
document.getElementById("copyrightYear").textContent = d.getFullYear();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
};

document.getElementById('currentDate').textContent = d.toLocaleDateString(
    "en-UK",
    options
);