var chosen,chooseRock,chooseScissors,choosePaper,chosenItem,computer,choice,player,start,pressed,winner;
var chooseRockImg ,choosePaperImg,chooseScissorsImg,chosenItemImg,startImg;
var gameState = "Start"
var scorePlayer = 0
var scoreComp = 0
function preload(){
  chooseRockImg = loadImage("Rock.png");
  choosePaperImg = loadImage("Paper.png");
  chooseScissorsImg = loadImage("Scissors.png");
  chosenItemImg=loadImage("Mystery.png");
  startImg=loadImage("Start.png");

}
// -----

//buttons
function setup(){
 chooseRock = createSprite(70,100);
 chooseRock.addImage(chooseRockImg);
 choosePaper = createSprite(200,100);
choosePaper.addImage(choosePaperImg);
 chooseScissors = createSprite(330,100);
chooseScissors.addImage(chooseScissorsImg);

//chosen item
 chosen = "none";
 chosenItem = createSprite(250, 172.5);
chosenItem.addImage(chosenItemImg);
chosenItem.scale = 0.5;

//computer item
 computer = createSprite(80,300);
 choice = 0;
computer.addImage(chosenItemImg);

//player item
 player = createSprite(320,300);
player.addImage(chosenItemImg);

//start button
 start = createSprite(200,375);
pressed = false;
start.addImage(startImg);
  console.log("image added")
start.scale = 0.3;

//winner selected
 winner = "not selected";
}
function draw() {
//draw background
  background(200,200,200);
 
  if (gameState === "Start"){
     

  //dividing line


  //button function
  if(mousePressedOver(chooseRock)){
   // console.log("in rock")
    chosen = "Rock";
  //  console.log(chosen)
    chosenItem.addImage(chooseRockImg);
    player.addImage(chooseRockImg);
    chosenItem.scale = 0.5;
  }
  if(mousePressedOver(choosePaper)){
    chosen = "Paper";
    chosenItem.addImage(choosePaperImg);
     player.addImage(choosePaperImg);
    chosenItem.scale = 0.5;
  }
  if(mousePressedOver(chooseScissors)){
    chosen = "Scissors";
    chosenItem.addImage(chooseScissorsImg);
    player.addImage(chooseScissorsImg);
    chosenItem.scale = 0.5;
  }
  
  }
  if (gameState === "Play"){
    if (winner === "player"){
      scorePlayer = scorePlayer+1
      gameState = "Start"
    }
    if (winner === "computer"){
      scoreComp = scoreComp +1
      gameState = "Start"
    }
    
  }
  
 // console.log(pressed)
 // console.log(mousePressedOver(start))
  //start the duel
  
  if(mousePressedOver(start) && chosen !== "none" && pressed === false){
    
    gameState = "Play";
    choice = round(random(1,3));
  
    if(choice === 1){
      computer.addImage(chooseRockImg);
    }else if(choice === 2){
      computer.addImage(choosePaperImg);
    }else if(choice === 3){
      computer.addImage(chooseScissorsImg);
    }
    
    pressed = true;
    
    if((chosen === "Rock" && choice === 1) || (chosen === "Paper" && choice === 2) || (chosen === "Scissors" && choice === 3)){
      winner = "none";
    }
    else if((chosen === "Rock" && choice === 2) || (chosen === "Paper" && choice === 3) || (chosen === "Scissors" && choice === 1)){
      winner = "computer";
    }else{
      winner = "player";
    }
    console.log(winner);
  }
  
  if(winner === "none"){
    textSize(50);
    text("Draw", 140,310);
  }else if(winner === "computer"){
    textSize(30);
    text("Computer\n   Wins!", 135,300);
  }else if(winner === "player"){
    textSize(30);
    text("You Win!", 140,310);
  }
    //choosing text
  textSize(30);
  fill("black");
  text("Choose One:", 115,40);
  
  //what you chose
  textSize(25);
  text("You Chose:", 90, 180);
    
    
  
  //computer text
  text("Computer:",20,240);
  
  //player text
  text("You:",295,240);
  fill(50,50,50);
  rect(0,200,400,10);
  //end the press
  if(mouseWentUp()){
    pressed = false;
  }
  //draw sprites
  drawSprites();
}


