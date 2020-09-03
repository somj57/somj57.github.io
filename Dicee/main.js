var no1 = Math.floor(Math.random() * 6 + 1);
var no2 = Math.floor(Math.random() * 6 + 1);

document.querySelector(".img1").src = "images/dice" + no1 + ".png";
document.querySelector(".img2").src = "images/dice" + no2 + ".png";

if (no1 == no2) {
  document.querySelector("h1").innerHTML = "Draw";
} else if (no1 > no2) {
  document.querySelector("h1").innerHTML = "Player One Win";
} else if (no1 < no2) {
  document.querySelector("h1").innerHTML = "Player Two Win";
}
