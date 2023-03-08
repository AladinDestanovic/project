const urlParams = new URLSearchParams(window.location.search);
const points = urlParams.get("points");
document.getElementById("poeni").textContent = points;
