class Slingshot{
    constructor(bodyA,pointB){
        var opt = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length : 10
        }
        this.sling = Constraint.create(opt);
        World.add(world,this.sling);

    }
    display(){
        if(this.sling.bodyA){
        var pos = this.sling.bodyA.position;
        var point = this.sling.pointB;
        strokeWeight(5);
        stroke("red");
        line (pos.x,pos.y,point.x,point.y);
        }

    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;

    }

}