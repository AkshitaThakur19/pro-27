class bob{
    constructor(x,y){
    var options = {
        isStatic : false,
        'restitution' : 0.2,
        'density' : 0.5,
        'fricition' : 20.0
    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 50;

    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    stroke("black");
    fill("black");
    ellipse(0,0,this.width,this.height);
    pop();
}
}