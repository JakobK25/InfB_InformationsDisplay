let ats_logo

function preload() {
  images = [
    loadImage('img/ats_logo.png'),
  ];
}

function setup() {
  createCanvas(1920, 1080);

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
  this.enter = function() {
    createCanvas(1920, 1080);
    background(A9A9A9);

    image(ats_logo, 0, 0, 200, 200);
    
  }
}
