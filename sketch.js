function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    // using RGB values we make each choose a random number and inject that into the fill method when a button is clicked
    
    var r = random(255);
    var g = random(255);
    var b = random(255);
    fill(r, g, b);
  } else {
    
    var greyscale = random(255);
    fill(greyscale);
  }
  ellipse(mouseX, mouseY, 80, 80);
}