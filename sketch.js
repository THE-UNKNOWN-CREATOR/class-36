//Create variables here
var Dog, HappyDogImg, DogImg, database;
var FoodS, FoodStock, food;
var hunger = hunger+1;
var button;
var dogName;
var start = 0, play = 1;
var gameState = 0;

function preload()
{
  //load images here
  DogImg = loadImage("images/dogImg.png");
  HappyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(1000, 500);
  
  database = firebase.database();

  food = new Food();

  Dog = createSprite(850, 300, 50, 50);
  Dog.addImage(DogImg);
  Dog.scale = 0.2;

  if(gameState === start)
{
  var heading = createElement("h2");
  heading.html("VIRTUAL PET");
  heading.position(750, 100);
  dogName = createInput("Your Dogs Name");
  dogName.position(750, 250);
  var on = createButton(" start game ");
  on.position(800, 400);
}
}


function draw() {
background("green");



if(gameState === play)
{
  food.display();

  button = createButton("Feed" + dogName.Input);

  drawSprites();
  //add styles here

  textSize(15);
  fill("white");
  text("YOUR FOOD STOCK IS " + FoodS, 150, 150);
  text("PRESS THE UP ARROW TO FEED YOUR DOG", 100, 50);
}
}

function readStock(data)
{
  FoodStock = data.val();
}