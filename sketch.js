function setup() {
  createCanvas(1920, 1080);
  background('red');

  mgr = new SceneManager();
  mgr.addScene(dashboard);
  mgr.addScene(booker);
  mgr.addScene(kantine);

  mgr.showScene(dashboard);

}

function draw() {
  mgr.draw();
}

function dashboard() {
  background('red'); // Clear the canvas for the new frame
  ticker(); // Call the ticker function to draw and move the text
}
