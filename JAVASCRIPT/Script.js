function updateClock() {
  const now = new Date();

  // TIME
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;

  // DATE
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const dayStr = day < 10 ? "0" + day : day;
  const monthStr = month < 10 ? "0" + month : month;

  const dateString = `${dayStr}-${monthStr}-${year}`;

  // Display
  document.getElementById("clock").textContent = timeString;
  document.getElementById("date").textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("clock").textContent = `${h}:${m}:${s}`;
}

function updateDate() {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = days[now.getDay()];
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  document.getElementById(
    "date"
  ).textContent = `${dayName}, ${day}-${month}-${year}`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateClock();
  updateDate();

  setInterval(updateClock, 1000);
  setInterval(updateDate, 60000);
});
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".mainpics img");
  let current = 0;

  images[current].classList.add("active");

  setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }, 2500);
});
