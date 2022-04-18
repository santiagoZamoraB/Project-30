class Polygon {
    constructor(x,y,r)
      {
          var options = { 
              density: 1, 
              frictionAir: 0,
              restitution: 0.8,
              friction: 0.4
          };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image =loadImage("polygon.png")
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
          World.add(world, this.body);
  
      }
      
      display()
      {
              
              var polygonPos=this.body.position;		
              push()
              translate(polygonPos.x, polygonPos.y);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0, 0,40,40)
              pop()
              
      }
  }