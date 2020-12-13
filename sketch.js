const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies                                                                                                                                                                                                                    


var universe,earth;
var human,ball;
var box1,box2,box3,box4

var ground1
var pig ,pig2
var log ,log2
var bird


function setup() { 
  createCanvas(1200,500);
  universe = Engine.create(); // universe.world
  earth  = universe.world;

  box1 = new Box(500,400,60,60)
box2=new Box(700,400,60,60)
pig= new Pig (600,400)
log=new Log(600,350,300,PI/2)
box3=new Box(500,300,60,60)
box4=new Box(700, 300,60,60)
pig2= new Pig(600,300)
ground=new Ground(600,480,1200,10)
log2=new Log(600,200,300,PI/2)
bird= new Bird(10,10)
}

function draw() {
  Engine.update(universe)
  background(0); 
  
  box1.display();
 box2.display();
ground.display();
pig.display();
log.display();
box3.display();
box4.display();
pig2.display();
log2.display();
bird.display();
}