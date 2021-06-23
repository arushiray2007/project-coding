const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyImg,tree,stone,ground;
var treeImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var launcher;
var gameState="onSling";
function preload()
{
	boyImg=loadImage("images/boy.png");
	
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(100,550,20,20);
	boy.addImage(boyImg);
	boy.scale=0.1;

	stone=new Stone(50,520,20);
	tree=new Tree(1050,400);
	
	mango1=new Mango(930,310,30);
	mango2=new Mango(970,320,30);
	mango3=new Mango(990,240,30);
	mango4=new Mango(1040,250,30);
	mango5=new Mango(1030,220,30);
	//mango6=new Mango()

	launcher=new Launcher(stone.body,{x:46,y:493});

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  text(mouseX+","+mouseY,50,50);
  tree.display();
  mango3.display();
  mango2.display();
  mango1.display();
  mango4.display();
  mango5.display();
  stone.display();
  launcher.display();
 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
  drawSprites();
 
}

function mouseDragged(){
    if(gameState==="onSling"){
		Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}

}


function mouseReleased(){
    launcher.fly();
    gameState="launched";
    
}

function detectCollision(stone,mango){
	var distance=dist(stone.x,stone.y,mango.x,mango.y);
	if(distance<=mango.r+stone.r){
		mango.body.setStatic(mango.body,false);
	}

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:46,y:493});
		launcher.attach(stone.body);
		gameState="onSling";
	}
}