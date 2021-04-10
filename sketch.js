const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles =[]
var plinkos = [];
var divisions = [];
var divisionHeight=300;



 function setup() {
  createCanvas(800,700);
  engine = Engine.create();
    world = engine.world;

    ground= new Ground (400,690,800,20)

    for (var i = 0 ; i<=width ; i=i+80){
      divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
    }

    for (var j=75; j<=width; j = j+50){
      plinkos.push(new Plinko(j,75));
    }

    for (var j=50; j<=width; j = j+50){
      plinkos.push(new Plinko(j,175));
    }

    for (var j=75; j<=width; j = j+50){
      plinkos.push(new Plinko(j,275));
    }

    for (var j=50; j<=width; j = j+50){
      plinkos.push(new Plinko(j,375));
    }
    ball1 = new Particle(200,200,10);
    ball2 = new Particle(200,210,10)
    ball3 = new Particle(200,220,10)
    ball4 = new Particle(200,230,10)
    ball5 = new Particle(200,240,10)
    ball6 = new Particle(200,250,10)
    
Engine.run(engine)
    

 }

function draw() {
  rectMode(CENTER)
  background(0);  

  drawSprites();

  for(var n = 0; n<divisions.length;n++){
    divisions[n].display();
  }

  if (frameCount %60 === 0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

for (var h = 0; h<particles.length;h++){
  particles[h].display();
}

for(var j =0; j<plinkos.length;j++){
plinkos[j].display();
}

ground.display();

}