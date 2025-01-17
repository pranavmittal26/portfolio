// script.js
const countdown = () => {
    const targetDate = new Date("2025-01-20T00:00:00").getTime(); // Adjust your target date here
    const now = new Date().getTime();
    const gap = targetDate - now;
  
    if (gap > 0) {
      const day = 1000 * 60 * 60 * 24;
      const hour = 1000 * 60 * 60;
      const minute = 1000 * 60;
      const second = 1000;
  
      const days = Math.floor(gap / day);
      const hours = Math.floor((gap % day) / hour);
      const minutes = Math.floor((gap % hour) / minute);
      const seconds = Math.floor((gap % minute) / second);
  
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    } else {
      document.querySelector(".countdown").innerHTML = "We are live!";
    }
  };
  
  setInterval(countdown, 1000);
  
