
var ground,forest;
var player,p_still,p_walk,p_hit,p_hurt,p_shield;
var army1,army2,army3;
var a_still,a_walk,a_hit,a_hurt,a_shield;
var life1=10
var life2=10
var life3=10
var life4=10
var boss;
var gameState="start";
var score=0;
var life=100;
var value=0;
var count=0;

function preload(){
  forest = loadImage("bg1.jpg");
  heartimg=loadImage("heart.png")

  p_still=loadAnimation("player/still/01.png","player/still/02.png","player/still/03.png","player/still/04.png","player/still/05.png","player/still/06.png","player/still/07.png","player/still/08.png","player/still/09.png","player/still/10.png");
  p_walk=loadAnimation("player/walk/11.png","player/walk/12.png","player/walk/13.png","player/walk/14.png","player/walk/15.png","player/walk/16.png","player/walk/17.png","player/walk/18.png","player/walk/19.png","player/walk/20.png","player/walk/21.png");
  p_hit=loadAnimation("player/hit/hit1.png","player/hit/hit2.png","player/hit/hit3.png","player/hit/hit4.png","player/hit/hit5.png","player/hit/hit6.png","player/hit/hit7.png","player/hit/hit8.png","player/hit/hit9.png")
  p_shield=loadAnimation("player/shield/41.png","player/shield/42.png","player/shield/43.png","player/shield/44.png","player/shield/45.png","player/shield/46.png","player/shield/47.png","player/shield/48.png","player/shield/49.png","player/shield/50.png")

  a_still=loadAnimation("army/still/1.png","army/still/2.png","army/still/3.png","army/still/4.png","army/still/5.png","army/still/6.png","army/still/7.png","army/still/8.png","army/still/9.png","army/still/10.png","army/still/11.png","army/still/12.png","army/still/13.png","army/still/14.png");
  a_walk=loadAnimation("army/walk/11.png","army/walk/12.png","army/walk/13.png","army/walk/14.png","army/walk/15.png","army/walk/16.png","army/walk/17.png","army/walk/18.png","army/walk/19.png","army/walk/20.png","army/walk/21.png");
  a_hit=loadAnimation("army/hit/hit1.png","army/hit/hit2.png","army/hit/hit3.png","army/hit/hit4.png","army/hit/hit5.png","army/hit/hit6.png","army/hit/hit7.png","army/hit/hit8.png");
  a_hurt=loadAnimation("army/hurt/51.png","army/hurt/52.png","army/hurt/53.png","army/hurt/54.png","army/hurt/55.png","army/hurt/56.png","army/hurt/57.png","army/hurt/58.png","army/hurt/59.png","army/hurt/60.png")

  b_still=loadAnimation("boss/still/1.png","boss/still/2.png","boss/still/3.png","boss/still/4.png","boss/still/5.png","boss/still/6.png","boss/still/7.png","boss/still/8.png","boss/still/9.png","boss/still/10.png");
  b_hit=loadAnimation("boss/hit/1.png","boss/hit/2.png","boss/hit/3.png","boss/hit/4.png","boss/hit/5.png","boss/hit/6.png","boss/hit/7.png","boss/hit/8.png","boss/hit/9.png","boss/hit/10.png",)
  b_hurt=loadAnimation("boss/hurt/1.png","boss/hurt/2.png","boss/hurt/3.png","boss/hurt/4.png","boss/hurt/5.png","boss/hurt/6.png","boss/hurt/7.png","boss/hurt/8.png","boss/hurt/9.png","boss/hurt/10.png",);

}

