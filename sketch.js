const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var heroImage, monsterImage, bgImage;
var engine, world, bodies;
var superhero, rope, ground;
var monster
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30, box31;

function preload() {
  //preload the images here
  //heroImage=loadImage("images/superman.png");
  //monsterImage=loadImage("images/monster.png");
  bgImage = loadImage("images/b.png");

}

function setup() {
  createCanvas(1536, 760);

  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(880, 600, 700, 25);
  superhero = new Hero(400, 3, 300, 200);
  monster = new Monster(1200, 380, 150, 150);
  rope = new Fly(superhero.body, { x: 400, y: 400 });

  // block line 1
  box1 = new Block(700, 200, 50, 50);
  box2 = new Block(700, 200, 50, 50);
  box3 = new Block(700, 200, 50, 50);
  box4 = new Block(700, 200, 50, 50);
  box5 = new Block(700, 200, 50, 50);
  box6 = new Block(700, 200, 50, 50);
  box7 = new Block(700, 130, 50, 50);
  box8 = new Block(700, 130, 50, 50);
  box9 = new Block(700, 130, 50, 50);

  // block line 2
  box10 = new Block(780, 130, 50, 50);
  box11 = new Block(780, 130, 50, 50);
  box12 = new Block(780, 130, 50, 50);
  box13 = new Block(780, 90, 50, 50);
  box14 = new Block(780, 90, 50, 50);
  box15 = new Block(780, 90, 50, 50);

  // block line 3
  box16 = new Block(860, 50, 50, 50);
  box17 = new Block(860, 100, 50, 50);
  box18 = new Block(860, 100, 50, 50);
  box19 = new Block(860, 100, 50, 50);
  box20 = new Block(860, 100, 50, 50);
  box21 = new Block(860, 100, 50, 50);
  box22 = new Block(860, 100, 50, 50);

  // block line 4
  box23 = new Block(940, 80, 50, 50);
  box24 = new Block(940, 80, 50, 50);
  box25 = new Block(940, 80, 50, 50);
  box26 = new Block(940, 80, 50, 50);
  box27 = new Block(940, 80, 50, 50);
  box28 = new Block(940, 80, 50, 50);
  box29 = new Block(940, 80, 50, 50);
  box30 = new Block(940, 80, 50, 50);
  box31 = new Block(940, 80, 50, 50);


  Engine.run(engine);

}

function draw() {

  rectMode(CENTER);
  background(bgImage);

  fill("white");
  text(mouseX + ',' + mouseY, 30, 45);



  ground.display();
  superhero.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();


  rope.display();
  monster.display();

  //drawSprites();


}

function mouseDragged() {
  Matter.Body.setPosition(superhero.body, { x: mouseX, y: mouseY });
}

