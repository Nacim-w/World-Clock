function updateClock(city, offset) {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const newTime = new Date(utc + (3600000 * offset));
    const hours = newTime.getHours().toString().padStart(2, '0');
    const minutes = newTime.getMinutes().toString().padStart(2, '0');
    const seconds = newTime.getSeconds().toString().padStart(2, '0');
    document.getElementById(city + '-time').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  function updateTime() {
    updateClock('new-york', -5); // New York (UTC-5)
    updateClock('london', 0);    // London (UTC+0)
    updateClock('tokyo', 9);      // Tokyo (UTC+9)
  }
  
  setInterval(updateTime, 1000); // Update every second
  