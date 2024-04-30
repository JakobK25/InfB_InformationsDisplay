let content = 'This is a test of the ticker ';
let x = 0;
let xSpeed = 5; // Speed of the ticker

function setup() {
  createCanvas(1920, 1080);
  background('red');

  mgr = new SceneManager();
  mgr.addScene(dashboard);
  mgr.showScene(dashboard);

  // Initialize x to be the canvas width so it starts off the right side of the screen
  x = width;
}

function draw() {
  mgr.draw();
}

function dashboard() {
  background('red'); // Clear the canvas for the new frame
  ticker(); // Call the ticker function to draw and move the text
}
