const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(1500,50);

	bob1 = new Pendulum(490,300,6);
	bob2 = new Pendulum(555,300,6);
	bob3 = new Pendulum(620,300,6);
	bob4 = new Pendulum(685,300,6);
	bob5 = new Pendulum(750,300,6);

	rope1 = new Sling(bob1.body,{x: 490, y: 50});
	rope2 = new Sling(bob2.body,{x: 555, y: 50});
	rope3 = new Sling(bob3.body,{x: 620, y: 50});
	rope4 = new Sling(bob4.body,{x: 685, y: 50});
	rope5 = new Sling(bob5.body,{x: 750, y: 50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x: mouseX, y: mouseY});
}