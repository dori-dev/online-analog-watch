setInterval(setClock, 1000);

const hourHands = document.querySelector("[data-hour-hand]");
const minHands = document.querySelector("[data-min-hand]");
const secHands = document.querySelector("[data-sec-hand]");

function setClock() {
  const currentDate = new Date();
  const secRatio = currentDate.getSeconds() / 60;
  const minRatio = currentDate.getMinutes() / 60;
  const hourRatio = (currentDate.getHours() + minRatio) / 12;
  setRotation(secHands, secRatio);
  setRotation(minHands, minRatio);
  setRotation(hourHands, hourRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
