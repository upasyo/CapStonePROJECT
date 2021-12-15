var canvas;
var accessCode,afteruser;
var game;
var security;
var image1,image2,image3,image4,image5;
var game_ambience;
var robot,robot_Img;
var restart,restart_Img;
var edges;
var user,suma,sumb;
var button,button_Img;
var health,health_score,health_Img;
var key,key_score,key_Img;
var points,points_score,points_Img,points2_1,points2_2,points2_3,points2_4,points2_5,points_Img2,pointsGroup1;
var points1_1,points1_2, pointsGroup2;
var usertaking;
var diamond,diamond_Img;
var score_sound;
var ground1,ground2,ground3,ground4,ground5,ground6,ground7;
var ball1,ball1_Img,ball2,ball3,ball4,ball5,ball6,ball7,ball8;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;
var door,door_Img,wood_Img,wood_Img2;
var ballsGroup,lazersGroup,toysGroup;
var lazer1, lazer2,lazer3,lazer4 ,grazer1,grazer2;
var babytoy1,babytoy1_Img,babytoy2,babytoy2_Img,babytoy3,babytoy3_Img,babytoy4,babytoy4_Img,babytoy5,babytoy5_Img,babytoy6,bbabytoy6_Img,babytoy7,babytoy7_Img,babytoy8,babytoy8_Img,babytoy9,babytoy9_Img,babytoy10,babytoy10_Img;
var lazerImg;
var blocktoblock,block66,block67;
var ballhit_sound, lazerhit_sound;
var gameState = 0;
 function preload(){
game_ambience=loadSound("sound/game_ambience.mp3");
score_sound=loadSound("sound/scoreincrease.mp3");
ballhit_sound=loadSound("sound/ballhit.mp3");
lazerhit_sound=loadSound("sound/lazersound.mp3");
image1=loadImage("images/firstbg.jpg");
image2=loadImage("images/road.png");
image3=loadImage("https://i.postimg.cc/2yzKx85t/istockphoto-1287348587-612x612.jpg");
image4=loadImage("https://i.postimg.cc/WbBPpDD8/1.jpg");
image5=loadImage("https://i.postimg.cc/GmKdck9H/Gradient-builder-2.jpg");
restart_Img=loadImage("https://i.postimg.cc/ZnYsTyQx/56141803-icon-the-button-with-the-restart-symbol-removebg-preview.png");
//wood_Img=loadImage("https://i.postimg.cc/SNBq2nQ4/photo-1597113366853-fea190b6cd82-1.png");
wood_Img2=loadImage("https://i.postimg.cc/0NBFK3x4/screenshot-22-removebg-preview.png");
//image3=loadImage("https://i.postimg.cc/Bn6ctZB7/screenshot-22.png");
button_Img=loadImage("https://i.postimg.cc/jdfTjfZg/2021-11-17-18-removebg-preview.png");
robot_Img=loadImage("images/ROBOT.png");
babytoy1_Img=loadImage("https://i.postimg.cc/g0Qt2ZHF/61-Pnqo-It-Rt-L.png");
babytoy2_Img=loadImage("https://i.postimg.cc/Dwy7q9kf/1571331044-bst-toys-fisher-price-phone-1571330613-removebg-preview.png");
lazerImg=loadImage("https://i.postimg.cc/76zP09R6/how-to-draw-heart-lipstick-step-removebg-preview.png");
health_Img=loadImage("images/key2.png");
//key_Img=loadImage("images/key1.png");
points_Img2=loadImage("https://i.postimg.cc/qvMyhM5C/Whats-App-Image-2021-11-07-at-10-19-28-AM-removebg-preview.png");
ball1_Img=loadImage("images/steelball.png");
door_Img=loadImage("images/lockeddoor.png");
points_Img= loadImage("https://code-assets-0.whjr.online/static/media/coin.31336045.svg");
babytoy3_Img=loadImage("https://i.postimg.cc/xd0RFb1z/0ae6a23dd3125a5278d5aae21a203838-removebg-preview.png");
babytoy4_Img=loadImage("https://i.postimg.cc/jS6cXhtT/0e7db934baad898da29e3d37d51b0d78-removebg-preview.png");
babytoy5_Img=loadImage("https://i.postimg.cc/0y1ZD4gZ/45011db6c33859c21961d94486a54d20-removebg-preview.png");
babytoy6_Img=loadImage("https://i.postimg.cc/ydxT7496/81-KT1j-A7-LDL-SY550-removebg-preview.png");
babytoy7_Img=loadImage("https://i.postimg.cc/KYJNXv1s/88efc2b6ce3e5095476b372e49d0c952-removebg-preview.png");
babytoy8_Img=loadImage("https://i.postimg.cc/vHV31sKc/c36587fadd165a1052af156f068e06e9-removebg-preview.png");
diamond_Img=loadImage("https://i.postimg.cc/NjgSKmt7/Whats-App-Image-2021-10-19-at-11-37-05-AM-removebg-preview.png");
//
//
//
}

