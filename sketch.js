var car1,car2,car3,car4;
var wall1;
var speed;
var weight1,weight2,weight3,weight4;
function setup() {
  createCanvas(900,900);
  //Car 1 Sprites.
  car1=createSprite(0, 200, 50, 50);
  
  speed=random(50,90);
  car1.velocityX=speed;
  weight1=round(random(0,200));
  car1.setCollider("rectangle",0,0,60,60);
  //car1.debug=true;

  //Car 2 Sprites
  car2=createSprite(0, 400, 50, 50);
  speed=round(random(80,10));
  weight2=random(400,1500);
  car2.velocityX=speed;
  car2.setCollider("rectangle",0,0,60,60);

  //Car 3 Sprites
  car3=createSprite(0, 600, 50, 50);
  speed=round(random(50,100));
  weight3=random(400,1500);
  car3.velocityX=speed;
  car3.setCollider("rectangle",0,0,60,60);

  //Car 4 Sprites
  car4=createSprite(0, 800, 50, 50);
  speed=round(random(30,200));
  weight4=random(400,1500);
  car4.velocityX=speed;
  car4.setCollider("rectangle",0,0,60,60);

  wall1=createSprite(750,200,40,70);
  wall2=createSprite(750,400,40,70);
  wall3=createSprite(750,600,40,70);
  wall4=createSprite(750,800,40,70);
  
}

function draw() {
  background(0);  
  checkCollision(car1,speed,weight1,wall1);
  checkCollision(car2,speed,weight2,wall2);
  checkCollision(car3,speed,weight3,wall3);
  checkCollision(car4,speed,weight4,wall4);
  drawSprites();
}

function checkCollision(obj1,speed,weight,wall)
{
  if(wall.x-(obj1.x)<(wall.width/2+obj1.width/2))
  {
    obj1.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500.0;
    if(deformation>=180)
    {
      obj1.shapeColor="RED";
    }
    else if(deformation>=80 && deformation<180)
    {
      obj1.shapeColor="Yellow";
    }
    else
    {
      obj1.shapeColor="Green";
    }
  }
}