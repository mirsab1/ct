// Set the date to countdown to
const countdownDate = new Date('2024-12-31T23:59:59').getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('days').innerText = formatTime(days);
  document.getElementById('hours').innerText = formatTime(hours);
  document.getElementById('minutes').innerText = formatTime(minutes);
  document.getElementById('seconds').innerText = formatTime(seconds);

  // If the countdown is finished, stop updating
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.countdown').innerText = 'Countdown expired';
  }
}, 1000);

// Add leading zero if the number is less than 10
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
