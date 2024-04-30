let ats_logo;
let tickerText = "DETTE ER EN TEST";
let xPos = 0;
let speed = 1.7;

function preload() {
  ats_logo = loadImage("img/ats_logo.png");
  console.log("preload done");
}

function setup() {
  createCanvas(1920, 1080);

  mgr = new SceneManager();
  mgr.addScene(dashboard);
  mgr.addScene(book);
  mgr.addScene(afbook);
  mgr.addScene(kantine);
  mgr.showScene(dashboard);

  

  frameRate(60); // Adjust frame rate to manage drawing speed
  
  console.log("setup done");

}

function draw() {
  clear()
  mgr.draw();
  background(169, 169, 169);

  image(ats_logo, 20, 20, 120, 120);
  textSize(100)
  text("AARHUS TECH", 160, 130);

  renderTicker();

  let c1 = color('#EA2C31');
  fill(c1);
  rect(1920, 80, 120, 0);
}

function renderTicker() {
  textSize(50);

  // Render ticker text
  fill(83, 83, 83);
  text(tickerText, xPos, 190);

  

  // Move ticker text
  xPos += speed;

  // Check for reset condition
  if (xPos > width) {
    xPos = -textWidth(tickerText);
  }
}

function dashboard() {
  this.enter = function() {
    createCanvas(1920, 200);
    background(169, 169, 169);
    console.log("dashboard");
  }
}

function book() {
  this.enter = function() {
    createCanvas(1920, 1080);
    background(169, 169, 169);
    console.log("booker");
  }
}

function afbook() {
  this.enter = function() {
    createCanvas(1920, 1080);
    background(169, 169, 169);
    console.log("booker");
  }
}

function kantine() {
  this.enter = function() {
    createCanvas(1920, 1080);
    background(169, 169, 169);
    console.log("kantine");
  }
}
