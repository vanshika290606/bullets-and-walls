var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
 thickness= random(22,83);
 wall=createSprite(1200,200,30,height/2);
 speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed
  bullet.shapeColor="blue"
  wall.shapeColor="grey"
  
}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall)){
bullet.velocityX=0;
  
  damage=0.5*weight*speed*speed/thickness*thickness*thickness 
  if(damage>20){
    wall.shapeColor="pink"

  }

if(damage<20){
  wall.shapeColor="red"
}
}
 
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}