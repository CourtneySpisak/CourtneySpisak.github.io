// Phantasmagoria
// by Courtney Spisak
// welcome to the mind
//the swirling chaos of thoughts, ideas, imagiation
//the churning of fears and passions 


let xMove1 = 0, yMove1 = 0, xMove2 = 0, yMove2 = 0; xMove3 = 0; yMove3 = 0;
let xMove = 0; yMove = 0
let xtext= 0, ytext = 0
let trigger_key = 0
let coltrac = 0
let col1= 0, col2 =0,col3= 0
arrayolines = []

function setup() {
  canvas=createCanvas(1000, 500, WEBGL);

  
  graphics = createGraphics(100,100)
  graphics.background(0, 6)
  



  
} // close setup

function draw() {
  
  
let cottonCandydream = color(random(184,255), random(182,208),(255))  
let fluffyBunnies = color(random(208,251), random(184,254),random(172, 251))
let bloodthirstyVampires = color(random(0,100),random(6,15), random(6,20))
let tangledVines = color(random(0,123),random(36,144),random(0,75))
let desertedThoughts = color(random(204, 255), random(88,201), random(3,113))
let mysticDragonscales = color(random(0.77),random(25,100), random(64,102))
let touchdaSky = color(random(92,228), random(125, 229), random(210, 254)) 
  
  // this is where I will store the different color pallets

  if(trigger_key == 49){        // Cottom Candy Dream
coltrac = cottonCandydream
} //close the if cottoncandy
  
 
if(trigger_key == 50){  
coltrac = fluffyBunnies
}  //close the if bunny 
  
  
if(trigger_key == 51){   
coltrac = bloodthirstyVampires
} //close the if vampire
  
  
if(trigger_key == 52){
coltrac = tangledVines
} //close the if tangledVines  
  
  
if(trigger_key == 53){
coltrac = desertedThoughts
} //close the if deserted 
  
  
if(trigger_key == 54){
coltrac = mysticDragonscales
} //close the if dragon 
  
  
if(trigger_key == 55){
coltrac = touchdaSky
} //close the if sky
  
  

  //xMove ++;
  //yMove ++;
  xMove1 ++;
  yMove1 ++;
  xMove2 ++;
  yMove2 ++;
  xMove3 ++;
  yMove3 ++;

// call all of the functions              
//      Name of Funciton                    Key    File Location
  
  
  // these are the pattern generators  
   lostnWandering(xMove1,yMove1)            // W   misc
   puddlesofFeelings(xMove1,yMove1)         // E   circles
   lines2Nowhere(xMove1, xMove2)            // A   line
   doors2theSoul(xMove2, yMove2)            // D   rectangle
   confinesofImagination(xMove2, yMove2)    // F   circle
   waitinWonder(xMove1, yMove1)               // G   line
   drawzaLine(xMove, yMove)                 // L   line
   watercolorWindows(xMove1, yMove1)        // Z   rectangle
  
  
  //Paint Brushes with set colors
   rectangleTintedglasses()                 // J   rectangle
   abhorrentThoughts(xMove2,yMove3)         // C   misc
   seaofThoughts(xMove2, yMove1)            // B   line
   characterArch(xMove2, yMove2)            // N   line
   perceivetheFog(xMove1, ytext)            // M   alterations
   fragmentsoMemory(-width, -height)        // .   misc
   triAgain(xMove2, yMove3)                 // Y   triangle
   shapesofPain (xtext, ytext)              // X   misc

  
  
  // Paint brushes with customizable colors
   stripyStripes(xMove, yMove)              // O   rectangles
   paintingwithDoors(xMove2, yMove2)        // H   rectangles
  
  
  // completely random
   aloneinzaCrowd(xMove1,yMove1)            // Q   misc
   imDoingStuffz()                          // I   misc
  
  
  //alter canvas
   clearyourMind()                          // K   alterations
   mouseposition()                          // U   alterations   
  
  
  //moveable patterns
   pouringCircles(xMove,yMove)               // S   circles
   dreamBubbles(xMove2,yMove2)              // R   circles
   stitchedTogether(xMove3,yMove3)          // P   lines
  
  
 //Alter the background  
  welcometomyMind(xMove3,yMove3)           // ,   circles
  encroachingShadows()                           // T   alterations
  lighterVibes()                           // V   alterations
 

  

    // Apply rotations based on MIDI input
    //rotateX(angleX);
    //rotateY(angleY);

    // Draw a 3D box with dynamic size
    //normalMaterial();
    //box(boxSize);

  
}// close draw











