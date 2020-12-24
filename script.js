const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const clockEl = document.querySelector(".clock");

setInterval(() => {
  rotate();
}, 500);

const date = new Date();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

let hourHand = (hour * 360) / 12 + (min * (360 / 60)) / 12 - 90;
let minHand = (min * 360) / 60 + (min * (360 / 60)) / 60 - 90;
let secHand = (sec * 360) / 60 - 90;

function rotate() {
  hourHand = hourHand + 3 / 360;
  minHand = minHand + 6 / 60;
  secHand = secHand + 6;
  clockEl.title = `${Math.round(hour)}hr ${min}min ${sec}sec`;
  hourEl.style.transform = "rotate(" + hourHand + "deg)";
  minEl.style.transform = "rotate(" + minHand + "deg)";
  secEl.style.transform = "rotate(" + secHand + "deg)";
}
