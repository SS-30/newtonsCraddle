
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ball1=new Ball(560,350,50,30)
	ball2=new Ball(480,350,50,30)
	ball3=new Ball(400,350,50,30)
	ball4=new Ball(320,350,50,30)
	ball5=new Ball(250,350,50,30)
  rect1=new Roof(400,100,400,20)
  string1=new String(ball1.body,{x:200, y:50});
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red")
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  fill("blue");
  rect1.display();
  fill("green");
  string1.display();
  drawSprites();

 
}



