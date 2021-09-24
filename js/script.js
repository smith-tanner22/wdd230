
const copyrightyear = document.getElementById("currentdate2");
copyrightyear.textContent = new Date().getFullYear();

var string = document.getElementById("lastmodified");
string.textContent = new Date(document.lastModified);