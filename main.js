function moveDiv() {
    const x = Math.random() * (window.innerWidth - 100); // 100 is the width of the div
    const y = Math.random() * (window.innerHeight - 100); // 100 is the height of the div
    movingDiv.style.left = `${x}px`;
    movingDiv.style.top = `${y}px`;
}

function startMoving() {
    moveDiv(); // Move the div initially
    const moveInterval = setInterval(moveDiv, 1000); // Move the div every second

    // Stop moving after 10 seconds
    setTimeout(() => {
        clearInterval(moveInterval);
        movingDiv.style.display = 'none';
    }, 20000); // Change 10000 to any duration in milliseconds
}

startMoving(); // Start the movement