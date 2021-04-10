class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,15,15,options);
      this.width = 15;
      this.height = 15;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.angle;

      push();
      translate (pos.x, pos.y);
      rotate (angle);
      imageMode(CENTER);
      noStroke();
      fill(255);
      ellipseMode(CENTER);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  }