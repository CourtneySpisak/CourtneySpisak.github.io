  // these are related to the drawing of lines 
      function drawzaLine (x,y){
  if(trigger_key == 76){
 for( let i = 0; i <= 6; i++ ){
    let multiplier = random(1, 150)
    x = multiplier *random(1,5)
    y = multiplier * random(1,7)
    stroke(random(0,155), random(0, 55), random(0, 255), random(255))
    line(x,y, multiplier, multiplier)
 } // close the if statement
  } //close the for loop
} //close drawzaLine



function lines2Nowhere(x,y) {
  if(trigger_key == 65){
 for( let i = 0; i <= 6; i++ ){
    x = width/2
    y = height/2
    stroke(random(0,205), random(0,185))
    line(x,y, random(-300,width), random(-5,height))
   } //close the if statement
  } //close the for loop
  } //close line2Nowhere



function stitchedTogether(x,y) {
  if(trigger_key ==80){
     y = y +5
     for( let i = 0; i < 6; i++ ){
       strokeWeight(2)
       stroke(0,random(45,255),random(0,200))
       line(0,2*y, 400, 2*y)
     } //close the for loop
     if(x%2 == 0){
        stroke(0,0, random(45,255))
        line(2*x, 0, 2*x, 400)
      }// closes the second if statement 
    } //closes the trigger_key if statement
  } //close stitchedTogether



  function waitinWonder (x,y){
  if(trigger_key == 71){
 for( let i = 0; i <= 6; i++ ){
    let multiplier = random(800)
    x = multiplier *random(809) -1000
    y = multiplier *random(400) -100
    stroke(mouseX, mouseY, random(0, 255), random(255))
    line(x,y, -multiplier,-multiplier)
 } // close the if statement
  } //close the for loop
} //close waitinWonderbb




function seaofThoughts(x,y){
  if(trigger_key == 66){  // will trigger when the key is pressed
  for(let t = 0; t <= 1; t++){
    let gen = floor(random(0,5))
    if (click == true){
    if (gen ==1){
    x = mouseX + random(34) ;
    y = mouseY - random(65)
   fill(random(30), random(30), random(30), random(255))
  arc(x,y, y - x, random(0,20), random(0,20), random(random(500)), PIE)
    } // close gen 1
    
    else if(gen ==2){
    x = random(300,500) - mouseY;
    y =random(0,300) -2*mouseX
    fill(random(79), random(97), random(7.9), random(200))
    arc(x,y, y, x, random(0,20), random(0,20),PIE,  int(random(20,70)))
    } //close gen 2
    } //close click true
  } //close the for loop
  } // close the trigger key if statement
} // close seaofThoughts


function characterArch(x,y){
  if(trigger_key == 78){
  if (mouseIsPressed == true){
    x = mouseX;
    y = mouseY +5
    stroke(coltrac)
  noFill()
  arc(x,y,random(89), random(200), 45, 0, OPEN) 
  } // closed mouse pressed if statement
} //close for loop
   // close trigger if statement 
} // close characterArch

