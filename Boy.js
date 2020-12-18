class Boy {
    constructor(x, y , width, height){
      var  boyOptions = {
            isStatic : true,
            restitution: 0
        }
        this.body = Bodies.rectangle(x, y, width, height, boyOptions);
        this.height = height;
        this.width = width;
        this.image = loadImage("pic/boy.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}
