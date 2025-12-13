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

