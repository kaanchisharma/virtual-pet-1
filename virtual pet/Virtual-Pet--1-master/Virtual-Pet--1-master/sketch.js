//Create variables here
var dog,happydog,database,foodS,foodstock;
var dogimage1,dogimage2
function preload()
{
  //load images here
  dogimage1= loadImage("images/dogImg.png");
  dogimage2 =loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database()
	createCanvas(800, 700);
  dog=createsprite(250,300,140,150);
  dog.addImage(dogimage1);
  foodstock=database.ref("food")
  foodstock.on("value",readStock)
}


function draw() {  
if(keyWentDown("up")){
writeStock(foodS)
dog.addImage(dogimage2)
}
  drawSprites();
  //add styles here
  fill("red")
  text("food remaining"+foodS,170,200)
  textSize()

}

function readstock(data){
foodS=data.val
}

function writeStock(x){
if(x=0){
x=0
}
else{
x=x-1
}
database.ref("/").update({food:x})
}



