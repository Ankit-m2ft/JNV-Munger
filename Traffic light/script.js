let colors = ["red", "yellow", "green"]; // Traffic light colors
let index = 0; // Start with the first light
let interval;
let countdown = 10; // Countdown seconds for each light
let countdownInterval;

function startTrafficLight() {
    // if (interval) return; // Prevent multiple starts

    changeLight(); // Show first light immediately
    interval = setInterval(changeLight, 10000); // Change light every 2 seconds
}

function stopTrafficLight() {
    clearInterval(interval); // Stop light change
    clearInterval(countdownInterval); // Stop countdown
    interval = null;
    resetLights(); // Turn off all lights
}

function changeLight() {
    resetLights(); // Turn off all lights
    let currentLight = document.getElementById(colors[index]); // Get current light
    currentLight.style.background = colors[index]; // Turn on current light
    showCountdown(currentLight); // Show countdown
    index = (index + 1) % 3; // Move to the next light (0 → 1 → 2 → 0)
}

function resetLights() {
    colors.forEach(color => {
        document.getElementById(color).style.background = "gray"; // Turn off all lights
        document.getElementById(color).textContent = ""; // Clear countdown text
    });
}

function showCountdown(light) {
    let timeLeft = countdown;
    light.textContent = timeLeft; // Show initial countdown

    clearInterval(countdownInterval); // Clear any existing countdown
    countdownInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(countdownInterval); // Stop countdown when time is up
        } else {
            light.textContent = timeLeft; // Update countdown
        }
    }, 1000); // Decrease every 1 second
}
