var bgImg,bg;
var police,policeImg;
var thief,thiefImg;
var house,houseImg
var coin,coinImg,coin2;
var score = 0
var coinGroup,coin2Group
var ghostImg
var coin5



var gameState = "play";





function preload(){

  bgImg = loadImage("images/house3.jpg")
  policeImg = loadAnimation("images/police.gif")
  thiefImg = loadImage("images/Robber.png");
  houseImg = loadImage("images/houseImg.gif");
  coinImg = loadImage("images/coin.gif");
  ghostImg = loadImage("images/ghost.png")


}

function setup() {
 createCanvas(1400,600);

// bg = createSprite(0,0);
// bg.addImage(bgImg);
//bg.scale = 4

coinGroup = createGroup();
coin2Group = createGroup();

 // bg = createSprite(1400,600);
  //bg.addImage(bgImg);
  //bg.x=bg.width/2

 

police = createSprite(100,500,20,20);
police.addAnimation("police",policeImg);
police.velocityX=2


thief = createSprite(400,500,20,20);
thief.addImage(thiefImg);
thief.scale = 0.3;

house = createSprite(1080,300);
house.addImage(houseImg);


coin = createSprite(700,500,0,0)
coin.addImage(coinImg);
coin.scale = 0.3
coinGroup.add(coin);



}

function draw() {
  background(bgImg);  
  background(0)
 
  

textSize(30);
fill("red")
  text("Score: "+score,200,50)

  bgImg.velocityX= -2;



//if(bg.x <200){
 //bg.x=bg.width/2
//} 


if(coinGroup.isTouching(thief)){
  score = score+1
  coinGroup.destroyEach();

   coin2 = createSprite(700,500)
    coin2.addImage(coinImg);
    coin2.scale = 0.3
    coin2Group.add(coin2);

 
}

if(coin2Group.isTouching(thief)){

  score = score+1
  coin2Group.destroyEach();
}

if(police.isTouching(thief)){
   
  gameState = "end";

}


if(gameState === "end"){
  background(0)
   
    fill("red");
    textSize(30)
    text("GAMEOVER Thief Caught",250,250);
police.destroy()
house.destroy();
thief.destroy();
coin.destroy()
bg.destroy();



}
if(thief.isTouching(house)){
  gameState = "play"
 thief.scale = 0.2
 thief.x = 100

  police.destroy()
house.destroy();
coin.destroy();

  maze()
  Ghost()
  generatecoin()
  
}




if(keyDown(RIGHT_ARROW)){
  thief.x+=3;

}

if(keyDown(LEFT_ARROW)){
  thief.x = thief.x-3
}

if(keyDown(UP_ARROW)){
  thief.y = thief.y-3
  console.log("uparrow key")

}

if(keyDown(DOWN_ARROW)){
  thief.y+=3
  console.log("down key")
}







drawSprites();
}

function spawnHouse(){
  if(frameCount %320===0){
    var house = createSprite(800,400);
    house.addImage(houseImg);
    //house.scale = 0.05

  }

}

function spawnCoin(){
  if(frameCount %20===0){

    var coin = createSprite(600,500)
    coin.addImage(coinImg);
    coin.scale = 0.3
    coinGroup.add(coin);

  }
}

function maze(){
 
  


var cardboard1=createSprite(500,100,1790,10);
var cardboard2=createSprite(100,570,2590,10);
var cardboard3=createSprite(10,330,10,470);
var cardboard4=createSprite(1386,190,10,160);
var cardboard5=createSprite(1386,480,10,160);
var cardboard6=createSprite(45,330,10,430);
var cardboard7=createSprite(700,114,1320,10);
var cardboard8=createSprite(700,550,1320,10);
var cardboard9=createSprite(550,220,10,80);
var cardboard10=createSprite(120,250,10,170);
var cardboard11=createSprite(164,220,80,10);
var cardboard12=createSprite(290,230,10,140);
var cardboard13=createSprite(284,297,120,10);
var cardboard14=createSprite(345,331,10,170);
var cardboard15=createSprite(380,380,80,10);
var cardboard16=createSprite(490,230,10,140);
var cardboard17=createSprite(500,297,120,10);
var cardboard18=createSprite(180,420,10,170);
var cardboard19=createSprite(220,440,80,10);
var cardboard20=createSprite(480,420,10,170);
var cardboard21=createSprite(520,440,80,10);
var cardboard22=createSprite(780,420,10,170);
var cardboard23=createSprite(825,440,80,10);
var cardboard24=createSprite(688,360,10,350);
var cardboard25=createSprite(730,220,80,10);
var cardboard26=createSprite(860,350,10,170);
var cardboard27=createSprite(900,350,80,10);
var cardboard28=createSprite(1140,350,10,170);
var cardboard29=createSprite(1180,350,80,10);
var cardboard30=createSprite(1050,350,10,300);
var cardboard31=createSprite(1090 ,250,80,10);





cardboard1.shapeColor='brown';
cardboard2.shapeColor='brown';
cardboard3.shapeColor='brown';
cardboard4.shapeColor='brown';
cardboard5.shapeColor='brown';
cardboard6.shapeColor='blue';
cardboard7.shapeColor='blue';
cardboard8.shapeColor='blue';
cardboard9.shapeColor='blue';
cardboard10.shapeColor='blue';
cardboard11.shapeColor='blue';
cardboard12.shapeColor='blue';
cardboard13.shapeColor='blue';
cardboard14.shapeColor='blue';
cardboard15.shapeColor='blue';
cardboard16.shapeColor='blue';
cardboard17.shapeColor='blue';
cardboard18.shapeColor='blue';
cardboard19.shapeColor='blue';
cardboard20.shapeColor='blue';
cardboard21.shapeColor='blue';
cardboard22.shapeColor='blue';
cardboard23.shapeColor='blue';
cardboard24.shapeColor='blue';
cardboard25.shapeColor='blue';
cardboard26.shapeColor='blue';
cardboard27.shapeColor='blue';
cardboard28.shapeColor='blue';
cardboard29.shapeColor='blue';
cardboard30.shapeColor='blue';
cardboard31.shapeColor='blue';


thief.bounceOff(cardboard1);
thief.collide(cardboard2);
thief.collide(cardboard3);
thief.collide(cardboard4);
thief.collide(cardboard5);
thief.collide(cardboard6);
thief.collide(cardboard7);
thief.collide(cardboard8);
thief.collide(cardboard9);
thief.collide(cardboard10);
thief.collide(cardboard11);
thief.collide(cardboard12);
thief.collide(cardboard13);
thief.collide(cardboard14);
thief.collide(cardboard15);
thief.collide(cardboard16);
thief.collide(cardboard17);
thief.collide(cardboard18);
thief.collide(cardboard19);
thief.collide(cardboard20);
thief.collide(cardboard21);



}

function Ghost(){
 //var ghost = createSprite(631,354)
  //ghost.addImage(ghostImg)
  //ghost.scale = 0.2

  
  //ghost.x = thief.x 

}

function generatecoin(){


  coin5 = createSprite(85,170);
  coin5.addImage(coinImg);
  coin5.scale = 0.2

  if(thief.isTouching(coin5)){
    console.log("ifcalled")
    var randx = Math.round(random(0,1316));
    coin5.x = randx;
    var randy = Math.round(random(0,450));
    coin5.y = randy
 
  }
}

