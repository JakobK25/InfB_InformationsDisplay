let ats_logo;
let tickerText = "Husk Fodboldtrøjefredag på fredag! - Brug din stemme: EU-VALGET 9. Juni 2024 - Elever er med i Korners kunstkonkurrence 2024";
let xPos = 0;
let speed = 2;
let Skoleplan;

function preload() {
  ats_logo = loadImage("img/ats_logo.png");
  Skoleplan = loadImage("img/plan.png")
  eu_valg = loadImage("img/eu_valg.jpg")
  film_fest = loadImage("img/film_fest.jpg")
  fodbold = loadImage("img/fodbold.jpg")
  volleyball = loadImage("img/volleyball.jpg")
  console.log("preload done");
}

function setup() {
  createCanvas(1920, 1080);
  mgr = new SceneManager();
  mgr.addScene(dashboard);
  mgr.addScene(booker);
  mgr.addScene(kantine);
  mgr.addScene(debook);
  mgr.showScene(dashboard);
  frameRate(60); // Adjust frame rate to manage drawing speed
  console.log("setup done");

}

function draw() {
  mgr.draw();
  
  //background(255, 255, 255);

  fill(169, 169, 169);
  rect(0, 0, 1920, 120);
  textAlign(LEFT, BASELINE);
  image(ats_logo, 5, 0, 120, 120);
  textSize(100);
  fill(85, 85, 85); // Set fill color to davy grey
  text("AARHUS TECH", 140, 100);


  // Display current time
  textSize(75);
  fill(85, 85, 85); // Set fill color to davy grey
  text(currentTime(), 1400, 100); // Adjust position as needed

  textSize(75);
  fill(85, 85, 85); // Set fill color to davy grey
  text(currentDate(), 1650, 100); // Adjust position as needed

  renderTicker();
}

