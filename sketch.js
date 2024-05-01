let ats_logo;
let tickerText = "Husk Fodboldtrøjefredag på fredag! - Brug din stemme. EU-VALGET 9. Juni 2024 - Elever er med i Korners kunstkonkurrence 2024";
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

  // Display current time
  textSize(100);
  fill(0, 0, 0); // Set fill color to black
  text(currentTime(), 1600, 125); // Adjust position as needed

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
  xPos -= speed;

  // Check for reset condition
  if (xPos < -textWidth(tickerText)) { // Changed condition
    xPos = width;
  }
}

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();

  mm = String(mm).padStart(2, '0');

  return hh + ":" + mm;
}

function dashboard() {

  this.enter = function () {
    console.log("hello")
    createCanvas(1920, 1080);
    background(169, 169, 169);

    let book_btn = createButton('Book Lokale');
    let debook_btn = createButton('Afbook Lokale');
    let frokost_btn = createButton('Frokost Menu');

    book_btn.position(275, 1000);
    debook_btn.position(25, 1000);
    frokost_btn.position(1640, 1000);

    book_btn.size(240, 60);
    debook_btn.size(240, 60);
    frokost_btn.size(240, 60);
    
    book_btn.style('background-color','#B3EE55');
    debook_btn.style('background-color','#EA2C31');
    frokost_btn.style('background-color','#B3EE55');

    book_btn.mousePressed(function () {
      mgr.showScene(booker);
    });

    debook_btn.mousePressed(function () {
      mgr.showScene(booker);
    });

    frokost_btn.mousePressed(function () {
      mgr.showScene(kantine);
    });
    
    console.log("dashboard");
  }
}

function afbook() {
  function setup() {
    createCanvas(1920, 880);
    background(169, 169, 169);
    
    BoxOptaget(20, 10);
    BoxOptaget(20, 90);
    BoxOptaget(20, 170);
    BoxOptaget(20, 250);
    BoxOptaget(20, 330);
    BoxOptaget(20, 410);
    BoxOptaget(20, 490);
    BoxOptaget(20, 570);
    BoxOptaget(20, 650);
    BoxOptaget(20, 730);
    BoxOptaget(20, 810);
    
    BooketLokale(200, 10, "Lokale SH117")
    BooketLokale(200, 90, "Lokale SH118")
    BooketLokale(200, 170, "Lokale SH208")
    BooketLokale(200, 250, "Lokale SH211")
    BooketLokale(200, 330, "Lokale SH213")
    BooketLokale(200, 410, "Lokale SH219")
    BooketLokale(200, 490, "Lokale SH220")
    
  }
  
  function BoxOptaget(x, y) {
    // Draw the box
    fill(234, 44, 49);
    rect(x, y, 160, 60, 10);
    
    // Draw the text
    fill(255);
    textSize(35);
    text("Optaget", x + 15, y + 40);
  }
    
  function BooketLokale(x, y, Lokale) {
    // Draw the box
    fill(241, 242, 125);
    rect(x, y, 250, 60, 10);
    
    // Draw the text
    fill(0);
    textSize(35);
    text(Lokale, x + 20, y + 40);
    
  }  
}

function booker() {
  this.enter = function () {
    console.log("booker");
    createCanvas(1920, 880);
    background(169, 169, 169);

    BoxLedig(20, 10);
    BoxLedig(20, 90);
    BoxLedig(20, 170);
    BoxLedig(20, 250);
    BoxLedig(20, 330);
    BoxLedig(20, 410);
    BoxLedig(20, 490);
    BoxLedig(20, 570);
    BoxLedig(20, 650);
    BoxLedig(20, 730);
    BoxLedig(20, 810);

    BoxLokale(200, 10, "Lokale SH117")
    BoxLokale(200, 90, "Lokale SH118")
    BoxLokale(200, 170, "Lokale SH208")
    BoxLokale(200, 250, "Lokale SH211")
    BoxLokale(200, 330, "Lokale SH213")
    BoxLokale(200, 410, "Lokale SH219")
    BoxLokale(200, 490, "Lokale SH220")

  }

  function BoxLedig(x, y) {
    // Draw the box
    fill(179, 238, 85);
    rect(x, y, 160, 60, 10);

    // Draw the text
    fill(255);
    textSize(35);
    text("Ledig", x + 35, y + 40);
  }

  function BoxLokale(x, y, Lokale) {
    // Draw the box
    fill(241, 242, 125);
    rect(x, y, 250, 60, 10);

    // Draw the text
    fill(0);
    textSize(35);
    text(Lokale, x + 20, y + 40);

  }

}


function kantine() {
  this.enter = function () {
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