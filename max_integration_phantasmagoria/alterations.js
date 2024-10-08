
// these are all functions that alter the canvas or the background in someway


// this is the function that erases the canvas 
function clearyourMind(){
  if (trigger_key == 8){  // ENTER, K(lear), .
   clear()
  } // close the trigger_key if statement
}//close erasethisSpace

//background altering functions 

function encroachingShadows (){
  if (trigger_key == 84){
    background(56, 6)
  }// close if statement 
} //close changezeMood

function lighterVibes(){
  if (trigger_key == 86){
    background(random(250,254), random(250,254),random(250,254),8)
  } // close trigger_key if statement
} //close lighterVibes

function mouseposition(){
  if(trigger_key == 85){
    if(click == true){
  xMove1 = mouseX
  xMove2 = mouseX
  xMove3 = mouseX
  xMove = mouseX
  xText = mouseX
  yMove1 = mouseY
  yMove2 = mouseY
  yMove3 = mouseY
  yMove = mouseY
  ytext = mouseY
    //x 
 
  } // close click if statement
  } // close trigger_key if statement
}//close mouseposition
  
function mouseClicked(){
  click = true
} //close mouseClicked



function docyourIdeas(){   // saves the canvas
  if (trigger_key == 13){save("myCreation.png")}
} // close docyourIdeas
  
  
  function perceivetheFog(x,y){
  if(trigger_key == 77){
    if(click == true){
    fill(coltrac, 75)
   image(graphics, mouseX, mouseY) 
    } // close click if statement
  } //close trigger_key if statement
} // close perceivetheFog



function mindBuffering(){
  if( trigger_key == 32 ){
      view_intro = false
  }
}


