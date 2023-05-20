var running, platform1image, platform2image, platform3image,platform4image,floorimage

function preload(){
  running= loadAnimation("walk/cat1.png","walk/cat2.png","walk/cat3.png","walk/cat4.png","walk/cat5.png","walk/cat6.png","walk/cat7.png","walk/cat8.png","walk/cat9.png","walk/cat10.png","walk/cat11.png","walk/cat12.png","walk/cat13.png","walk/cat14.png","walk/cat15.png","walk/cat16.png","walk/cat17.png","walk/cat18.png");
  platform1image= loadImage("platform1.png");
  platform2image= loadImage("platform2.png");
  platform3image= loadImage("platform3.png");
  platform4image= loadImage("platform4.png");
  floorimage = loadImage("floor1.png");
  backgroundImage = loadImage("background.gif")
}

function setup(){
  createCanvas(windowWidth,windowHeight)

  cat = createSprite(200,200,40,40)
  cat.addAnimation("run",running);
  cat.scale=0.4
}

function draw(){
  background("white")
  image(backgroundImage,0,0,width,height)
  drawSprites()
}