class Chain {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA:bird.body,
            bodyB:log6.body,
            stiffness:1.0
    
        }
        this.chein = Constraint.create(options);
        World.add(world,this.chein);
    }
    display() {
        var pointA = this.chein.bodyA.position;
        var pointB = this.chein.bodyB.position;
        strokeWeight(5);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}