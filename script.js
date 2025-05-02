let is24HourFormat = false; // Default: 12-hour format
let isLightMode = false;

function updateClock() {
    let now = new Date();

    // Get time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format if needed
    if (!is24HourFormat) {
        hours = hours % 12 || 12;
    }

    // Add leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Update clock display
    document.getElementById('clock').innerText = is24HourFormat
        ? `${hours}:${minutes}:${seconds}` // 24-hour format (no AM/PM)
        : `${hours}:${minutes}:${seconds} ${ampm}`; // 12-hour format

    // Get and format date
    let options = { weekday: "long", month: "short", day: "numeric", year: "numeric" };
    let formattedDate = now.toLocaleDateString("en-US", options);
    document.getElementById('date').innerText = formattedDate;

    // ✅ Dynamically update button text based on current mode
    document.getElementById('toggleFormat').innerText = is24HourFormat
        ? "Switch to 12-Hour"
        : "Switch to 24-Hour";
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat; // Toggle the format
    updateClock(); // Update immediately to reflect changes
}

function toggleMode() {
    isLightMode = !isLightMode;
    document.body.classList.toggle("light-mode", isLightMode);
    document.getElementById("toggle-btn").innerText = isLightMode
    ? "Switch to Dark Mode"
    : "Switch to Light Mode";
}

// Attach event listener to the button
document.getElementById('toggleFormat').addEventListener('click', toggleFormat);
document.getElementById('toggle-btn').addEventListener('click', toggleMode);

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Run immediately to prevent delay

