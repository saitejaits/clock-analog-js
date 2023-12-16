let hrEl = document.getElementById("hour");
let minEl = document.getElementById("min");
let secEl = document.getElementById("sec");

function displayTime() {
  let data = new Date();

  // Getting hour , mins , secs from  data
  let hh = data.getHours();
  let mm = data.getMinutes();
  let ss = data.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hrEl.style.transform = `rotate(${hRotation}deg)`;
  minEl.style.transform = `rotate(${mRotation}deg)`;
  secEl.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displayTime, 1000);
