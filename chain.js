class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
           stiffness:0.005
}

this.chain  = Constraint.create(options);
this.pointB = pointB
World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA = null;
    }
    attach(body){
        this.chain.bodyA = body;
    }
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    }