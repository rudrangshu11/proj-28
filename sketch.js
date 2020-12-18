
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var player;
var floor;
var rock;
var rope, tree;
var mango1, mango2, mango3, mango4, mango5;
function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	floor = new Ground();
	player = new Boy(280, 510, 200, 300)
	rock = new Stone(200, 445);
	rope = new Chain(rock.body, {x: 200, y:445});
	tree = new Tree(800, 350, 600, 500)
	mango1 = new Mango(700, 250)
	mango2 = new Mango(900, 300)
	mango3 = new Mango(600, 350);
	mango4 = new Mango(1000, 220);
	mango5 = new Mango(800, 200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightblue');
  player.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  floor.display();
  rock.display();
  detectCollision(mango1, rock);
  detectCollision(mango2, rock);
  detectCollision(mango3, rock);
  detectCollision(mango4, rock);
  detectCollision(mango5,rock);
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    rope.fly();
}
function detectCollision(lmango, lstone){
  mangoObj = lmango.body.position;
  stoneObj = lstone.body.position;
  var distance  = dist(stoneObj.x, stoneObj.y, mangoObj.x, mangoObj.y)
    if(distance<= lmango.radius+ lstone.radius){
      Matter.Body.setStatic(lmango.body, false);
    }
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(rock.body, {x: 200, y:45})
    rope.attach(rock.body);
  }
}