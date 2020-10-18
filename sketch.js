const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var canvas, backgroundImage;
var gameState = 0;
var database;
var train, firstTrainImg, trainImg, carriage;
var backTrain;
var form;
var track;
var game;

function preload(){
  firstTrainImg = loadImage("Images/download.jpg");
  //trainImg = loadImage("Images/images");
  backTrain = loadImage("Images/download.jpg");
 // track = loadImage("Images/images(1).png")
}

function setup() {
  createCanvas(800,400);
  

  engine = Engine.create();
  world = engine.world;

  form = new Form();
  train = new Boggie(150,350);
  carriage = new Coal(50,350);
  chain = new Chain(train.body,carriage.body)
}

function draw() {
  background(255,255,255); 
  //form.display();
  //game.display();
  train.display();
  carriage.display();
  chain.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(train.body,{x:train.body.position.x,y:train.body.position.y},{x:0.5,y:0})
  }
}



























//1)https://itch.io/ 2) https://www.shutterstock.com/ 3) https://www.vectorstock.com