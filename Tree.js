class Tree {
    constructor(x, y, width, height){
        var treeOptions = {
            isStatic : true,
            restitution: 0
        }
        this.body = Bodies.rectangle(x, y, width, height, treeOptions);
        this.height = height;
        this.width = width;
        this.image = loadImage("pic/tree.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}