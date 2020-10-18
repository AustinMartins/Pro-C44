class Coal{
    constructor(x,y){
        this.coal = Bodies.rectangle(x,y,50,50);
        this.coalImg = loadImage("Images/coal.png");
        this.width = 50;
        this.height = 50;
        World.add(world,this.coal);
    }
    display(){
        var pos = this.body.position;
        push();
        //rotate();
        //translate();
        imageMode(CENTRE);
        image(this.coalImg,pos.x,pos.y,this.width, this.height);
        pop();
    }
}