function setup(){
 
canvas= createCanvas(windowWidth,windowHeight);

health=createSprite(width/1.3,height/16);
health.addImage(health_Img);
health.scale=0.04;

points=createSprite(width/10,height/16);
points.addImage(points_Img);
points.scale=0.5;

  robot=createSprite(width/9,height/1.15);
  robot.addImage(robot_Img);
  robot.scale=0.45;

  door=createSprite(width/1.5,height/15);
  door.addImage(door_Img);
  door.scale=0.20;
  //door.debug=true;
door.setCollider("rectangle",5,5,380,395);

//robot.debug=true;
robot.setCollider("circle");

//key_score=5;
health_score=15;
points_score=100;
ballsGroup = createGroup();
//lazersGroup= createGroup();
toysGroup =  createGroup();
lazersGroup=createGroup();
pointsGroup1=createGroup();

pointsGroup2=createGroup();
game = new Game();
game.start();

security = new Security();




 
if(gameState===0){
  //usertaking=prompt("Enter Your Name");
  
  checkCookie();

 if(usertaking===undefined && usertaking==null){
    alert("Enter your First Name first to play the game Do not Press the Cancel Button . Press the Refresh Button on your Browser to Enter your Name & to Play.");
  }


  
}
if(usertaking!==null && usertaking!==undefined){
window.speechSynthesis.onvoiceschanged = function() {
  var voices9 = window.speechSynthesis.getVoices();
  var utterance9 = new SpeechSynthesisUtterance('Welcome '+usertaking+'. Read the instructions carefully before playing the game by pressing the instruction button , best of luck , Go Ahead');
  utterance9.voice = voices9[3];
  utterance9.lang = voices9[4].lang;
  window.speechSynthesis.speak(utterance9);
}
}
/*game_ambience.play();
  game_ambience.loop();
  game_ambience.setVolume(0.2);*/
  /*if(box12.x===width/1.5 && gameState===3){

alert("Write without giving any gap such as NEWDELHI")
   
  }*/
 
}

