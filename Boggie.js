class Boggie{
    constructor(x,y){
        this.boggie = Bodies.rectangle(x,y,50,50);
        this.boggieImg = loadImage("Images/steam.png");
        this.width = 50;
        this.height = 50;
        World.add(world,this.boggie);
    }
    display(){
        var pos = this.body.position;
        push();
        //rotate();
        //translate();
        imageMode(CENTRE);
        image(this.boggieImg,pos.x,pos.y,this.width, this.height);
        pop();
    }
}