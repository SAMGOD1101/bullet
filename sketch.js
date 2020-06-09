var wall , thickness;
var bullet , speed , weight;

function setup() {

createCanvas(1600,400);

 thickness=random(22,83);
wall=createSprite(1200,200,thickness,800);

speed=random(223,321);
weight=random(30,52);

bullet=createSprite(100,200,5,10)

bullet.velocityX=speed;

}

function draw() {
  background("white");


  if (wall.x-bullet.x<(bullet.width-wall.width)/2) {

    bullet.velocityX=0;
    var deformation=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);

    if (deformation>10) {
    wall.shapeColor="red";  
    }
    if (deformation<10) {
    wall.shapeColor="green";  
    }
  }


  drawSprites();
}



