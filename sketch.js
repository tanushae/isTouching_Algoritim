var a,b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(700, 200, 100, 100);
}

function draw() {
  background(255,255,255);  
  b.x = World.mouseX;
  b.y = World.mouseY;
  if (isTouching(b,a)){
    b.shapeColor = "purple";
    a.shapeColor = "purple";
  }
  else{
    b.shapeColor = "red";
    a.shapeColor = "red";
  }
  drawSprites();
}
