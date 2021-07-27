var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg;
var green,greenImg,orange,orangeImg,red,redImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  greenImg = loadImage("leaf.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage ("redImage.png")


}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleG = new Group();
   

}


function draw() {
  background(220);
  
  console.log(rabbit.frameCount)
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  
  var select_leaves = Math.round(random(1,3));
  
  
    if (select_leaves == 1) {
      spawnleaves();
    } else if (select_leaves == 2) {
      spawnredleaves();
    } else {
      spawnorangeleaves();
    }
  
  
  
    spawnapples();
    if (rabbit.isTouching(appleG)) {
      appleG.destroyEach();

    }
    
  drawSprites();
}




function spawnapples(){

  if (frameCount%40==0) {
    apple = createSprite(100,0,10,10);
    apple.addImage("apple",appleImage);
    apple.scale=0.1;
    apple.velocityY = 6;
    apple.x=Math.round(random(20,380))
    
   apple.lifetime=80;

   appleG.add(apple);
    
  
  }

}

function spawnleaves(){

  if (frameCount%50==0) {
    green = createSprite(100,0,10,10);
  green.addImage("green",greenImg);
    green.scale=0.1;
    green.velocityY = 6;
    green.x=Math.round(random(20,380))
    
   green.lifetime=80;

   
    
  
  } 
  
}
  
function spawnredleaves(){
if (frameCount%50==0) {
    red = createSprite(100,0,10,10);
  red.addImage("red",redImg);
    red.scale=0.1;
    red.velocityY = 6;
    red.x=Math.round(random(20,380))
    
   red.lifetime=80;

   
    
  
  }  
} 
  
function spawnorangeleaves(){

if (frameCount%50==0) {
    orange = createSprite(100,0,10,10);
  orange.addImage("orange",orangeImg);
    orange.scale=0.1;
    orange.velocityY = 6;
    orange.x=Math.round(random(20,380))
    
   orange.lifetime=80;

   
    
  }
  
}


