var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
 bgImg=loadImage("assets/bg.jpeg");
 shooterImg=loadImage("assets/shooter_2.png");
 shooter_shooting=loadImage("assets/shooter_3.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg= createSprite(windowWidth/2-20,windowHeight/2,20,20);
  bg.addImage(bgImg);
  bg.scale= 1.5;
  

//creating the player sprite
  player= createSprite(windowWidth-1150,windowHeight-300,20,20);
  player.addImage(shooterImg);
  player.scale= 0.5;
  player.debug=true;

  player.setCollider("rectangle",0,0,300,300);
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
   if(keyDown(UP_ARROW)){
     player.y-= 8
   }
   if(keyDown(DOWN_ARROW)){
    player.y+=  8
  }
   

//release bullets and change the image of shooter to shooting position when space is pressed
   if(keyWentDown("space")){
     player.addImage(shooter_shooting);
   }

//player goes back to original standing image once we stop pressing the space bar
    if(keyWentUp("space")){
      player.addImage(shooterImg);
    }

drawSprites();

}
