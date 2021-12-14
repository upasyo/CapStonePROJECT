class Game{
    constructor(){
      this.button=createButton("Click to Answer the Question");
      this.button.position(width/2.3,height/1.5);
      this.button.style("outline","0");

      this.button3=createButton("SUBMIT");;
      this.button3.position(width/2.05,height/1.9);
      this.button3.style("outline","0");
      this.button3.style("background-color","blue");
      this.button3.style("color","white");
      this.button3.style("border","none");
      this.button3.style("border-radius","10px");
      this.button3.style("width","100px");
      this.button3.style("height","30px");
      this.button3.hide();
    }
    start(){
      restart=createSprite(width/1.9,height/1.4);
      restart.addImage(restart_Img);
      restart.scale=0.14;
      //restart.debug=true;
         ground1= createSprite(width/1.13,height/2,15,800);
         ground2= createSprite(width/7.3,height/2,15,800);
         ground3= createSprite(width/15,height/9,180,860);
         ground4= createSprite(width/1.05,height/9,180,860);
         ground1.visible=true;
         ground2.visible=true;
        
         ball1=createSprite(width/6,height/3.5);
         ball1.addImage(ball1_Img);
         ball1.scale=0.13;
        
        
        
         ball3=createSprite(width/1.25,height/2.65);
         ball3.addImage(ball1_Img);
         ball3.scale=0.13;
        
        
         ball4=createSprite(width/2,height/2.08);
         ball4.addImage(ball1_Img);
         ball4.scale=0.13;
        
        
         ball5=createSprite(width/1.25,height/1.75);
         ball5.addImage(ball1_Img);
         ball5.scale=0.13;
        
        
         ball6=createSprite(width/6,height/1.5);
         ball6.addImage(ball1_Img);
         ball6.scale=0.13;

         /*ball7=createSprite(width/6,height/5);
         ball7.addImage(ball1_Img);
         ball7.scale=0.13;*/
         ball1.velocityX=random(39.9,41.5);
         ball3.velocityX=random(-18,-22);
         ball4.velocityX=random(-20,-35);
         ball5.velocityX=random(17,26);
         ball6.velocityX=random(34.5,39.5);
         //ball7.velocityX=random(36.5,39.5);
         
         // box1=createSprite(width/1.25,height/2.6,10,580,89);
         //box2=createSprite(width/4,height/2.6,10,580);
         box3=createSprite(width/1.9,height/20,700,10);
         box4=createSprite(width/2.82,height/1.4,10,120);

         box5=createSprite(width/1.9,height/1.27,700,10);
         box6=createSprite(width/1.65,height/2.25,10,150);
         box7=createSprite(width/2.2,height/2.25,10,150);
         box8=createSprite(width/1.9,height/2.9,200,10);

         box9=createSprite(width/1.45,height/1.4,10,120);

         box10=createSprite(width/2.82,height/4,10,120);
         box11=createSprite(width/1.48,height/4,10,120);
         box12=createSprite(width/1.88,height/1.8,200,10)
         box4.visible=false;
         box5.visible=false;
         box9.visible=false;
         box10.visible=false;
         box11.visible=false;
       
         //box1.addImage(wood_Img);
          box12.shapeColor=color(rgb(231, 187, 56));
          box7.shapeColor=color(rgb(231, 187, 56));
          box8.shapeColor=color(rgb(231, 187, 56));
          box3.shapeColor=color(rgb(231, 187, 56));
          box6.shapeColor=color(rgb(231, 187, 56));
          //box2.addImage(wood_Img2);
          box3.addImage(wood_Img2);
          box5.addImage(wood_Img2);

          rect(width/2, height/2, 55, 55, 20, 15, 10, 5);
          lazer1=createSprite(width/3, height/3.8, 7, 100);
          lazer2=createSprite(width/1.6, height/1.32, 120, 7);
          lazer3=createSprite(width/1.435, height/3.8,7,100);
          lazer4=createSprite(width/1.7, height/5.5, 120, 7);
          //lazer1.addImage(lazerImg);
         lazer1.shapeColor=color("red");
         lazer2.shapeColor=color("red");
         lazer3.shapeColor=color("red");
         lazer4.shapeColor=color("red");
         //lazer1.debug=true;
         //lazer2.debug=true;
         
        
         lazer1.setCollider("rectangle",0,0,lazer1.width,lazer1.height);
         lazer2.setCollider("rectangle",0,0,lazer2.width,lazer2.height);
         lazer3.setCollider("rectangle",0,0,lazer3.width,lazer3.height);
         lazer4.setCollider("rectangle",0,0,lazer4.width,lazer4.height);
         //lazer1.velocityY=4;
         //box5.debug=true;
         //box3.debug=true;
         box3.setCollider("rectangle",0,0,600,120);
         box5.setCollider("rectangle",0,0,600,20);
         lazer1.velocityY=random(-5,-10);
         // lazer1.setVelocity(5,5);
          lazer2.velocityX=random(-5,-7);
          lazer3.velocityY=random(-5,-15);
          lazer4.velocityX=random(-10,-17);
         babytoy1=createSprite(width/1.35,height/7);
         babytoy1.addImage(babytoy1_Img);
         babytoy1.scale=0.2;
         
         babytoy2=createSprite(width/1.35,height/3.2);
         babytoy2.addImage(babytoy2_Img);
         babytoy2.scale=0.2;

         babytoy3=createSprite(width/3.4,height/7);
         babytoy3.addImage(babytoy3_Img);
         babytoy3.scale=0.3;

         babytoy4=createSprite(width/3.4,height/3.2);
         babytoy4.addImage(babytoy4_Img);
         babytoy4.scale=0.4;

         babytoy5=createSprite(width/3.4,height/1.7);
         babytoy5.addImage(babytoy5_Img);
         babytoy5.scale=0.2;

         babytoy6=createSprite(width/3.4,height/1.3);
         babytoy6.addImage(babytoy6_Img);
         babytoy6.scale=0.2;
         //babytoy6.debug=true;
         babytoy6.setCollider("rectangle",20,20,210,250);

         babytoy7=createSprite(width/1.35,height/1.65);
         babytoy7.addImage(babytoy7_Img);
         babytoy7.scale=0.34;

         babytoy8=createSprite(width/1.35,height/1.3);
         babytoy8.addImage(babytoy8_Img);
         babytoy8.scale=0.35;
         
         points2_1=createSprite(width/9,height/7);
         points2_1.addImage(points_Img2);
         points2_1.scale=0.25;
         //points2_1.debug=true;

         points2_1.setCollider("circle",0,0,180);

         points2_2=createSprite(width/9,height/1.4);
         points2_2.addImage(points_Img2);
         points2_2.scale=0.25;
         points2_2.setCollider("circle",0,0,180);

         points2_3=createSprite(width/1.15,height/7);
         points2_3.addImage(points_Img2);
         points2_3.scale=0.25;
         points2_3.setCollider("circle",0,0,180);

         points2_4=createSprite(width/1.15,height/1.4);
         points2_4.addImage(points_Img2);
         points2_4.scale=0.25;
         points2_4.setCollider("circle",0,0,180);
         
         points1_1=createSprite(width/2.2,height/11);
         points1_1.addImage(points_Img2);
         points1_1.scale=0.25;
         points1_1.setCollider("circle",0,0,180);

         points1_2=createSprite(width/1.4,height/1.15);
         points1_2.addImage(points_Img2);
         points1_2.scale=0.25;
         points1_2.setCollider("circle",0,0,180);
         //door.debug=true;

        
         ground5=createSprite(width/2,height/1.3,width-390,height-90);
         ground5.visible=false;
         ground6=createSprite(width/4,height/11,650,20);
         ground6.visible=false;
         ground7=createSprite(width/1.2,height/11,303,20);
         ground7.visible=false;

         blocktoblock=createSprite(width/1.9,height/1.5,width-width/1.3);
         blocktoblock.visible=false;
         block66=createSprite(width/1.45,height/1.8,5,100);
         block67=createSprite(width/2.25,height/1.8,5,100);

         block66.visible=false;
         block67.visible=false;
         
         diamond=createSprite(width/1.9,height/2.2)
         diamond.addImage(diamond_Img);
         diamond.scale=0.3;
         suma=round(random(5000,12000));
         sumb=round(random(8000,16000));
         accessCode=suma+sumb;
    }

starting(){

  this.button.hide();
  restart.visible=false;
  ground1.visible=false;
  ground2.visible=false;
  ground3.visible=false;
  ground4.visible=false;

  points2_1.visible=false;
  points2_2.visible=false;
  points2_3.visible=false;
  points2_4.visible=false;

  points1_1.visible=false;
  points1_2.visible=false;
ball3.visible=false;
ball4.visible=false;
ball5.visible=false;
ball6.visible=false;
//ball7.visible=false;
ball1.visible=false;
door.visible=false;

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
 ball1.bounceOff(edges);
 ball3.bounceOff(edges);
 ball4.bounceOff(edges);
 ball5.bounceOff(edges);
 ball6.bounceOff(edges);
 diamond.visible=false;

 if(keyCode===32)
    gameState=1;
  
  drawSprites();
  fill(color("red"));
  textSize(25);
  text("Press Space Bar Key to Start the Game",width/3,height/3);


  if(usertaking!=" " && usertaking!==null ){
    noStroke();
    fill("blue");
    textSize(30);
    const name1= usertaking.toLowerCase();
    const name2 = name1.charAt(0).toUpperCase() + name1.slice(1);
    text("Welcome again " + name2,width/2.6,height/5);
  }

  if(usertaking==null){
    noStroke();
    fill("blue");
    textSize(30);
    text("Welcome again ",width/2.35,height/5);
  }
  /*textSize(40);
  fill("Blue");
  noStroke();
  text("Welcome "+usertaking,width/2.5,height/5);
  */
}



  //gameState===1
    play(){
      restart.visible=false;
      /*robot.depth=points.depth;
      robot.depth=health.depth;
      robot.depth+=1;*/
this.button.hide();
diamond.visible=false;
  //game_ambience.stop();
  robot.velocityX=5;

  ground1.visible=false;
  ground2.visible=false;
  ground3.visible=false;
  ground4.visible=false;

  points2_1.visible=false;
  points2_2.visible=false;
  points2_3.visible=false;
  points2_4.visible=false;

  points1_1.visible=false;
  points1_2.visible=false;

  if(robot.x>width/1.2){
    gameState=2;
    robot.x=width/3;
  }
  /*lazer1.visible=false;
  lazer2.visible=false;*/

ball3.visible=false;
ball4.visible=false;
ball5.visible=false;
ball6.visible=false;
ball1.visible=false;
door.visible=false;
//key.visible=false;

drawSprites();
}

//gameState===2
played(){
  restart.visible=false;
  this.button.hide();
  //lazer1.remove();
  //lazer2.remove();
  robot.bounceOff(ground3);
  robot.bounceOff(ground4);
  robot.bounceOff(ground6);
  robot.bounceOff(ground7);
  diamond.visible=false;
  /*robot.depth=points.depth;
  robot.depth=health.depth;
  robot.depth+=1;*/

  ground1.visible=false;
  ground2.visible=false;
  ground3.visible=false;
  ground4.visible=false;

  points2_1.visible=false;
  points2_2.visible=false;
  points2_3.visible=false;
  points2_4.visible=false;
 // points1_1.visible=true;
 // points1_2.visible=true;

  if(robot.isTouching(points1_1)){
    points_score+=50;
    health_score+=5;
    points1_1.x=3000;
    score_sound.play();

  }
  if(robot.isTouching(points1_2)){
    points_score+=50;
    health_score+=5;
    score_sound.play();
    points1_2.visible=false;
    points1_2.x=2000;
  }else if(robot.y<height/3.6 && robot.isTouching(door)===false && points1_2.x!==2000){
    points1_2.x=90000;
  }
if(robot.y<height/4.2 && robot.isTouching(door)===false){
 gameState=6;
 robot.scale=0.25;
 points1_1.x=99000;
 //points1_2.x=99000;
 }
 /*if(points1_1.x==99000 && points1_2.x==90000){
   health_score+=10;
   points_score+=100;
   points1_1.x=59000;
   points1_2.x=50000;
 }
 */
 if(keyDown("DOWN_ARROW") && robot.y<=height/1.2){
  robot.scale +=0.010;
  }
  
  robot.velocityX=0;
  
  ball1.visible=true;
  ball3.visible=true;
  ball4.visible=true;
  ball5.visible=true;
  ball6.visible=true;
  //ball7.visible=true;
  
  door.visible=true;
  //key.visible=true;
  
  //ball1.debug=true;
  ball1.setCollider("circle",5,5,200);
  //ball3.debug=true;
  ball3.setCollider("circle",5,5,200);
  //ball4.debug=true;
  ball4.setCollider("circle",5,5,200);
  //ball5.debug=true;
  ball5.setCollider("circle",5,5,200);
  //ball6.debug=true;
  ball6.setCollider("circle",5,5,200);
  
  
  if(robot.isTouching(ball3)|| robot.isTouching(ball4)|| robot.isTouching(ball5)|| robot.isTouching(ball6)){
  robot.y=height/1.2;
  robot.scale=0.45;
  ballhit_sound.play();
  ballhit_sound.setVolume(2);
  //points_score=200;
  }
  
  // console.log("X :"+robot.x+" Y:"+robot.y)
  robot.depth=ball1.depth;
  robot.depth=ball3.depth;
  robot.depth=ball4.depth;
  robot.depth=ball5.depth;
  robot.depth=ball6.depth;
  //robot.depth=ball7.depth;
  robot.depth +=1;
  
  if(keyDown("RIGHT_ARROW")){
  robot.x=robot.x+10;
  }else if(keyDown("LEFT_ARROW")){
  robot.x=robot.x-10;
  }else if(keyDown("UP_ARROW")){
  robot.y=robot.y-10;
  robot.scale -=0.006;
  }else if(keyDown("DOWN_ARROW")){
  robot.y=robot.y+10;
  }
  if(robot.scale<=0.23 && robot.y>height/1.4){
  robot.scale+=.5;
  }
  if(robot.scale>=0.46){
  robot.scale-=0.004;
  }
  if(robot.y<height/2 && robot.scale>=0.3){
  robot.scale-=0.008;
  }
  if(robot.scale<0){
    robot.scale+=0.08;
  }
  
  //text(robot.scale,width/2,height/2);
  lazer1.visible=false;
  lazer2.visible=false;
  lazer3.visible=false;
  lazer4.visible=false;
  points1_1.visible=true;
  points1_2.visible=true;
 drawSprites();
 if(health_score>=1 && health_score<=4 && robot.isTouching(points1_2)===false && points1_2.x!==2000 && robot.y>height/1.3){
  fill(color("red"));
  textSize(15);
  text("Take the Coin to increase health",width/1.6,height/1.15)
}
}

playafter(){
  edges=createEdgeSprites();
  robot.bounceOff(edges);
//Blank for text 1
//console.log(robot.scale);
robot.bounceOff(ground3);
robot.bounceOff(ground4);
robot.bounceOff(ground5);
robot.bounceOff(ground6);
robot.bounceOff(ground7);
if(robot.y<=height/2){
  fill(color("magenta"))
  textSize(18);
  text("Touch the Door",width/1.6,height/6);
}
if(door.x===width/2 && door.y===height/2){
  points1_1.remove();
  points1_2.remove();
}else{
  points1_1.visible=true;
  points1_2.visible=true;
}
console.log(points1_1.x)
if( points1_2.x===2000 && points1_1.x===99000 && door.scale==1.3===false )
{
  points_score+=50;
  health_score+=5;
  score_sound.play();
  points1_2.x=50000;
  points1_1.x=55555;
  
}else if(points1_2.x===90000 && points1_1.x===99000 && door.scale==1.3===false )
{
  points_score+=100;
  health_score+=10;
  points1_2.x=50000;
  points1_1.x=55555;
  score_sound.play();
}
if(  points1_2.x===50000 &&points1_1.x===55555 && door.scale==1.3===false )
{
  textSize(22);
  fill("red");
  text("All Points are Automatically Collected as you Crossed the Balls",width/3.5,height/2.2);
  
}

if(robot.isTouching(door)){
  /*this.input=createInput();
  this.input.position(width/2.5,height/1.2);
  this.input.style("background","white");*/
  //user = prompt("Enter a number");



  this.button.show();




points1_1.remove();
points1_2.remove();



  ball1.remove();
  ball3.remove();
  ball4.remove();
  ball5.remove();
  ball6.remove();
  robot.visible=false;
  //door.debug=true;
  door.setCollider("rectangle", 0, 0, windowWidth,windowHeight,0);
  door.x=width/2;
  door.y=height/2;
  

  robot.x=width/9;
  robot.y=height/1.1;
  door.scale=+1.3;


this.button.mousePressed(() =>{
  user = prompt("Enter a number");
  console.log(accessCode);

  if(user>0 ){
  if(security.authenticated(accessCode,user)  ){
    this.button1=createButton("Go to Next Level");
    this.button1.position(width/2.2,height/1.5);
    this.button1.style("background","green");
    this.button1.style("color","white");
   this.button.hide();
    this.button1.mousePressed(()=> {
      this.button.hide();
      this.button1.hide();
      gameState=3;
    })
    this.button.remove();
    points_score+=50;
    score_sound.play();



    if(points_score+=50 === true && usertaking!==null && usertaking!==undefined)
      alert(usertaking.toUpperCase()+" You Have Got Extra 50 points");
      else
      alert("You Have Got Extra 50 points");
  

    





  }else{
    if(user.indexOf(' ')>0){
      alert("Please Answer the Question Without Giving any space or gap.")
    }
    if(user!==""  && user.indexOf(' ')>0===false && user.length===4 && accessCode!==user ){
       alert("Wrong Answer");
       points_score-=30;
       if(points_score-=30 === true){
         alert("Be Careful . Your Points are Decreasing on Answering Wrong Answers by 30 . **While yours Points will increase by 50 on Answering Correct Answer");
       }
      }else  if(user!==""  && user.indexOf(' ')>0===false && user.length===5 && accessCode!==user ){
        alert("Wrong Answer");
        points_score-=30;
        if(points_score-=30 === true){
          alert("Be Careful . Your Points are Decreasing on Answering Wrong Answers by 30 . **While yours Points will increase by 50 on Answering Correct Answer");
       }
     }
      if(user==="")
        alert("Answer the Question first to get promoted to the next level");
      if(user === null){
        alert("Answer your Question . Do not Press CANCEL or REFRESH Button");
      }
    
  }
}else {
  if(user<=0 && user!==""){
    alert("Enter only Numeric Value except 0 & NEGATIVE Numbers ");
   }else
 if(user.length!==4 || user.length!==5 || user.length!==0  && user!==""){
   alert("Enter the Answer in Proper Manner. Only 4 to 5 Numbers are Allowed . It Seems you are writing something else's.");
 }
  

}

})

}
if(accessCode===parseInt(user)){
  //alert("hello");
  door.setCollider("rectangle",0,0,20,20);
}



if(keyDown("RIGHT_ARROW")){
  robot.x=robot.x+10;
  }else if(keyDown("LEFT_ARROW")){
  robot.x=robot.x-10;
  }else if(keyDown("UP_ARROW")){
  robot.y=robot.y-10;
  }else if(keyDown("DOWN_ARROW")){
  robot.y=robot.y+10;
  }/*Alternate Code*/
  ball1.remove();
  ball3.remove();
  ball4.remove();
  ball5.remove();
  ball6.remove();

drawSprites();

if(accessCode===parseInt(user)){

  fill(rgb(0, 229, 49));
  textSize(20);
  text("Correct Answer 👍",width/2.25,height/1.4);
  }
  if(robot.isTouching(door)){
    fill("white");
    textSize(25);
    text("Solve :- "+suma+" + "+sumb,width/2.5,height/1.6);
    }
}
playing(){
  


  if(keyDown("RIGHT_ARROW")){
    robot.x=robot.x+10;
    }else if(keyDown("LEFT_ARROW")){
    robot.x=robot.x-10;
    }else if(keyDown("UP_ARROW")){
    robot.y=robot.y-10;
    }else if(keyDown("DOWN_ARROW")){
    robot.y=robot.y+10;
    }
  restart.visible=false;
  ground1.visible=false;
  ground2.visible=false;
  ground3.visible=false;
  ground4.visible=false;

  points2_1.visible=true;
  points2_2.visible=true;
  points2_3.visible=true;
  points2_4.visible=true;

  points1_1.visible=false;
  points1_2.visible=false;

  edges=createEdgeSprites();
if(robot.isTouching(lazer1) || robot.isTouching(lazer2) || robot.isTouching(lazer4)){
    robot.x=width/9;
    robot.y=height/2;
    health_score--;
    points_score-=10;
    lazerhit_sound.play();
    lazerhit_sound.setVolume(0.5);
} if(robot.isTouching(lazer3)){
    robot.x=width/1.1;
    robot.x=height/2;
    health_score--;
    points_score-=10;
    lazerhit_sound.play();
    lazerhit_sound.setVolume(0.5);
}
robot.bounce(box6);
robot.bounce(box7);
robot.bounce(box11);
robot.bounce(box8);
robot.bounce(box12);
robot.bounce(box3);
robot.bounce(box5);
robot.bounce(toysGroup);
robot.depth=box3.depth;
robot.depth=box5.depth;
robot.depth=babytoy6.depth;
robot.depth=babytoy8.depth;
robot.depth+=1;
toysGroup.setVisibleEach(true);
/*robot.depth=points.depth;
robot.depth=health.depth;
robot.depth+=1;*/
/*
 lazer3.bounceOff(box5);
lazer3.bounceOff(box6);
lazer3.bounceOff(box5);

 

  lazer2.visible=true;*/
 
  //lazer2.bounceOff(box3);
//lazer2.bounceOff(box7);
  this.button.hide();
  toysGroup.add(babytoy1);
  toysGroup.add(babytoy2);
  toysGroup.add(babytoy3);
  toysGroup.add(babytoy4);
  toysGroup.add(babytoy5);
  toysGroup.add(babytoy6);
  toysGroup.add(babytoy7);
  toysGroup.add(babytoy8);
  door.remove();
  robot.scale=0.36;
  robot.visible=true;
  console.log(robot.x,robot.y);

  //ball7.remove();
/*Alternate Code*/
robot.depth=lazer1.depth;
robot.depth=lazer2.depth;
robot.depth+=1;

box4.visible=false;
box9.visible=false;
box10.visible=false;
box11.visible=false;
points1_1.remove();
points1_2.remove();
if(robot.isTouching(points2_1)  && points2_3.x===59000===false && points2_2.x===29000===false && points2_4.x===89000===false){
    points_score+=round(random(20,50));
    health_score+=2;
    score_sound.play();
    points2_1.x=20000;
}
if(robot.isTouching(points2_1) && points2_2.x===29000===true && points2_3.x===59000===false && points2_4.x===89000===false){
    points_score+=round(random(20,50));
    health_score+=2;
    score_sound.play();
    points2_1.x=20000;
    
}
if(robot.isTouching(points2_1) && points2_2.x===29000===false && points2_3.x===59000===true && points2_4.x===89000===false){
  points_score+=round(random(20,50));
  health_score+=2;
  score_sound.play();
  points2_1.x=20000;
}
if(robot.isTouching(points2_1) && points2_2.x===29000===false && points2_3.x===59000===false && points2_4.x===89000===true){
  points_score+=round(random(20,50));
  health_score+=2;
  score_sound.play();
  points2_1.x=20000;
}

//2
if(robot.isTouching(points2_2)  && points2_3.x===59000===false && points2_1.x===20000===false && points2_4.x===89000===false){
  points_score+=round(random(25,35));
  health_score+=2;
  score_sound.play();
  points2_2.x=29000;
}

if(robot.isTouching(points2_2) && points2_1.x===20000===true && points2_3.x===59000===false && points2_4.x===89000===false){
  points_score+=round(random(25,35));
  health_score+=2;
  score_sound.play();
  points2_2.x=29000;
}
if(robot.isTouching(points2_2)  && points2_3.x===59000===true && points2_1.x===20000===false && points2_4.x===89000===false){
  points_score+=round(random(25,35));
  health_score+=2;
  score_sound.play();
  points2_2.x=29000;
}

if(robot.isTouching(points2_2) && points2_1.x===20000===false && points2_3.x===59000===false && points2_4.x===89000===true){
  points_score+=round(random(25,35));
  health_score+=2;
  score_sound.play();
  points2_2.x=29000;
}
//3
if(robot.isTouching(points2_3) && points2_1.x===20000===false && points2_2.x===29000===false && points2_4.x===89000===false){
  points_score+=round(random(40,50));
  health_score+=2;
  score_sound.play();
  points2_3.x=59000;
}
if(robot.isTouching(points2_3) && points2_1.x===20000===true && points2_2.x===29000===false && points2_4.x===89000===false){
  points_score+=round(random(40,50));
  health_score+=2;
  score_sound.play();
  points2_3.x=59000;
}
if(robot.isTouching(points2_3) && points2_1.x===20000===false && points2_2.x===29000===true && points2_4.x===89000===false){
  points_score+=round(random(40,50));
  health_score+=2;
  score_sound.play();
  points2_3.x=59000;
}
if(robot.isTouching(points2_3) && points2_1.x===20000===false && points2_2.x===29000===false && points2_4.x===89000===true){
  points_score+=round(random(40,50));
  health_score+=2;
  score_sound.play();
  points2_3.x=59000;
}
//4
if(robot.isTouching(points2_4) && points2_2.x===29000===false && points2_3.x===59000===false && points2_1.x===20000===false){
  points_score+=round(random(40,50));
  health_score+=2;
  score_sound.play();
  points2_4.x=89000;
}
if(robot.isTouching(points2_4) && points2_2.x===29000===true && points2_3.x===59000===false && points2_1.x===20000===false){
  points_score+=round(random(40,50));
  health_score+=2;
  score_sound.play();
  points2_4.x=89000;
}
if(robot.isTouching(points2_4) && points2_2.x===29000===false && points2_3.x===59000===true && points2_1.x===20000===false){
  points_score+=round(random(40,50));
  health_score+=2;
  score_sound.play();
  points2_4.x=89000;
}
if(robot.isTouching(points2_4) && points2_2.x===29000===false && points2_3.x===59000===false && points2_1.x===20000===true){
  points_score+=round(random(40,50));
  health_score+=2;
  score_sound.play();
  points2_4.x=89000;
}
//if(points2_1.x===20000 && points2_2.x===29000){
//}
/*
//left side points
//1
if(robot.isTouching(points2_1)===true && points2_2.x===29000===true && points2_3.x===59000===false && points2_4.x===89000===false){
  points_score+=20;
  health_score+=1;
  points2_1.x=20000;
  score_sound.play();
} if(robot.isTouching(points2_1)===true && points2_2.x===29000===true && points2_3.x===59000===true && points2_4.x===89000===true){
  points_score+=10;
  points2_1.x=20000;
  score_sound.play();
}
//isTouching2_2
if(robot.isTouching(points2_1)===true && points2_2.x===29000===false && points2_3.x===59000===false && points2_4.x===89000===false){
points2_1.x=20000;
points_score+=50;
health_score+=2;
score_sound.play();
}
//isTouching2_3
if(points2_3.x===59000===true && robot.isTouching(points2_1)===true && points2_2.x===29000===false && points2_4.x===89000===false){
  points2_1.x=20000;
  points_score+=20;
  health_score+=1;
  score_sound.play();
}
//isTouching2_4
if(points2_4.x===89000===true && robot.isTouching(points2_1)===true && points2_3.x===59000===false && points2_2.x===29000===false){
  points2_1.x=20000;
  points_score+=20;
  health_score+=1;
  score_sound.play();
}


//2
//isTouching2_1
if(robot.isTouching(points2_2)  && points2_1.x===20000===true && points2_3.x===59000===false && points2_4.x===89000===false){
  points_score+=20;
  health_score+=1;
  points2_2.x=29000;
  score_sound.play();
} if(robot.isTouching(points2_2)===true && points2_1.x===20000===true && points2_3.x===59000===true && points2_4.x===89000===true){
  points_score+=10;
  points2_2.x=29000;
  score_sound.play();
}
if(robot.isTouching(points2_2) && points2_1.x===20000===false && points2_3.x===59000===false && points2_4.x===89000===false){
  points_score+=50;
  health_score+=2;
  points2_2.x=29000;
  score_sound.play();
}
//isTouching2_3
if(points2_3.x===59000===true && robot.isTouching(points2_2)===true && points2_1.x===20000===false && points2_4.x===89000===false){
  points2_2.x=29000;
  points_score+=20;
  health_score+=1;
  score_sound.play();
}
//isTouching2_4
if(points2_4.x===89000===true && robot.isTouching(points2_2)===true && points2_1.x===20000===false && points2_3.x===59000===false){
  points2_2.x=29000;
  points_score+=20;
  health_score+=1;
  score_sound.play();
}
//

//right side points
//1
if(robot.isTouching(points2_3)===true && points2_4.x===89000===true && points2_2.x===29000===false && points2_1.x===20000===false){
  points_score+=20;
  health_score+=1;
  points2_3.x=59000;
  score_sound.play();
} if(robot.isTouching(points2_3)===true && points2_1.x===20000===true && points2_2.x===29000===true && points2_4.x===89000===true){
  points_score+=10;
  points2_3.x=59000;
  score_sound.play();
}

if(robot.isTouching(points2_3)===true && points2_4.x===89000===false && points2_2.x===29000===false && points2_1.x===20000===false){
  points_score+=50;
  health_score+=2;
  points2_3.x=59000;
  score_sound.play();
}

//isTouching2_2
if(points2_2.x===29000===true && robot.isTouching(points2_3)===true && points2_1.x===20000===false && points2_4.x===89000===false){
  points2_3.x=59000;
  points_score+=20;
  health_score+=1;
  score_sound.play();
}

//isTouching2_1
if(points2_1.x===20000===true && robot.isTouching(points2_3)===true && points2_2.x===29000===false && points2_4.x===89000===false){
  points2_3.x=59000;
  points_score+=20;
  health_score+=1;
  score_sound.play();
}
//2
if(robot.isTouching(points2_4)===true && points2_3.x===59000===true && points2_2.x===29000===false && points2_1.x===20000===false){
  points_score+=20;
  health_score+=1;
  points2_4.x=89000;
  score_sound.play();
} if(robot.isTouching(points2_4)===true && points2_1.x===20000===true && points2_3.x===59000===true && points2_2.x===29000===true){
  points_score+=10;
  points2_4.x=89000;
  score_sound.play();
}

if(robot.isTouching(points2_4)===true && points2_3.x===59000===false && points2_2.x===29000===false && points2_1.x===20000===false ){
  points_score+=50;
  health_score+=2;
  points2_4.x=89000;
  score_sound.play();
}

//isTouching2_2
if(points2_2.x===29000===true && robot.isTouching(points2_4)===true && points2_1.x===20000===false && points2_3.x===59000===false){
  points2_4.x=89000;
  points_score+=20;
  health_score+=1;
  score_sound.play();
}

//isTouching2_1
if(points2_1.x===20000===true && robot.isTouching(points2_4)===true && points2_2.x===29000===false && points2_3.x===59000===false){
  points2_4.x=89000;
  points_score+=20;
  health_score+=1;
  score_sound.play();
}
//
*/

/*
if(robot.isTouching(points2_1)===true &&  points2_4.x===89000===false){
points2_1.x=20000;
points_score+=50;
health_score+=2;
score_sound.play();
}




if(robot.isTouching(points2_2)  && points2_3.x===59000===true){
  points_score+=20;
  health_score+=1;
  points2_2.x=29000;
  score_sound.play();
}
if(robot.isTouching(points2_2) && points2_3.x===59000===false){
  points_score+=50;
  health_score+=2;
  points2_2.x=29000;
  score_sound.play();
}
if(robot.isTouching(points2_2)  && points2_4.x===89000===true){
  points_score+=20;
  health_score+=1;
  points2_2.x=29000;
  score_sound.play();
}
if(robot.isTouching(points2_2) && points2_4.x===89000===false){
  points_score+=50;
  health_score+=2;
  points2_2.x=29000;
  score_sound.play();
}



if(robot.isTouching(points2_3) && points2_4.x===89000===true){
  points_score+=20;
  health_score+=1;
  points2_3.x=59000;
  score_sound.play();
}
if(robot.isTouching(points2_3) && points2_4.x===89000===false){
  points_score+=50;
  health_score+=2;
  points2_3.x=59000;
  score_sound.play();
}
if(robot.isTouching(points2_3) && points2_1.x===20000===true){
  points_score+=20;
  health_score+=1;
  points2_3.x=59000;
  score_sound.play();
}
if(robot.isTouching(points2_3) && points2_1.x===20000===false){
  points_score+=50;
  health_score+=2;
  points2_3.x=59000;
  score_sound.play();
}
if(robot.isTouching(points2_3) && points2_2.x===29000===true){
  points_score+=20;
  health_score+=1;
  points2_3.x=59000;
  score_sound.play();
}
if(robot.isTouching(points2_3) && points2_2.x===29000===false){
  points_score+=50;
  health_score+=2;
  points2_3.x=59000;
  score_sound.play();
}



if(robot.isTouching(points2_4)  && points2_3.x===59000===true){
  points_score+=20;
  health_score+=1;
  points2_4.x=89000;
  score_sound.play();
}
if(robot.isTouching(points2_4)  && points2_3.x===59000===false){
  points_score+=50;
  health_score+=2;
  points2_4.x=89000;
  score_sound.play();
}

if(robot.isTouching(points2_4)  && points2_2.x===29000===true){
  points_score+=20;
  health_score+=1;
  points2_4.x=89000;
  score_sound.play();
}
if(robot.isTouching(points2_4)  && points2_2.x===29000===false){
  points_score+=50;
  health_score+=2;
  points2_4.x=89000;
  score_sound.play();
}

if(robot.isTouching(points2_4)  && points2_1.x===20000===true){
  points_score+=20;
  health_score+=1;
  points2_4.x=89000;
  score_sound.play();
}
if(robot.isTouching(points2_4)  && points2_1.x===20000===false){
  points_score+=50;
  health_score+=2;
  points2_4.x=89000;
  score_sound.play();
}
*/





//robot.x=width/1.95;
//robot.y=height/1.5;



if(robot.isTouching(blocktoblock)===true){
  box12.velocityX=3;
  lazer1.remove();
  lazer3.remove();
  lazer2.remove();
  lazer4.remove();
  if(box12.isTouching(block66)){
    box12.setVelocity(0,0);
  }
}else if(box12.isTouching(block66) && robot.isTouching(blocktoblock)===false){
  box12.velocityX=-3;

}else if(box12.isTouching(block67))
box12.setVelocity(0,0);


if(robot.bounce(diamond)){
  robot.x=2000;
  robot.y=200;
  diamond.x=2000;
  diamond.y=2000;
  this.input=createInput();
  this.input.position(width/2.14,height/2.2);
  this.button3.show();
}

/*if(){
  box12.x=width/1.5;
  lazer1.remove();
  lazer3.remove();
  lazer2.remove();
  lazer4.remove();
  robot.remove();
  diamond.remove();
}*/

this.button3.mousePressed(()=>{

  if(security.authentication(capital,this.input.value()))
 {
   /*if(points2_1.x===26000){
     points_score+=150;
     points2_1.x=15000;
     score_sound.play();
   }*/
//score of the other two points
//1

if(points2_1.x===20000===true && points2_2.x===29000===true && points2_3.x===59000===false && points2_4.x===89000===false){
points_score=points_score+round(random(20*2,45*2));
alert("The Extra Two Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_1.x===20000===true && points2_2.x===29000===true && points2_3.x===59000===true && points2_4.x===89000===false){
points_score=points_score+round(random(20,45));
alert("The Extra One Point Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_1.x===20000===true && points2_2.x===29000===true && points2_3.x===59000===false && points2_4.x===89000===true){
points_score=points_score+round(random(20,45));
alert("The Extra One Point Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_1.x===20000===true && points2_2.x===29000===false && points2_3.x===59000===true && points2_4.x===89000===true){
points_score=points_score+round(random(20,45));
alert("The Extra One Point Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_1.x===20000===true && points2_2.x===29000===false && points2_3.x===59000===false && points2_4.x===89000===false){
points_score=points_score+round(random(20*3,45*3));
alert("The Extra Three Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_1.x===20000===false && points2_2.x===29000===true && points2_3.x===59000===false && points2_4.x===89000===false){
points_score=points_score+round(random(20*3,45*3));
alert("The Extra Three Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_1.x===20000===false && points2_2.x===29000===false && points2_3.x===59000===true && points2_4.x===89000===false){
points_score=points_score+round(random(20*3,45*3));
alert("The Extra Three Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_1.x===20000===false && points2_2.x===29000===false && points2_3.x===59000===false && points2_4.x===89000===true){
points_score=points_score+round(random(20*3,45*3));
alert("The Extra Three Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_1.x===20000===true && points2_2.x===29000===false && points2_3.x===59000===true && points2_4.x===89000===false){
points_score=points_score+round(random(20*2,45*2));
alert("The Extra Two Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_1.x===20000===true && points2_2.x===29000===false && points2_3.x===59000===false && points2_4.x===89000===true){
points_score=points_score+round(random(20*2,45*2));
alert("The Extra Two Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_2.x===29000===true && points2_1.x===20000===false && points2_3.x===59000===true && points2_4.x===89000===false){
points_score=points_score+round(random(20*2,45*2));
alert("The Extra Two Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_2.x===29000===true && points2_1.x===20000===false && points2_3.x===59000===false && points2_4.x===89000===true){
points_score=points_score+round(random(20*2,45*2));
alert("The Extra Two Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_3.x===59000===true && points2_1.x===20000===true && points2_2.x===29000===false && points2_4.x===89000===false){
points_score=points_score+round(random(20*2,45*2));
alert("The Extra Two Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_3.x===59000===true && points2_1.x===20000===false && points2_2.x===29000===true && points2_4.x===89000===false){
points_score=points_score+round(random(20*2,45*2));
alert("The Extra Two Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_4.x===89000===true && points2_1.x===20000===true && points2_3.x===59000===false && points2_2.x===29000===false){
points_score=points_score+round(random(20*2,45*2));
alert("The Extra Two Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_4.x===89000===true && points2_1.x===20000===false && points2_3.x===59000===false && points2_2.x===29000===true){
points_score=points_score+round(random(20*2,45*2));
alert("The Extra Two Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}else if(points2_4.x===89000===false && points2_1.x===20000===false && points2_3.x===59000===false && points2_2.x===29000===false){
points_score=points_score+round(random(20*4,45*4));
alert("The Extra Four Points Score are automatically credited to your total score & you have got extra 30 points for winning the diamond as well as the Game.");
}
   
  /* if(points_score=points_score+round(random(20*2,45*2)))
      alert("The Extra Two Points Score are automatically credited to your total score.");
   else if(points_score=points_score+round(random(20,45)))
      alert("The Extra One Points Score are automatically credited to your total score.");
   else if(points_score=points_score+round(random(20*3,45*3)))
      alert("The Extra Three Points Score are automatically credited to your total score.");
   else if(points_score=points_score+10)
      alert("Trtrt");

*/
   points_score+=30;
   gameState=4;

   if(usertaking!==undefined && points_score!==null ){
    window.speechSynthesis.onvoiceschanged = function() {
      var voices = window.speechSynthesis.getVoices()
      var utterance = new SpeechSynthesisUtterance('Congratulations ,'+usertaking.toLowerCase()+',, You have Won the Game with a score of ,,  '+points_score+', points'+'   ,,,  Share your score to your friends and invite them through ,, Whatsapp or Facebook to get a chance to Play the Game.');
      utterance.voice = voices[3];
      utterance.lang = voices[4].lang;
      utterance.volume=0.7;
      window.speechSynthesis.speak(utterance);
    }
  }else if(points_score!==undefined){ 
    window.speechSynthesis.onvoiceschanged = function() {
      var voice = window.speechSynthesis.getVoices()
      var utterance1 = new SpeechSynthesisUtterance('Congratulations , You have Won the Game with a score of ,,  '+points_score+', points'+'    ,,  Share your score to your friends and invite them through ,, Whatsapp or Facebook to get a chance to Play the Game.');
      utterance1.voice = voice[8];
      utterance1.lang = voice[4].lang;
      utterance1.volume=0.7;
      window.speechSynthesis.speak(utterance1);
    }    
}
/*else if(security.authentication(capital,this.input.value()) && points_score==undefined && points_score==null){
      var voices2 = window.speechSynthesis.getVoices()
      var utterance2 = new SpeechSynthesisUtterance('Congratulations , You Have Won the Game ,,,  Share your performance to your friends and invite them through ,, Whatsapp or Facebook to get a chance to Play the Game.');
      utterance2.voice = voices2[8];
      utterance2.lang = voices2[4].lang;
}*/
    if(gameState===4){
     
        'use strict';

        var onlyOnKonami = false;
        
        $(function() {
          // Globals
          var $window = $(window)
            , random = Math.random
            , cos = Math.cos
            , sin = Math.sin
            , PI = Math.PI
            , PI2 = PI * 2
            , timer = undefined
            , frame = undefined
            , confetti = [];
          
          var runFor = 20000
          var isRunning = true
          
          setTimeout(() => {
              isRunning = false
          }, runFor);
        
          // Settings
          var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
            , pointer = 0;
        
          var particles = 150
            , spread = 20
            , sizeMin = 5
            , sizeMax = 12 - sizeMin
            , eccentricity = 10
            , deviation = 100
            , dxThetaMin = -.1
            , dxThetaMax = -dxThetaMin - dxThetaMin
            , dyMin = .13
            , dyMax = .18
            , dThetaMin = .4
            , dThetaMax = .7 - dThetaMin;
        
          var colorThemes = [
            function() {
              return color(200 * random()|0, 200 * random()|0, 200 * random()|0);
            }, function() {
              var black = 200 * random()|0; return color(200, black, black);
            }, function() {
              var black = 200 * random()|0; return color(black, 200, black);
            }, function() {
              var black = 200 * random()|0; return color(black, black, 200);
            }, function() {
              return color(200, 100, 200 * random()|0);
            }, function() {
              return color(200 * random()|0, 200, 200);
            }, function() {
              var black = 256 * random()|0; return color(black, black, black);
            }, function() {
              return colorThemes[random() < .5 ? 1 : 2]();
            }, function() {
              return colorThemes[random() < .5 ? 3 : 5]();
            }, function() {
              return colorThemes[random() < .5 ? 2 : 4]();
            }
          ];
          function color(r, g, b) {
            return 'rgb(' + r + ',' + g + ',' + b + ')';
          }
        
          // Cosine interpolation
          function interpolation(a, b, t) {
            return (1-cos(PI*t))/2 * (b-a) + a;
          }
        
          // Create a 1D Maximal Poisson Disc over [0, 1]
          var radius = 1/eccentricity, radius2 = radius+radius;
          function createPoisson() {
            // domain is the set of points which are still available to pick from
            // D = union{ [d_i, d_i+1] | i is even }
            var domain = [radius, 1-radius], measure = 1-radius2, spline = [0, 1];
            while (measure) {
              var dart = measure * random(), i, l, interval, a, b, c, d;
        
              // Find where dart lies
              for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
                a = domain[i], b = domain[i+1], interval = b-a;
                if (dart < measure+interval) {
                  spline.push(dart += a-measure);
                  break;
                }
                measure += interval;
              }
              c = dart-radius, d = dart+radius;
        
              // Update the domain
              for (i = domain.length-1; i > 0; i -= 2) {
                l = i-1, a = domain[l], b = domain[i];
                // c---d          c---d  Do nothing
                //   c-----d  c-----d    Move interior
                //   c--------------d    Delete interval
                //         c--d          Split interval
                //       a------b
                if (a >= c && a < d)
                  if (b > d) domain[l] = d; // Move interior (Left case)
                  else domain.splice(l, 2); // Delete interval
                else if (a < c && b > c)
                  if (b <= d) domain[i] = c; // Move interior (Right case)
                  else domain.splice(i, 0, c, d); // Split interval
              }
        
              // Re-measure the domain
              for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
                measure += domain[i+1]-domain[i];
            }
        
            return spline.sort();
          }
        
          // Create the overarching container
          var container = document.createElement('div');
          container.style.position = 'fixed';
          container.style.top      = '0';
          container.style.left     = '0';
          container.style.width    = '100%';
          container.style.height   = '0';
          container.style.overflow = 'visible';
          container.style.zIndex   = '9999';
        
          // Confetto constructor
          function Confetto(theme) {
            this.frame = 0;
            this.outer = document.createElement('div');
            this.inner = document.createElement('div');
            this.outer.appendChild(this.inner);
        
            var outerStyle = this.outer.style, innerStyle = this.inner.style;
            outerStyle.position = 'absolute';
            outerStyle.width  = (sizeMin + sizeMax * random()) + 'px';
            outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
            innerStyle.width  = '100%';
            innerStyle.height = '100%';
            innerStyle.backgroundColor = theme();
        
            outerStyle.perspective = '50px';
            outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
            this.axis = 'rotate3D(' +
              cos(360 * random()) + ',' +
              cos(360 * random()) + ',0,';
            this.theta = 360 * random();
            this.dTheta = dThetaMin + dThetaMax * random();
            innerStyle.transform = this.axis + this.theta + 'deg)';
        
            this.x = $window.width() * random();
            this.y = -deviation;
            this.dx = sin(dxThetaMin + dxThetaMax * random());
            this.dy = dyMin + dyMax * random();
            outerStyle.left = this.x + 'px';
            outerStyle.top  = this.y + 'px';
        
            // Create the periodic spline
            this.splineX = createPoisson();
            this.splineY = [];
            for (var i = 1, l = this.splineX.length-1; i < l; ++i)
              this.splineY[i] = deviation * random();
            this.splineY[0] = this.splineY[l] = deviation * random();
        
            this.update = function(height, delta) {
              this.frame += delta;
              this.x += this.dx * delta;
              this.y += this.dy * delta;
              this.theta += this.dTheta * delta;
        
              // Compute spline and convert to polar
              var phi = this.frame % 7777 / 7777, i = 0, j = 1;
              while (phi >= this.splineX[j]) i = j++;
              var rho = interpolation(
                this.splineY[i],
                this.splineY[j],
                (phi-this.splineX[i]) / (this.splineX[j]-this.splineX[i])
              );
              phi *= PI2;
        
              outerStyle.left = this.x + rho * cos(phi) + 'px';
              outerStyle.top  = this.y + rho * sin(phi) + 'px';
              innerStyle.transform = this.axis + this.theta + 'deg)';
              return this.y > height+deviation;
            };
          }
            
            
          function poof() {
            if (!frame) {
              // Append the container
              document.body.appendChild(container);
        
              // Add confetti
              
              var theme = colorThemes[onlyOnKonami ? colorThemes.length * random()|0 : 0]
                , count = 0;
                
              (function addConfetto() {
          
                if (onlyOnKonami && ++count > particles)
                  return timer = undefined;
                
                if (isRunning) {
                  var confetto = new Confetto(theme);
                  confetti.push(confetto);
        
                  container.appendChild(confetto.outer);
                  timer = setTimeout(addConfetto, spread * random());
                }else{
                  
                }
              })(0);
                
        
              // Start the loop
              var prev = undefined;
              requestAnimationFrame(function loop(timestamp) {
                var delta = prev ? timestamp - prev : 0;
                prev = timestamp;
                var height = $window.height();
        
                for (var i = confetti.length-1; i >= 0; --i) {
                  if (confetti[i].update(height, delta)) {
                    container.removeChild(confetti[i].outer);
                    confetti.splice(i, 1);
                  }
                }
        
                if (timer || confetti.length)
                  return frame = requestAnimationFrame(loop);
        
                // Cleanup
                document.body.removeChild(container);
                frame = undefined;
              });
            }
          }
            
          $window.keydown(function(event) {
            pointer = konami[pointer] === event.which
              ? pointer+1
              : +(event.which === konami[0]);
            if (pointer === konami.length) {
              pointer = 0;
              poof();
            }
          });
          
          if (!onlyOnKonami) poof();
        });
        
        
        
   }
 score_sound.play();
 }else {
   if(afteruser!==capital && afteruser.indexOf(' ')===0){
    alert("Wrong Answer . Just only one step left to Win the Game");

 }else if(afteruser===undefined){
   alert("Answer your Question First to Get the Diamond Crown and Won the Game");
 }else if(afteruser===null){
  alert("Answer your Question First to Get the Diamond Crown and Won the Game. Do not Press the Cancel BUTTON");
}
}
})


drawSprites();
if(robot.x===2000 && diamond.x===2000){
  fill("red");
  textSize(15)
text("What is the Capital of USA",width/2.14,height/2.4);
}

if(robot.isTouching(blocktoblock)===true){
  textSize(20);
  fill("#FFFFFF");
  text("Touch the Diamond",width/2.14,height/2.2);
}
if(points2_1.x===20000 && points2_2.x===29000){

}else if(points2_3.x===59000 && points2_4.x===89000){
  //3rd Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/14,height/1.4);
  // 4th Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/14,height/7);
}

//1
if(points2_1.x===20000===true && points2_2.x===29000===true && points2_3.x===59000===false && points2_4.x===89000===false){
    //3rd Coin
    textSize(20);
    textFont("Times New Roman");
    fill(255);
    text("Not Available!",width/1.21,height/1.4);
    // 4th Coin
    textSize(20);
    textFont("Times New Roman");
    fill(255);
    text("Not Available!",width/1.21,height/7);

    robot.bounceOff(points2_3);
    robot.bounceOff(points2_4);
}
if(points2_1.x===20000===true && points2_2.x===29000===false && points2_3.x===59000===true && points2_4.x===89000===false){
  //3rd Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/14,height/1.4);
  // 4th Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/1.21,height/1.4);

  robot.bounceOff(points2_2);
  robot.bounceOff(points2_4);
}
if(points2_1.x===20000===true && points2_2.x===29000===false && points2_3.x===59000===false && points2_4.x===89000===true){
  //3rd Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/14,height/1.4);
  // 4th Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/1.21,height/7);

  robot.bounceOff(points2_2);
  robot.bounceOff(points2_3);
}

//2

if(points2_2.x===29000===true && points2_1.x===20000===false && points2_3.x===59000===true && points2_4.x===89000===false){
  //3rd Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/14,height/7);
  // 4th Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/1.21,height/1.4);

  robot.bounceOff(points2_1);
  robot.bounceOff(points2_4);
}
if(points2_2.x===29000===true && points2_1.x===20000===false && points2_3.x===59000===false && points2_4.x===89000===true){
  //3rd Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/14,height/7);
  // 4th Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/1.21,height/7);

  robot.bounceOff(points2_1);
  robot.bounceOff(points2_3);
}
//3

if(points2_3.x===59000===true && points2_1.x===20000===true && points2_2.x===29000===false && points2_4.x===89000===false){
  //3rd Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/14,height/1.4);
  // 4th Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/1.21,height/1.4);

  robot.bounceOff(points2_2);
  robot.bounceOff(points2_4);
}
if(points2_3.x===59000===true && points2_1.x===20000===false && points2_2.x===29000===true && points2_4.x===89000===false){
  //3rd Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/14,height/7);
  // 4th Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/1.21,height/1.4);

  robot.bounceOff(points2_1);
  robot.bounceOff(points2_4);
}
//4
if(points2_4.x===89000===true && points2_1.x===20000===true && points2_3.x===59000===false && points2_2.x===29000===false){
  //3rd Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/1.21,height/7);
  // 4th Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/14,height/1.4);

  robot.bounceOff(points2_2);
  robot.bounceOff(points2_3);
}
if(points2_4.x===89000===true && points2_1.x===20000===false && points2_3.x===59000===false && points2_2.x===29000===true){
  //3rd Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/14,height/7);
  // 4th Coin
  textSize(20);
  textFont("Times New Roman");
  fill(255);
  text("Not Available!",width/1.21,height/7);

  robot.bounceOff(points2_1);
  robot.bounceOff(points2_3);
}
}
playWon(){
/*  if(usertaking !==undefined && usertaking!==null){
    alert("Congrats "+usertaking.toUpperCase()+" you Have won the Diamond .Your score is increased by 30");
}else{
    alert("Congrats you Have won the Diamond .Your score is increased by 30");
}*/
    this.button3.remove();
    this.input.remove();
    this.button.remove();
   //this.button3.remove();
    restart.visible=false;
    points.visible=false;
    health.visible=false;
    if(usertaking !==undefined && usertaking!==null){
      stroke(5);
      textSize(30);
      fill("purple");
      text("Congrats "+usertaking.toUpperCase()+", you Have Won the Game",width/6,height/2.2);
    }else{
      stroke(5);
      textSize(30);
      fill("purple");
      text("Congrats you Have Won the Game",width/7,height/2.2);
     
    }
  text("Your Score = "+points_score,width/4,height/2);
}
playWin(){


  var runFor = 19000
  setTimeout(() => {
    $(".rating-widget").show();
    //$("#htw").show();
    $("#whatsapp_share_button").show();
    $("#facebook_share_button").show();
    $("#copy_btn").show();
    if(usertaking!==undefined && usertaking!==null && points_score!==undefined){
      document.getElementById("p1").innerHTML="Hi! "+usertaking.toUpperCase()+" has won the Diamond as well as the Game with a score of "+points_score+". You Could also stand a chance to win the game. Click on the Link below to Play the Game:- https://bit.ly/DiamondCrownGame";
    }else if(usertaking==undefined && usertaking==null){
      document.getElementById("p1").innerHTML="Hi! I have won the Diamond as well as the Game with a score of "+points_score+". You Could also stand a chance to win the game. Click on the Link below to Play the Game:- https://bit.ly/DiamondCrownGame";
    }
    $("canvas").remove(); 
    container.hide();
    this.button.hide();

}, runFor);
}
playOver(){
    this.button.hide();
    restart.visible=true;
    fill("orange");
    textSize(30);
    text('Your Points is: '+points_score,width/2.3,height/2.5);
    fill("white");
    text("Well Done 👍",width/2.15,height/2);
    fill("green");
    text("Try Again to Become Champion in this Game",width/3.2,height/1.6);
    if(usertaking!==undefined && points_score!==null ){
      window.speechSynthesis.onvoiceschanged = function() {
        var voices5 = window.speechSynthesis.getVoices()
        var utterance8 = new SpeechSynthesisUtterance('So Sorry!! ,'+usertaking.toLowerCase()+',, You have lost the Game with a score of ,,  '+points_score+', points'+'   ,,,  Share your score to your friends and invite them through ,, Whatsapp or Facebook to get a chance to Play the Game.');
        utterance8.voice = voices5[3];
        utterance8.lang = voices5[4].lang;
        utterance8.volume=0.6;
        window.speechSynthesis.speak(utterance8);
      }
    }else if(points_score!==undefined){ 
      window.speechSynthesis.onvoiceschanged = function() {
        var voices6 = window.speechSynthesis.getVoices()
        var utterance9 = new SpeechSynthesisUtterance('So Sorry , You have lost the Game with a score of ,,  '+points_score+', points'+'    ,,  Share your score to your friends and invite them through ,, Whatsapp or Facebook to get a chance to Play the Game.');
        utterance9.voice = voices6[8];
        utterance9.lang = voices6[4].lang;
        utterance9.volume=0.6;
        window.speechSynthesis.speak(utterance9);
      }    
  }
    robot.remove();
    ground1.visible=false;
    ground2.visible=false;
    ground3.visible=false;
    ground4.visible=false;

    points2_1.visible=false;
    points2_2.visible=false;
    points2_3.visible=false;
    points2_4.visible=false;

    points1_1.visible=false;
    points1_2.visible=false;
    ball3.visible=false;
    ball4.visible=false;
    ball5.visible=false;
    ball6.visible=false;
    //ball7.visible=false;
    ball1.visible=false;
    door.visible=false;

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
    ball1.bounceOff(edges);
    ball3.bounceOff(edges);
    ball4.bounceOff(edges);
    ball5.bounceOff(edges);
    ball6.bounceOff(edges);
    diamond.visible=false;
    if(mousePressedOver(restart)){
      location.reload();
    }
      drawSprites();

      var runOver= 10000
      setTimeout(() => {
        $(".rating-widget").show();
        $("canvas").remove(); 
        $("#btn-7").show();
        this.button.hide();
        $("#htw").show();
        $("#whatsapp_share_button").show();
        $("#facebook_share_button").show();
        $("#copy_btn").show();
        if(usertaking!==undefined && usertaking!==null && points_score!==undefined){
          document.getElementById("p1").innerHTML="Hi! "+usertaking.toUpperCase()+" has played the Game and got a score of "+points_score+" points. You Could stand a chance to win the game. Click on the Link below to Play the Game:- https://bit.ly/DiamondCrownGame";
        }else if(usertaking==undefined && usertaking==null){
          document.getElementById("p1").innerHTML="Hi! I have played the Game and got a score of "+points_score+" points. You Could stand a chance to win the game. Click on the Link below to Play the Game:- https://bit.ly/DiamondCrownGame";
        }
        $("#whatsapp_share_button").click(function(){
          console.log(points_score);
         if(usertaking!==undefined && points_score!==undefined){
         var m="https://api.whatsapp.com/send?text= Hi! *"+usertaking.toUpperCase()+"* has played the Game and got a score of *"+points_score+"* points . You Could stand a chance to win the game. Click on the Link below to Play the Game:- https://bit.ly/DiamondCrownGame";
         var btn5=document.getElementById("whatsapp_share_button");
         btn5.setAttribute("href",m);
          }else if(usertaking==undefined ){
            var n="https://api.whatsapp.com/send?text= Hi! I have played the Game and got a score of *"+points_score+"* points . You Could stand a chance to win the game. Click on the Link below to Play the Game:- https://bit.ly/DiamondCrownGame";
         var btn6=document.getElementById("whatsapp_share_button");
         btn6.setAttribute("href",n);
          }
        
        })
        
        $("#facebook_share_button").click(function(){
          console.log(points_score);
         if(usertaking!==undefined && usertaking!==null && points_score!==undefined){
         var o="https://www.facebook.com/sharer/sharer.php?u=Hi! "+usertaking.toUpperCase()+" has played the Game and got a score of "+points_score+" points . You Could stand a chance to win the game. Click on the Link below to Play the Game:- https://bit.ly/DiamondCrownGame";
         var btn7=document.getElementById("facebook_share_button");
         btn7.setAttribute("href",o);
          }else if(usertaking==undefined && usertaking==null ){
            var p="https://www.facebook.com/sharer/sharer.php?u=Hi! I have played the Game and got a score of "+points_score+" points . You Could stand a chance to win the game. Click on the Link below to Play the Game:- https://bit.ly/DiamondCrownGame";
         var btn8=document.getElementById("facebook_share_button");
         btn8.setAttribute("href",p);
          }
        
        })
    }, runOver);


  }
  
}