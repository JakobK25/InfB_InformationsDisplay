function setup() {
    background(red)
    createCanvas(1920, 1080);

    mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    mgr.addScene(dashboard);
    mgr.showScene(dashboard);
  }
  
  function draw() {
    mgr.draw();
  }

  function dashboard() {
    
  }