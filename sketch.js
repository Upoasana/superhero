const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var box1,box2,box3;
var box1a,box1b,box1c,box1d,box1e;
var box2a,box2b,box2c,box2d,box2e;
var hero;
var gameState="still";
var ground1,ground2,ground3



function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine=Engine.create();
  world=engine.world;
ground=new Base(500,400,1000,30);
//ground1 = new Base(580,400,300,30);
box1= new Box(580,325,60,60);
box1a= new Box(580,323,60,60);
box1b= new Box(580,320,60,60);
//box1b= new Box(580,310,60,60);
box1c= new Box(580,318,60,60);
box1d= new Box(580,316,60,60);
box1e= new Box(580,314,60,60);


box2  =new Box(550,325)
box2a= new Box(550,323);
box2b= new Box(550,320,60,60);
box2c= new Box(550,318,60,60);
box2d= new Box(550,316,60,60);
box2e= new Box(550,314,60,60);


box3  = new Box(600,325) 
box3a= new Box(600,323);
box3b= new Box(600,318,60,60);
box3c= new Box(600,316,60,60);
box3d= new Box(600,314,60,60);
box3e= new Box(600,312,60,60);

hero = new Hero(200,200,150,150)
sling = new SlingShot(hero.body,{x:200 , y:100});

gameState="onSling"

}

function draw() {
  background("skyblue");
  Engine.update(engine);

ground.display();
//ground1.display();


box1.display();
box1a.display();
box1b.display();
box1c.display();
box1d.display();
box1e.display();

box2.display();
box2a.display();
box2b.display();
box2c.display();
box2d.display();
box2e.display();

box3.display();
//box2.display();
box3a.display();
box3b.display();
box3c.display();
box3d.display();
box3e.display();

hero.display();

}


function mouseDragged()
{
    if(gameState!=="launched"){

    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
}
function mouseReleased()
{


    sling.fly()
    gameState="launched"
}
function keyPressed()
{
if (keyCode===32)
{

    sling.attach(bird.body)
}

}

