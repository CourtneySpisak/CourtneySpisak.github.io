 //these are related to the drawing of circles
// spinning in circles

function pouringCircles(x,y){
 if(trigger_key == 83){
   for (let i = 0; i <1000; i++){
    x += random(20) *i
    y +=random(10)*i
    noStroke()
    fill(random(100), random(100), random(200), random(50))
    circle(x,y, random(70));
   } // close for loop
 } //close the trigger key if statement
} //close pouringCircles

function puddlesofFeelings(x,y, velocity){  
  if(trigger_key == 69){
   x = velocity 
   y =rh
   noStroke()
   fill(random(200), random(200), random(200), random(50))
   circle(x,y, random(70));
  } //close the trigger key if statement
} //close puddles



function dreamBubbles(x,y){
  if(trigger_key == 82){
   for (let i = 0; i <10; i++){
    x += random(12) +i
    y +=random(57)-i
    stroke(0)
    fill(coltrac, random(50))
    circle(x,y, random(70));
    }// close for loop
 } //close the trigger key if statement
} //close pouringCircles2


function confinesofImagination(x,y){
  if(trigger_key == 70 ){
    for (let i = 0; i <4; i++){
  x = 500 *i +210
  if (x > width){
    x *= -i
  } //close greater than width
  y = 200 *i +210
  if (y> height){
    y *= -i
  } // close greater than height
  dia = 56 +x
  dia2 = 14 +y 
  noStroke()
  fill(67+i, 67+2*i,20,1)
  ellipse(x,y, dia, dia2);
} // close  for loop
 } //close the trigger key if statement
 } //close confinesofImagination



    function welcometomyMind(x,y) {
if (trigger_key == 188){
 for( let i = 0; i <= 140; i++ ){
    x = random(width)
    y = random(height)
 noStroke()
   fill(random(0.77),random(25,100), random(64,102), 5)
   ellipse(x,y, random(-3,56), random(-5,37))
 } // close for loop
 } // close trigger_key if statement
  } //close welcometomyMind






