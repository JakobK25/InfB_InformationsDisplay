let ats_logo;
let tickerText = "DETTE ER EN TEST - DETTE ER EN TEST - DETTE ER EN TEST - DETTE ER EN TEST";
let xPos = 0;
let speed = 1.7;
let Skoleplan;

function preload() {
  ats_logo = loadImage("img/ats_logo.png");
  Skoleplan = loadImage("img/plan.png")
  console.log("preload done");
}

function setup() {
  createCanvas(1920, 200);
  mgr = new SceneManager();
  mgr.addScene(dashboard);
  mgr.addScene(booker);
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
  textSize(100);
  fill(85, 85, 85); // Set fill color to davy grey
  text("AARHUS TECH", 160, 130);

  renderTicker();
}

function renderTicker() {
  textSize(50);
  fill(83, 83, 83);

  // Draw a red rectangle behind the ticker text
  fill(234, 49, 43); // Set fill color to red
  rect(0, 150, width, 80); // Adjust the position and size as needed

  // Render ticker text
  fill(255, 255, 255); // Set fill color to white
  text(tickerText, xPos, 190); // Removed height parameter

  // Move ticker text
  xPos += speed;

  // Check for reset condition
  if (xPos > width) {
    xPos = -textWidth(tickerText);
  }
}

function dashboard() {
  this.enter = function () {
    createCanvas(1920, 200);
    background(169, 169, 169);
    console.log("dashboard");
  }
}

function booker() {
  this.enter = function () {
    createCanvas(1920, 1080);
    background(169, 169, 169);
    console.log("booker");
  }
}

function kantine() {
  this.enter = function() {
    createCanvas(1920, 880);
    textSize(24);
    textAlign(CENTER, CENTER);
  
    let currentWeekMenus = [
      "Svensk pølseret",
      "Burger",
      "Boller i karry",
      "Kylling i karry",
      "Pølsemix"
    ];
  
    let nextWeekMenus = [];
  
    let currentWeekNumber;
    let displayCurrentWeek = true;
  
    calculateNextWeek();
    updateMenus();
  
    function calculateNextWeek() {
      nextWeekMenus = [
        "Pita",
        "Lasagne",
        "Frikadeller",
        "Sandwich",
        "Panini"
      ];
      displayCurrentWeek = false;
    }
  
    function updateMenus() {
      let today = new Date();
      currentWeekNumber = getWeekNumber(today);
  
      background(169, 169, 169);
  
      fill(83, 83, 83);
      rect(920, 20, 200, 50, 10);
      fill(255);
      text("Uge " + currentWeekNumber, 1020, 45);
  
      displayWeekMenus(currentWeekMenus, 500, 100);
  
      fill(83, 83, 83);
      rect(920, 420, 200, 50, 10);
      fill(255);
      text("Uge " + (currentWeekNumber + 1), 1020, 445);
  
      displayWeekMenus(nextWeekMenus, 500, 500);
    }
  
    function displayWeekMenus(menus, startX, startY) {
      let spacingX = 225;
      textSize(24);
      fill(255);
  
      let weekdays = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag"];
      for (let i = 0; i < weekdays.length; i++) {
        drawWeekdayBox(startX + i * spacingX, startY, weekdays[i]);
        drawMenuBox(startX + i * spacingX, startY + 80, menus[i]);
      }
    }
  
    function drawWeekdayBox(x, y, weekday) {
      let boxWidth = 150;
      let boxHeight = 50;
  
      fill(241, 242, 125);
      rect(x, y, boxWidth, boxHeight, 10);
      fill(0);
      textStyle(BOLD);
      text(weekday, x + boxWidth / 2, y + boxHeight / 2);
    }
  
    function drawMenuBox(x, y, menuText) {
      let boxWidth = 150;
      let boxHeight = 100;
  
      fill(83, 83, 83);
      rect(x, y, boxWidth, boxHeight, 10);
      fill(255);
      textStyle(NORMAL);
      text(menuText, x + boxWidth / 2, y + boxHeight / 2);
    }
  
    function getWeekNumber(date) {
      let onejan = new Date(date.getFullYear(), 0, 1);
      let millisecsInDay = 86400000;
      return Math.ceil((((date - onejan) / millisecsInDay) + onejan.getDay() + 1) / 7);
    }
  }
}  