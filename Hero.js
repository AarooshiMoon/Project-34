class Hero {
    constructor(x, y, width, height) {
        var options = {
            density: 1.2,
            friction: 1,
            isStatic: false,
            restitution: 0
        }
        this.image = loadImage("images/superman.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}