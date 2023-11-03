// Created by Courtney Spisak
// this is a way to show off some of the truck assets I made on a moving road

// create an array of all of the y values of the middle lines
let roadlineY = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420]; 

//creat an array of images to cycle through
let trucks = []
let index = 0;  // defeine a variable for the index


// define the image of the truck
let blueimg, redimg, greenimg, yellowimg;
function preload() {
  blueimg = loadImage('images/bluetruck.png');          // load the blue truck
  trucks.push(blueimg)                                 // add it to the array
  
  redimg = loadImage('images/redtruck.png');           // load the red truck
  trucks.push(redimg)                                 // add it toe the array
  
  greenimg = loadImage('images/greentruck.png');      //load the green truck
  trucks.push(greenimg)                              // add it to the array
  
  yellowimg = loadImage('images/yellowtruck.png');   // load the yellow truck
  trucks.push(yellowimg)                             // add it to the array
  
  orangeimg = loadImage('images/orangetruck.png');   // load the orange truck
  trucks.push(orangeimg)                             // add it to the array
  
  lightblueimg = loadImage('images/lightbluetruck.png');   // load the light blue truck
  trucks.push(lightblueimg)                             // add it to the array
  
   whiteimg = loadImage('images/whitetruck.png');   // load the white truck
  trucks.push(whiteimg)                             // add it to the array
  
   skyimg = loadImage('images/skytruck.png');   // load the sky truck
  trucks.push(skyimg)                             // add it to the array
  
  blackimg = loadImage('images/blacktruck.png');   // load the black truck
  trucks.push(blackimg)                            // add it to the array    
}

//setup function
function setup() {
  createCanvas(300, 300);
  blueimg.resize(24, 49.5)
  redimg.resize(24, 49.5)
  greenimg.resize(24, 49.5)
  yellowimg.resize(24, 49.5)
  orangeimg.resize(24, 49.5)
  whiteimg.resize(24, 49.5)
  lightblueimg.resize(24, 49.5)
  skyimg.resize(24, 49.5)
  blackimg.resize(24, 49.5)
  noSmooth()
  
}
  
// define the draw function  
function draw() {
  background(40,0);
  
  
  // the main road asphult
  fill(90)
  rect(75,0 , 150, 300)
  
  // the shoulder lines
  fill(250)
  rect(90, 0, 5, 400)
  rect(205, 0, 5, 400)
  
  // create and print the lines of the road using for loops
  for( let i = 0; i < 20; i++){
  fill(250)
  rect(150,roadlineY[i],5, 10);
    roadlineY[i]++;
    
    if (roadlineY[i] > height) {
      roadlineY[i] = 0;
    } // end of the if statement
    
  } // end of the for loop
  
  //truck
 // image(blueimg, 170, 175)
 // image(redimg, 170, 175)
 // image(greenimg, 170, 175)
  image(trucks[index], 170, 175)
  
  


} // end of the draw function

// mouse clicked function 
function mouseClicked() {
  index = index +1
  if(index == trucks.length){
    index = 0;
  }
  
}

     
   
     
     
     