function renderTicker() {
  textSize(50);
  fill(83, 83, 83);

  // Draw a red rectangle behind the ticker text
  fill(234, 44, 49); // Set fill color to red
  rect(0, 120, 1920, 80); // Adjust the position and size as needed

  // Render ticker text
  fill(255, 255, 255); // Set fill color to white
  text(tickerText, xPos, 180); // Removed height parameter

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

function currentDate() {
  let date = new Date(); 
  let day = date.getDate();
  let monthIndex = date.getMonth();

  // Array of month names in uppercase
  let monthNames = ["JAN", "FEB", "MAR", "APR", "MAJ", "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DEC"];

  // Get the month name from the array using the month index
  let monthName = monthNames[monthIndex];

  // Return date as a string
  return day + ". " + monthName;
}

function dashboard() {

  this.enter = function () {
    createCanvas(1920, 1080);
    background(255, 255, 255);
    
    fill(169, 169, 169)
    rect(10, 220, 890, 760);
    rect(920, 220, 990, 760);
    
    image(fodbold, 960, 240, 280, 360);
    image(eu_valg, 1270, 240, 280, 360);
    image(film_fest, 1580, 235, 280, 360);
    image(volleyball, 1040, 610, 280, 360);
    image(Skoleplan, 40, 400, 800, 400);

    let book_btn,  debook_btn, frokost_btn;
    
    book_btn = createButton('Book Lokale');
    book_btn.position(275, 1000);
    book_btn.size(240, 60);
    book_btn.style('background-color','#B3EE55');
    book_btn.style('color','black');
    book_btn.style('border-radius','10px');
    book_btn.style('font-size','24px');
    book_btn.mousePressed(function () {
      mgr.showScene(booker);
      hideButtons();
    });

    debook_btn = createButton('Afbook Lokale');
    debook_btn.position(25, 1000);
    debook_btn.size(240, 60);
    debook_btn.style('background-color','#EA2C31');
    debook_btn.style('color','black');
    debook_btn.style('border-radius','10px');
    debook_btn.style('font-size','24px');
    debook_btn.mousePressed(function () {
      mgr.showScene(debook);
      hideButtons();
    });

    frokost_btn = createButton('Frokost Menu');
    frokost_btn.position(1650, 1000);
    frokost_btn.size(240, 60);
    frokost_btn.style('background-color','#B3EE55');
    frokost_btn.style('color','black');
    frokost_btn.style('border-radius','10px');
    frokost_btn.style('font-size','24px');
    frokost_btn.mousePressed(function () {
      mgr.showScene(kantine);
      hideButtons();
    });

    function hideButtons() {
      book_btn.hide();
      debook_btn.hide();
      frokost_btn.hide();
    }
    
    console.log("dashboard");
  }
}

function debook() {
  this.enter = function () {
    console.log("debook");
    createCanvas(1920, 1080);
    background(255, 255, 255);
    fill(169, 169, 169)
    rect(10, 220, 1900, 760)

    image(Skoleplan, 600, 240, 1200, 600);

    let back_btn;

    back_btn = createButton('Tilbage');
    back_btn.position(1650, 1000);
    back_btn.size(240, 60);
    back_btn.style('background-color','#EA2C31');
    back_btn.style('color','black');
    back_btn.style('border-radius','10px');
    back_btn.style('font-size','24px');
    back_btn.mousePressed(function () {
      mgr.showScene(dashboard);
      hideButtons();
    });

    function hideButtons() {
      back_btn.hide();
    }

    BoxOptaget(30, 240);
    BoxOptaget(30, 320);
    BoxOptaget(30, 400);
    BoxOptaget(30, 480);
    BoxOptaget(30, 560);
    BoxOptaget(30, 640);
    BoxOptaget(30, 720);
    
    BooketLokale(200, 240, "Lokale SH117")
    BooketLokale(200, 320, "Lokale SH118")
    BooketLokale(200, 400, "Lokale SH208")
    BooketLokale(200, 480, "Lokale SH211")
    BooketLokale(200, 560, "Lokale SH213")
    BooketLokale(200, 640, "Lokale SH219")
    BooketLokale(200, 720, "Lokale SH221")
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
    createCanvas(1920, 1080);
    background(255, 255, 255);
    fill(169, 169, 169)
    rect(10, 220, 1900, 760)

    image(Skoleplan, 600, 240, 1200, 600);

    let back_btn, back_btn_text;

   
  
    back_btn = createButton('Tilbage');
    back_btn.position(1650, 1000);
    back_btn.size(240, 60);
    back_btn.style('background-color','#EA2C31');
    back_btn.style('color','black');
    back_btn.style('border-radius','10px');
    back_btn.style('font-size','24px');
    
    back_btn.mousePressed(function () {
      mgr.showScene(dashboard);
      hideButtons();
    });

    function hideButtons() {
      back_btn.hide();
    }

    BoxLedig(30, 240);
    BoxLedig(30, 320);
    BoxLedig(30, 400);
    BoxLedig(30, 480);
    BoxLedig(30, 560);
    BoxLedig(30, 640);
    BoxLedig(30, 720);
    BoxLedig(30, 800);

    BoxLokale(200, 240, "Lokale SH117")
    BoxLokale(200, 320, "Lokale SH118")
    BoxLokale(200, 400, "Lokale SH208")
    BoxLokale(200, 480, "Lokale SH211")
    BoxLokale(200, 560, "Lokale SH213")
    BoxLokale(200, 640, "Lokale SH219")
    BoxLokale(200, 720, "Lokale SH220")
    BoxLokale(200, 800, "Lokale SH222")

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
    console.log("katine");
    createCanvas(1920, 1080);
    background(255, 255, 255);

    fill(169, 169, 169)
    rect(10, 220, 1900, 760)

    let back_btn;

    back_btn = createButton('Tilbage');
    back_btn.position(1650, 1000);
    back_btn.size(240, 60);
    back_btn.style('background-color','#EA2C31');
    back_btn.style('color','black');
    back_btn.style('border-radius','10px');
    back_btn.style('font-size', '24px');
    back_btn.mousePressed(function () {
      mgr.showScene(dashboard);
      hideButtons();
    });

    function hideButtons() {
      back_btn.hide();
    }  

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



      fill(83, 83, 83);
      rect(65, 240, 130, 50, 10);
      fill(255);
      textSize(24);
      textStyle(BOLD);
      textAlign(CENTER, CENTER);
      text("Uge " + currentWeekNumber, 130, 270);

      displayWeekMenus(currentWeekMenus, 65, 340);

      fill(83, 83, 83);
      rect(65, 600, 130, 50, 10);
      fill(255);
      textSize(24);
      textStyle(BOLD);
      textAlign(CENTER, CENTER);
      text("Uge " + (currentWeekNumber + 1), 130, 630);

      displayWeekMenus(nextWeekMenus, 65, 700);
    }

    function displayWeekMenus(menus, startX, startY) {
      let spacingX = 354;
      textSize(24);
      fill(255);

      let weekdays = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag"];
      for (let i = 0; i < weekdays.length; i++) {
        drawWeekdayBox(startX + i * spacingX, startY, weekdays[i]);
        drawMenuBox(startX + i * spacingX, startY + 80, menus[i]);
      }
    }

    function drawWeekdayBox(x, y, weekday) {
      let boxWidth = 300;
      let boxHeight = 60;

      fill(241, 242, 125);
      rect(x, y, boxWidth, boxHeight, 10);
      fill(0);
      textStyle(BOLD);
      text(weekday, x + boxWidth / 2, y + boxHeight / 2);
    }
    
    function drawMenuBox(x, y, menuText) {
      let boxWidth = 330;
      let boxHeight = 60;

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