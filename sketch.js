var bullet, wall, weight, speed, damage, thickness;

function setup() {

  //to change thickness, change variable value
  thickness=70;

  createCanvas(1600,400);
  bullet=createSprite(200, 200, 30, 10);
  bullet.shapeColor="white";

  bullet.debug=false;

  wall=createSprite(1500, 200, thickness, 400);
  wall.shapeColor=(80,80,80);
  wall.debug=false;
}

function draw() {
  background(0); 
  
  //to check damage, change the speed and weight variable values

  speed=300;
  weight=40;

  bullet.velocityX=speed;

  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0;

    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  }

  if (damage < 10){
    wall.shapeColor="lime";
  }

  if (damage > 10){
    wall.shapeColor="red";
  }
  drawSprites();
}

