//Create variables here
var dog, happyDog//, dogImage, happyDogImage;
var database;
var food, foodStock;

function preload()
{
  dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  

  drawSprites();
  //add styles here
  textSize(20);
  fill("blue");
  stroke("white");
  text("Note:Press UP_ARROW key to feed dog", 180,400);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x
  })
}

