//Create variables here
var dog, happyDog;
var database;
var food;
var foodStock;

function preload(){
  //load images here
  dog_image = loadImage("images/dogImg.png");
  happyDog_image = loadImage("/images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(300,300);
  dog.addImage(dog_image);

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  

  background = (46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happyDog_image);
  }

  drawSprites();
  //add styles here

  noStroke();
  textSize(35)
  fill("black")
  text("Note: Press UP_ARROW key to feed Drago!",750,40);

}