function setup() {
  createCanvas(displayWidth,displayHeight-145);
 
  ground=createSprite(displayWidth, displayHeight/2-70,displayWidth , displayHeight);
  ground.addImage(forest);
  ground.scale = 3;

  player=createSprite(displayWidth/3, displayHeight-320);
  player.scale=3
  player.addAnimation("still",p_still);
  player.addAnimation("walk",p_walk);
  player.addAnimation("hit",p_hit);
  player.addAnimation("shield",p_shield);
 // player.debug=true
  player.setCollider("rectangle",0,-25,50,50)

  army1 = createSprite(displayWidth+250, displayHeight-450);
  army1.scale=1.1;
  army1.addAnimation("still",a_still);
  army1.addAnimation("walk",a_walk);
  army1.addAnimation("hit",a_hit);
  army1.addAnimation("shield",a_hurt);
 // army1.debug=true
  army1.setCollider("rectangle",40,0,120,110)

  army2 = createSprite(displayWidth+250, displayHeight-450);
  army2.scale=1.1;
  army2.addAnimation("still",a_still);
  army2.addAnimation("walk",a_walk);
  army2.addAnimation("hit",a_hit);
  army2.addAnimation("hurt",a_hurt);
 // army2.debug=true
  army2.setCollider("rectangle",-20,-25,120,110)

  army3 = createSprite(displayWidth+250, displayHeight-450);
  army3.scale=1.2;
  army3.addAnimation("still",a_still);
  army3.addAnimation("walk",a_walk);
  army3.addAnimation("hit",a_hit);
  army3.addAnimation("hurt",a_hurt);
  //army3.debug=true
  army3.setCollider("rectangle",-20,-25,120,110)

  boss = createSprite(displayWidth+400, displayHeight-450);
  boss.scale=2;
  boss.addAnimation("still",b_still);
  //boss.addAnimation("walk",a_walk);
  boss.addAnimation("hit",b_hit);
  boss.addAnimation("hurt",b_hurt);
  //boss.debug=true
  boss.setCollider("rectangle",-20,-25,120,110)

    
  //form=new Form()
  start=createButton("Play")
  heart1=createSprite(displayWidth/2-60,50)
  heart1.addImage(heartimg)
  heart1.scale=0.05
  heart2=createSprite(displayWidth/2-20,50)
  heart2.addImage(heartimg)
  heart2.scale=0.05
  heart3=createSprite(displayWidth/2+20,50)
  heart3.addImage(heartimg)
  heart3.scale=0.05
  heart4=createSprite(displayWidth/2+60,50)
  heart4.addImage(heartimg)
  heart4.scale=0.05

  start=createButton("Play")
  heart5=createSprite(displayWidth/2-730,50)
  heart5.addImage(heartimg)
  heart5.scale=0.05
  heart6=createSprite(displayWidth/2-690,50)
  heart6.addImage(heartimg)
  heart6.scale=0.05
  heart7=createSprite(displayWidth/2-650,50)
  heart7.addImage(heartimg)
  heart7.scale=0.05
  heart8=createSprite(displayWidth/2-610,50)
  heart8.addImage(heartimg)
  heart8.scale=0.05
  heart9=createSprite(displayWidth/2-570,50)
  heart9.addImage(heartimg)
  heart9.scale=0.05
  heart10=createSprite(displayWidth/2-730,90)
  heart10.addImage(heartimg)
  heart10.scale=0.05
  heart11=createSprite(displayWidth/2-690,90)
  heart11.addImage(heartimg)
  heart11.scale=0.05
  heart12=createSprite(displayWidth/2-650,90)
  heart12.addImage(heartimg)
  heart12.scale=0.05
  heart13=createSprite(displayWidth/2-610,90)
  heart13.addImage(heartimg)
  heart13.scale=0.05
  heart14=createSprite(displayWidth/2-570,90)
  heart14.addImage(heartimg)
  heart14.scale=0.05
 
}

