//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
	dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");

}


function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  
  dogSprite=createSprite(250,300);
	dogSprite.addImage(dog);
  dogSprite.scale=0.5;
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  

}


function draw() {  

  
  background("rgb(80,200,120)")
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS-1);
    dogSprite.addImage(happyDog);
    
  }
  drawSprites();

  textSize(30);
  fill("red");
  text("Press UP_ARROW to feed your pup",10,50);

}

//creating function for reading and writing our foodstock from database
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}



