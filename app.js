let car = document.getElementById('car');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let interval;
let position = 0;

startBtn.addEventListener('click', function() {
    clearInterval(interval); // Clear any existing interval to prevent speed up
    interval = setInterval(moveCar, 10); // Move the car every 10 milliseconds
});

stopBtn.addEventListener('click', function() {
    clearInterval(interval); // Stop moving the car
});

function moveCar() {
    if (position > window.innerWidth) {
        position = -50; // Reset car position if it goes out of the window
    } else {
        position += 2; // Increase car position by 2px
    }
    car.style.left = position + 'px';
}