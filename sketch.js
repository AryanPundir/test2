
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1
var ground1
var boy1
var mango8 , mango2,mango3,mango4, mango5,mango6,mango7, mango8
var stone1
var rope1


function preload()
{
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });

	//Create the Bodies Here.
tree1 = new Tree(580,450,450,450)

ground1 = new Ground(400,680,800,20)

boy1 = new Boy(160,610,250,250)

mango1 = new Mango(580,300,50,50);
mango2 = new Mango(580,360,50,50);
mango3 = new Mango(640,300,50,50);
mango4 = new Mango(640,360,50,50);
mango5 = new Mango(530,300,50,50);
mango6 = new Mango(530,360,50,50);
mango7 = new Mango(690,380,50,50);
mango8 = new Mango(480,380,50,50);

stone1 = new Stone(90,550,65,65)

rope1 = new Rope(stone1.body,{x:90,y:550})


	Engine.run(engine);
	Matter.Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  

  tree1.display();

  ground1.display();

  boy1.display();

  mango8.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone1.display();

  rope1.display();

 detectCollision(stone1,mango8);
 detectCollision(stone1,mango7);
 detectCollision(stone1,mango6);
 detectCollision(stone1,mango5);
 detectCollision(stone1,mango4);
 detectCollision(stone1,mango3);
 detectCollision(stone1,mango2);
 detectCollision(stone1,mango1);
  
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope1.fly();
}

function detectCollision( lstone, lmango ){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition= lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Body.setStatic(lmango.body,false)
	}

}