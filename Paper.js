class Paper {
constructor(){
    var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.rectangle(300, 350, 40, 40, options);
    this.width = 40;
    this.height = 40;
    this.image = loadImage("paper.png");
    World.add(world, this.body);


}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
}
}