function draw() {
  background(147,168,101)
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }

  if(gameState==="play"){
    player.setCollider("rectangle",10,-25,50,50)
    //form.hide()
    start.hide();


    

    if(value===0){
      if(keyDown("right")){
        player.changeAnimation("walk",p_walk)
        ground.velocityX=-4;
        army1.velocityX=-4;
      }
      if(army1.isTouching(player)){
        life = life-0.05;
      }
        if(army1.x<=displayWidth/2.5){
          army1.velocityX=0;
          ground.velocityX=0
          player.changeAnimation("still",p_still) 
          army1.changeAnimation("hit",a_hit)
        }
  
        
      if(keyDown("h")){
        player.changeAnimation("hit",p_hit);
        player.setCollider("rectangle",20,-25,150,110)
      }
      if(keyWentUp("h")){
        player.changeAnimation("still",p_still);
        count=0
      }

      if(player.isTouching(army1)&&count===0){
        life1--;
        count=1;
      }

      if(life1<=0){
        heart1.visible=false
        army1.destroy()
        value=1
      }
    }


    if(value===1){
      if(keyDown("right")){
        player.changeAnimation("walk",p_walk)
        ground.velocityX=-4;
        army2.velocityX=-4;
      }
      if(army2.isTouching(player)){
        life = life-0.05;
      }
        if(army2.x<=displayWidth/2.5){
          army2.velocityX=0;
          ground.velocityX=0
          player.changeAnimation("still",p_still) 
          army2.changeAnimation("hit",a_hit)
        }
  
  
      if(keyDown("h")){
        player.changeAnimation("hit",p_hit);
        player.setCollider("rectangle",20,-25,150,110)
      }
      if(keyWentUp("h")){
        player.changeAnimation("still",p_still);
        count=0
      }

      if(player.isTouching(army2)&&count===0){
        life2--;
        count=1;
      }

      if(life2<=0){
        heart2.visible=false
        army2.destroy()
        value=2
      }
    }  

    if(value===2){
      if(keyDown("right")){
        player.changeAnimation("walk",p_walk)
        ground.velocityX=-4;
        army3.velocityX=-4;
      }
      if(army3.isTouching(player)){
        life = life-0.05;
      } 
    
        if(army3.x<=displayWidth/2.5){
          army3.velocityX=0;
          ground.velocityX=0
          player.changeAnimation("still",p_still) 
          army3.changeAnimation("hit",a_hit)
        }
  
  
      if(keyDown("h")){
        player.changeAnimation("hit",p_hit);
        player.setCollider("rectangle",20,-25,150,110)
      }
      if(keyWentUp("h")){
        player.changeAnimation("still",p_still);
        count=0
      }

      if(player.isTouching(army3)&&count===0){
        life3--;
        count=1;
      }

      if(life3<=0){
        heart3.visible=false
        army3.destroy()
        value=3
      }
    }

    if(value===3){
      if(keyDown("right")){
        player.changeAnimation("walk",p_walk)
        ground.velocityX=-4;
        boss.velocityX=-4;
      }
      if(boss.isTouching(player)){
        life = life-0.05;
      }
        if(boss.x<=displayWidth/2.3){
          boss.velocityX=0;
          ground.velocityX=0
          player.changeAnimation("still",p_still) 
          boss.changeAnimation("hit",b_hit)
        }
  
  
      if(keyDown("h")){
        player.changeAnimation("hit",p_hit);
        player.setCollider("rectangle",20,-25,150,110)
      }
      
      if(keyWentUp("h")){
        player.changeAnimation("still",p_still);
        count=0
      }

            if(keyDown("s")&&count===0){
        player.changeAnimation("shield",p_shield);
        life = life+0.05;
        count=1
      }
      if(keyWentUp("s")){
        player.changeAnimation("still",p_still);
        life = life-0.05;
        count=0
        
      }

      if(life4<=0){
        heart4.visible=false
        boss.destroy()
        gameState="end"
      }
      if(life<=0){
        player.destroy()
        gameState="end"
      }
      
    }
    
    if(life<90){
      heart14.visible = false;
    }if(life<80){
      heart13.visible = false;
    }if(life<70){
      heart12.visible = false;
    }if(life<60){
      heart11.visible = false;
    }if(life<50){
      heart10.visible = false;
    }if(life<40){
      heart9.visible = false;
    }if(life<30){
      heart8.visible = false;
    }if(life<20){
      heart7.visible = false;
    }if(life<10){
      heart6.visible = false;
    }if(life<0){
      heart5.visible = false;
    }

  }

  

  drawSprites();

  if(gameState==="end"){
    //player.changeAnimation("still",p_still);
    if(life>0&&life4<=0){
      alert("You Won!!!")
      gameState="bye"
    }
    if(life<=0&&life4>0){
      alert("Loser!!!")
      gameState="bye"
    }
    if(life===0&&life4===0){
      alert("Try better next time!!!")
      gameState="bye"
    }
  }

  if(gameState==="bye"){
    //player.changeAnimation("still",p_still);
  }

  if(gameState==="start"){
    textSize(20);
    fill("black");
    text("Instructions & Controls:",displayWidth/2,150)
    text("The game has 3 army and 1 boss in order",displayWidth/2,200)
    text("'h' for hit for all army and boss",displayWidth/2,250)
    text("'s' for shield for only boss:",displayWidth/2,300)
    text("right arrow for walking",displayWidth/2,350)
    text("Press Enter to start the game",displayWidth/2,400)

    if(keyDown("enter")){
      gameState="play"
    }
  /*  form.display()
    
    start.position(displayWidth/2 + 30, displayHeight/2+100);
    start.mousePressed(()=>{
      gameState="play";     
    })*/
    
  }

  textSize(20);
  fill("black");
  text("Score: "+score,displayWidth-200,50)
 
}




