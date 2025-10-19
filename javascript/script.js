function updateLocalTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
  const dateString = now.toLocaleDateString([], {weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'});
  document.getElementById("local-time").textContent = `${dateString}, ${timeString}`;
}

function updateCityTime(timezone) {
  if (!timezone) {
    document.getElementById("city-time").textContent = "";
    return;
  }

  const now = new Date();
  const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second:'2-digit', weekday:'long', day:'numeric', month:'short', year:'numeric' };
  const cityTime = now.toLocaleString([], options);
  document.getElementById("city-time").textContent = cityTime;
}

document.getElementById("countries").addEventListener("change", function() {
  const tz = this.value;
  updateCityTime(tz);
});

// Update local time every second
updateLocalTime();
setInterval(updateLocalTime, 1000);
