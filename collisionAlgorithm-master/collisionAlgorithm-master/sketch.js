var Ball, Player ;

function setup() {
  createCanvas(1200,800);
  Ball = createSprite(600, 400, 50, 50);
  Player = createSprite(400,400,80,30);
  
  Player.velocityX = 2;
  Ball.velocityX = -2;

  
}

function draw() {
  background(0,0,0);  
  
  bounceOff(Ball,Player);

  
  drawSprites();
}



