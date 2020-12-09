class Log {
    constructor(x,y,height,angle) {

        var options ={
            restitution: 0.8,
            friction: 2,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,20,height, options);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle) // Angle of Placement
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
         var angle1 = this.body.angle; // Angle of rotate
        push();
        translate(pos.x,pos.y);
        rotate(angle1);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
    }
    
}