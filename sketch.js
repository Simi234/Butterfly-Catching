var bg,bgImg;
var lily, lily_idle, lily_jump;
var invisibleGround;

function preload(){
  bgImg = loadImage("assets/background.jpg");
  lily_idle = loadAnimation("assets/Idle (1).png");
  lily_jump = loadAnimation("assets/Jump (1).png","assets/Jump (2).png","assets/Jump (3).png", "assets/Jump (4).png", "assets/Jump (5).png")
}

function setup() {

  
  createCanvas(windowWidth-750,windowHeight-200);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.x = bg.width/2
  bg.scale = 1.5
  

//creating the player sprite
  lily = createSprite(displayWidth-1150, displayHeight-70, 50, 50);
  lily.addAnimation("idle", lily_idle)
  lily.addAnimation("jump", lily_jump);
  lily.scale = 0.3
  lily.debug = true
  lily.setCollider("rectangle",0,0,300,300)
  
  //creating invisible ground
  invisibleGround = createSprite(displayWidth/2,displayHeight/2+380,windowWidth-700,20)
  invisibleGround.visible = false
}

function draw() {
  background(0); 

  bg.velocityX = -8;

  if(bg.x<445){
    bg.x = bg.width/2;
  }



  //moving the player up and down and making the game mobile compatible using touches
/*if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
*/


  if(keyDown("space") && lily.y>450){
    lily.velocityY = -10;
    lily.changeAnimation("jump", lily_jump);

  }
  lily.velocityY = lily.velocityY + 0.8;
  lily.collide(invisibleGround);


/*

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
*/
drawSprites();

}
