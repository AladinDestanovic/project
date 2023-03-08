const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get("points");
const totalPoints = urlParams.get("total");
document.getElementById("points").textContent =
  score + " out of " + totalPoints;
