function setClock() {
  const currentTime = new Date();
  const clock = document.getElementById("clock");

  const hour = currentTime.getHours();
  const min = currentTime.getMinutes();
  const sec = currentTime.getSeconds();

  const hourTime = updateTime(hour);
  const minTime = updateTime(min);
  const secTime = updateTime(sec);

  if (hourTime)
    return (clock.innerHTML =
      hourTime + " : " + minTime + " : " + secTime + " AM");
  return (clock.innerHTML =
    hourTime + " : " + minTime + " : " + secTime + " PM");
}

function updateTime(v) {
  if (v < 10) return `0${v}`;
  else return v;
}

setInterval(() => setClock(), 1000);
