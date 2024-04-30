let ats_logo;
let tickerText = "EU DEBAT: 9. JUNI  -  VINTERUDSTILLING: 25. JULI  -  FODBOLDTRØJE FREDAG: 7. JUNI";
let xPos = 1080;
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
createCanvas(1920, 200)

  mgr.draw();
  background(169, 169, 169);

  image(ats_logo, 20, 20, 120, 120);
  textSize(100);

  fill(83, 83, 83); // RGB color for grey
  text("AARHUS TECH", 160, 130);

  renderTicker();
}

function renderTicker() {
  textSize(50);

  fill(234, 44, 49); // RGB color for red
  rect(0, 150, width, 50); // Adjust the position and size as needed

  // Render ticker text
  fill(255, 255, 255); // RGB color for white
  text(tickerText, xPos, 195);

  // Move ticker text
  xPos -= speed;

  // Check for reset condition
  if (xPos <= -textWidth(tickerText)) {
    xPos = width;
  }
}

function dashboard() {
  this.enter = function() {
    fill(83, 83, 83)
    rect(0, 200, 1920, 1080)
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
