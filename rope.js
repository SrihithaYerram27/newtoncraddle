class Rope {

    constructor(bodyA,bodyB,x,y){
        this.x = x;
        this.y = y;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
           pointB:{x:this.x,y:this.y}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    
    
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        
        strokeWeight(2);

        var an1x = pointA.x;
        var an1y = pointA.y

        var an2x = pointB.x + this.x
        var an2y = pointB.y + this.y
        line(an1x,an1y,an2x,an2y);
    }
    
    }