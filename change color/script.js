// Function to update the digital clock
function updateClock() {
    
    const now = new Date(); // Get current date & time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero if needed (e.g., 09:05:03) 9:5:3
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display time
    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
}

// Function to change background color
function changeColor() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = randomColor;
}

// Update clock every second
setInterval(updateClock, 1000);

updateClock();


setInterval(changeColor, 6000)

// Initialize clock when page loads

changeColor();


















// let now = new Date();
    // let hours = now.getHours().toString().padStart(2, '0');
    // let minutes = now.getMinutes().toString().padStart(2, '0');
    // let seconds = now.getSeconds().toString().padStart(2, '0');
    
    // document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;