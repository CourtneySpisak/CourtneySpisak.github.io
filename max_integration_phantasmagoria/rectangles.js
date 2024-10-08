
// these are related to the drawing of rectangles

function watercolorWindows(x,y){
  if(trigger_key == 90){
  //watercolor windows
  for(let i = 0; i <40; i++){
  xMove1 = random(340)
  yMove1 = random(60,height - 200)
    noStroke()
  fill(random(200,255), random(200, 255), random(200, 255), random(25))
  rect(xMove1,yMove1,random(50), random(50)) 
  } // close doors to the soul 
  } // close trigger_key if statement
} // close watercolorWindows



function doors2theSoul(x,y){
  if(trigger_key == 68){
   for(let i = 0; i <3; i++){
  xMove2 = random(width)
  yMove2 = random(height)
    noStroke()
  fill(random(200,255), random(150, 255), random(90, 255), random(255))
  rect(xMove2,yMove2,random(25), random(70)) 
} //close for loop
  } // close trigger if statement 
} // close doors2theSoul



function stripyStripes(){  
   if(trigger_key == 79){
    for( let i = 0; i < 20; i++){
  fill(coltrac)
  rect(mouseX,mouseY,5, 10);
   arrayolines[i]++;
    if(arrayolines[i] > height) {
      arrayolines[i] = 0;
      
    
 } // end of the second if statement
  } // close the for loop
} //end of the trigger key if statement
} //close stripyStripes




function paintingwithDoors(x,y){
  if(trigger_key == 72){
    
  if (mouseIsPressed == true){
    xMove2 = mouseX;
    yMove2 = mouseY
    noStroke()
  fill(coltrac)
  rect(xMove2,yMove2,random(15), random(50)) 
} //close for loop
  } // close trigger if statement 
} // close doors2theSoul




function rectangleTintedglasses(){
  if(trigger_key == 74){
  x = mouseX
  y = mouseY
 fill(col1, col2, col3,9)
  col1 = mouseX
  col2 = mouseY
  col3 = mouseY - mouseX
  rect(x,y,width/4, height)
  }// close tirgger_key if statement
} //close rectangledTintedglasses

 


