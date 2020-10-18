class Form{
    constructor(){
        this.button = createButton("Play");
        this.button1 = createButton("Instructions");
        this.greeting = createElement('h2')
        this.tittle = createElement('h2');
        this.instructions = createElement('h3');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.instructions.hide();
      }
      display(){
          background(backTrain);
        this.tittle.html("Train Mania");
        this.tittle.position(displayWidth/2 - 50, 0);
    
        this.button.position(displayWidth/2, displayHeight/2);
        this.button1.position(displayWidth/2+70,displayHeight/2);
        
        this.button.mousePressed(()=>{
            
            this.greeting.html("Hello,Welcome to the world of Trains" )
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
            game();
        })

        this.button1.mousePressed(()=>{
            this.greeting.html("Instructions")
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
            this.instructions.html("Welcome to the Train Mania instruction. Here you can understand how to cintral and win the game.");
            this.instructions.position(displayWidth/2,displayHeight/2);
        })
}

}