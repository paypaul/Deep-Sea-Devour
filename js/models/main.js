// Get game canvas element
let gameCanvas = document.getElementById("gameCanvas");

// Set canvas to max screen size
function maximizeCanvas() {
    gameCanvas.style.height = window.innerHeight + "px";
    gameCanvas.style.width = window.innerWidth + "px";
}

// Resize canvas if window is resized
window.addEventListener("resize", maximizeCanvas);

// let deepSeaDevour = new GameEngine( gameCanvas );