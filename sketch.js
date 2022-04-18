const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var resortera;
var slingShot;
var polygon_img;
function preload(){
  //polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1920,1080);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(790,500,250,10);
  stand2 = new Stand(1400,300,210,10);
  ball = new Polygon(500,400,10);
  resortera = new Rope(ball.body , { x: 500, y:400 });

  //level one
  block1 = new Block(700,485,30,40);
  block2 = new Block(730,485,30,40);
  block3 = new Block(760,485,30,40);
  block4 = new Block(790,485,30,40);
  block5 = new Block(820,485,30,40);
  block6 = new Block(850,485,30,40);
  block7 = new Block(880,485,30,40);
  //level two
  block8 = new Block(730,455,30,40);
  block9 = new Block(760,455,30,40);
  block10 = new Block(790,455,30,40);
  block11 = new Block(820,455,30,40);
  block12 = new Block(850,455,30,40);
  //level three
  block13 = new Block(760,425,30,40);
  block14 = new Block(790,425,30,40);
  block15 = new Block(820,425,30,40);
  //top
  block16 = new Block(790,395,30,40);

  //level one stand two
  block17 = new Block(1310, 275, 30, 40);
  block18 = new Block(1340, 275, 30, 40);
  block19 = new Block(1370, 275, 30, 40);
  block20 = new Block(1400, 275, 30, 40);
  block21 = new Block(1430, 275, 30, 40);
  block22 = new Block(1460, 275, 30, 40);
  block23 = new Block(1490, 275, 30, 40);


//level two stand two

  block24 = new Block(1340,235,30,40);
  block25 = new Block(1370,235,30,40);
  block26 = new Block(1400,235,30,40);
  block27 = new Block(1430,235,30,40);
  block28 = new Block(1460,235,30,40);

//level tree stand two

  block29 = new Block(1370,195,30,40);
  block30 = new Block(1400,195,30,40);
  block31 = new Block(1430,195,30,40);

// top

  block32 = new Block(1400, 155, 30, 40)

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  
  ball.display();
  resortera.display();

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);

//first stand

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

//second stand

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();


  block29.display();
  block30.display();
  block31.display();

  fill("grey");
  block16.display();

  block32.display();

  //console.log(block32.speed)
 

}
function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  resortera.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(ball.body,{x:500, y:400});
    resortera.attach(ball.body);
  }
}