function draw(){

console.log(usertaking);
  background(255);

 
  if(points_score<=20 && health_score>0){
    points_score=100;
  }else if(points_score>=800 && health_score>0){
    points_score=300;
  }
  //game_ambience.play()
  //Creating the alert with the alertIcon:"icon.png"
  //lazer1.velocityY=round(points_score*5);
  ballsGroup.add(ball1);
  ballsGroup.add(ball3);
  ballsGroup.add(ball4);
  ballsGroup.add(ball5);
  ballsGroup.add(ball6);

  ball1.bounceOff(ground1);
  ball1.bounceOff(ground2);
  ball3.bounceOff(ground1);
  ball3.bounceOff(ground2);
  ball4.bounceOff(ground1);
  ball4.bounceOff(ground2);
  ball5.bounceOff(ground1);
  ball5.bounceOff(ground2);
  ball6.bounceOff(ground1);
  ball6.bounceOff(ground2);
  //ball7.bounceOff(ground1);
  //ball7.bounceOff(ground2);
  pointsGroup1.add(points2_1);
  pointsGroup1.add(points2_2);
  pointsGroup1.add(points2_3);
  pointsGroup1.add(points2_4);

  pointsGroup2.add(points1_1);
  pointsGroup2.add(points1_2);
 

lazersGroup.add(lazer1);
lazersGroup.add(lazer2);
lazersGroup.add(lazer3);
lazersGroup.add(lazer4);

 /* babytoy1.visible=false;
  babytoy2.visible=false;
  babytoy3.visible=false;
  babytoy4.visible=false;
  babytoy5.visible=false;
  babytoy6.visible=false;
  babytoy1.visible=false;
  babytoy1.visible=false;*/
console.log(gameState);
edges=createEdgeSprites();
lazer1.bounceOff(box3);
lazer1.bounceOff(box5);
lazer2.bounceOff(box4);
lazer2.bounceOff(box9);
lazer3.bounceOff(box3);
lazer3.bounceOff(box5);
lazer4.bounceOff(box10);
lazer4.bounceOff(box11);
/*if(gameState!==2 && gameState!==1){
if(keyDown("RIGHT_ARROW")){
robot.x=robot.x+10;
}else if(keyDown("LEFT_ARROW")){
robot.x=robot.x-10;
}else if(keyDown("UP_ARROW")){
robot.y=robot.y-10;
}else if(keyDown("DOWN_ARROW")){
robot.y=robot.y+10;
}*/
points.depth=robot.depth;
health.depth=robot.depth;
points_score.depth=robot.depth;
health_score.depth=robot.depth;
points.depth+=1;
health.depth+=1;
points_score.depth+=1;
health_score.depth+=1;
if(gameState===0){
background(image1);
 game.starting();
}else if(gameState===1){
    background(image1);
    lazer1.visible=false;
    lazer2.visible=false;
    lazer3.visible=false;
    lazer4.visible=false;

    points.visible=false;
    health.visible=false;

    box3.visible=false;
    box4.visible=false;
    box5.visible=false;
    box6.visible=false;
    box7.visible=false;
    box8.visible=false;
    box9.visible=false;
    box10.visible=false;
    box11.visible=false;
    box12.visible=false;
 
    babytoy1.visible=false;
    babytoy2.visible=false;
    babytoy3.visible=false;
    babytoy4.visible=false;
    babytoy5.visible=false;
    babytoy6.visible=false;
    babytoy7.visible=false;
    babytoy8.visible=false;
    edges=createEdgeSprites();
    robot.collide(edges);
    //lazer1.bounceOff(edges);
    //lazer2.bounceOff(edges);



    
   game.play();
  }else if (gameState===2){
    background(image2);
    //Decreasing Score on Touching Balls
    if(robot.isTouching(ballsGroup) ){
      health_score=health_score-1;
      points_score-=10;
    }
    if(door.x!==width/2 && door.y!==height/2){
      fill("red");
      textSize(12);
      text("!! Not Allowed to Go on this Way",width/30,height/2);
      text("!! Not Allowed to Go on this Way",width/1.18,height/2)
    }
    lazer1.visible=false;
    lazer2.visible=false;
    lazer3.visible=false;
    lazer4.visible=false;
    points.visible=true;
    health.visible=true;

    box3.visible=false;
    box4.visible=false;
    box5.visible=false;
    box6.visible=false;
    box7.visible=false;
    box8.visible=false;
    box9.visible=false;
    box10.visible=false;
    box11.visible=false;
    box12.visible=false;
 
    babytoy1.visible=false;
    babytoy2.visible=false;
    babytoy3.visible=false;
    babytoy4.visible=false;
    babytoy5.visible=false;
    babytoy6.visible=false;
    babytoy7.visible=false;
    babytoy8.visible=false;
    edges=createEdgeSprites();
    robot.collide(edges);
    //lazer1.bounceOff(edges);
  //lazer2.bounceOff(edges);
  ball1.bounceOff(ground1);
  ball1.bounceOff(ground2);
  ball3.bounceOff(ground1);
  ball3.bounceOff(ground2);
  ball4.bounceOff(ground1);
  ball4.bounceOff(ground2);
  ball5.bounceOff(ground1);
  ball5.bounceOff(ground2);
  ball6.bounceOff(ground1);
  ball6.bounceOff(ground2);
  //ball7.bounceOff(ground1);
  //ball7.bounceOff(ground2);
     


     
  
    game.played();
   
  }else if(gameState===6){
    background(image2);
    ball1.remove();
    ball3.remove();
    ball4.remove();
    ball5.remove();
    ball6.remove();
    game.playafter();
    if(door.x!==width/2 && door.y!==height/2){
      fill("red");
      textSize(12);
      text("!! Not Allowed to Go on this Way",width/30,height/2);
      text("!! Not Allowed to Go on this Way",width/1.18,height/2)
    }
  }
  else if(gameState===3){
    background(image3);
    lazersGroup.setVisibleEach(true);
    toysGroup.setVisibleEach(true);

    points.visible=true;
    health.visible=true;
    ball1.remove();
    ball3.remove();
    ball4.remove();
    ball5.remove();
    ball6.remove();
    box3.visible=true;
    box4.visible=true;
    box5.visible=true;
    box6.visible=true;
    box7.visible=true;
    box8.visible=true;
    box9.visible=true;
    box10.visible=true;
    box11.visible=true;
    box12.visible=true;
    edges=createEdgeSprites();
    robot.collide(edges);
    game.playing();
  }else if(gameState===4){
    background(image4);
      game.playWon();
      game.playWin();
  game_ambience.stop();
 
  }else if(gameState===5){
    background(image5);
    game.playOver();
      game_ambience.stop();
  }
  if(health_score===0){
      gameState=5;
  }

  if(health_score===1 && robot.isTouching(box12) === false && gameState===2){
    textSize(25);
    fill("red");
    text('Only 1 Life is left . Your Game may end soon',width/5,height/18);
  }else if (health_score===1 && robot.isTouching(box12) === false && gameState===3){
    textSize(25);
    fill("red");
    text('Only 1 Life is left . Your Game may end soon',width/3.2,height/1.035);
  }
if(health_score>=5 && gameState!=4 && gameState!=5 && gameState!=0 && gameState!=1 ){
  textSize(20);
  fill("brown");
  text( 'Health Score',width/1.33,height/28);
  fill(rgb(50,205,50));
 textSize(22);
  text( ' : '+health_score,width/1.28,height/14);
}else {if(health_score<5 && gameState!=4 && gameState!=5 && gameState!=0 && gameState!=1 && health_score>-1){
  textSize(22);
  fill("red");
  text( ' : '+health_score,width/1.28,height/14);
}else{
  if( gameState!=4 && gameState!=5 && gameState!=0 && gameState!=1){
  fill("red");
 textSize(22);
  text( ' : '+'0',width/1.28,height/14);
}
}
if( gameState!=4 && gameState!=5 && gameState!=0 && gameState!=1){
  textSize(20);
  fill("brown");
  text( 'Health Score',width/1.33,height/28);
}

}
if(gameState!=4 && gameState!=0 && gameState!=1 && gameState!=5){
  textSize(22);
  fill("blue");
  text( 'Points',width/10,height/28);
  fill('purple');
  text( ' : '+points_score,width/9,height/14);
}

}

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
 
   usertaking = getCookie("playerName");
  if (usertaking != "") {
 
  } else {
    
  //if(usertaking.indexOf(' ')===0 && usertaking.length>=5 && usertaking.length<13){
      //alert("Only First Name Only Above 5 Characters without any gap and refresh the page again to enter your name and to play the game.");
      if(gameState===0)
      usertaking = prompt("Please enter your First Name Only to Play the Game . Do not Enter more than 12 characters or less than 4 characters or Donot Enter any Number.  Ex:- Tim instead of Tim John:","");
    //}
    
   

    // if( usertaking.length>=4 && usertaking.length!==0 && usertaking.length<=13 && usertaking.indexOf(' ')==0 && usertaking.length!==0 ){
      if(usertaking!==null && usertaking!==" "  && usertaking.length>=4 && usertaking.length<=15  && usertaking.indexOf(' ') > 0===false && /^[a-zA-Z]/.test(usertaking)===true ){
    setCookie("playerName", usertaking, 30);
      
     //}
    }else{
      location.reload();
    }

    
  /*if(usertaking==null){
    alert('Donot Press the Cancel Button & do not go to another tab . Refreshthe Page Again to Register your Name to the database and play the Game');
  }*/
  }
}

