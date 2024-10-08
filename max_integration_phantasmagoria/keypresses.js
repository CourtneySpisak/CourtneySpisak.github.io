
// this determines which function corresponds to which key
// so many keys and functions! 

function velocities(velocity){ 
  //new function for the event of when a key is pressed
  if(velocity >= 0 && velocity <= 4.88){trigger_key = 79}// o corresponds to line drawer
  else if (velocity >= 4.89 && velocity <= 9.77){trigger_key = 68} //d  corresponds to door2daSoulz
  else if (velocity >= 9.78 && velocity <= 14.65){trigger_key = 83} // s  corresponds to pouringCircles
  else if(velocity >= 14.66 && velocity <= 19.53){trigger_key = 90}  // z corresponds to watercolorWindow
  else if (velocity >= 19.54 && velocity <= 24.41){trigger_key = 8} //backspace, k,.corresponds clearyourMind
  else if (velocity >= 24.42 && velocity <= 29.29){trigger_key = 76} // L corresponds to drawzaLine
  else if (velocity >= 29.30 && velocity <= 34.17){trigger_key = 65 } //a corresponds to lines2Nowhere
  else if (velocity >= 34.18 && velocity <= 39.05){trigger_key = 80} //p corresponds to stitchedTogether
  else if (velocity >= 39.06 && velocity <= 43.95){trigger_key = 81 } //q corresponds to aloneinzaCrowd
  else if (velocity >= 43.96 && velocity <= 48.81){trigger_key = 87} // w corrsesponds to lostnWandering
 else if (velocity >= 48.82 && velocity <= 53.69){trigger_key = 69 } //e corresponds to puddleofFeelings
 else if (velocity >= 53.70 && velocity <= 58.57){trigger_key = 82 } // r corresponds to dreamBubbles
  
  
else if (velocity >= 58.58 && velocity <= 63.45){trigger_key = 84}// t  corresponds to encroachingShadowsr
else if (velocity >= 63.46 && velocity <= 68.33){trigger_key = 89}// y corresponds to triAgain
else if (velocity >= 68.34 && velocity <= 73.21){trigger_key = 85}// u corresponds to mouseposition
else if (velocity >= 73.22 && velocity <= 78.09){trigger_key = 73}// i imDoingStuffz() 
else if (velocity >= 78.10 && velocity <= 82.97){trigger_key = 88} //x  corresponds to text of pain
else if (velocity >= 82.98 && velocity <= 87.85){trigger_key = 70}// f corresponds to confinesofImagination
else if (velocity >= 87.86 && velocity <= 92.73){trigger_key = 71}// g corresponds to waitinWonder
else if (velocity >= 92.74 && velocity <= 97.61){trigger_key = 72}// h corresponds to paintwithDoors
else if (velocity >= 97.62 && velocity <= 102.49){trigger_key = 74}// j corresponds to rectangleTintedglasses
else if (velocity >= 102.50 && velocity <= 107.37){trigger_key = 67}// c  // Abhorrantthoughts
else if (velocity >= 107.38 && velocity <= 112.25){trigger_key = 86}// v corresponds to lighterVibes
else if (velocity >= 112.26 && velocity <= 117.13){trigger_key = 66}// b corresponds to seaofThoughts
else if (velocity >= 117.14 && velocity <= 122.01){trigger_key = 78}// n corresponds to characterArch
else if (velocity >= 122.02 && velocity <= 126.89){trigger_key = 77}// m perceivetheFog()
else if (velocity >= 126.90 && velocity <= 131.77){trigger_key = 188}// , correpsonds to welcometomyMind 
else if (velocity >= 131.78 && velocity <= 136.65){trigger_key = 190}// . corresponds to fragmentsoMemory()
else if (velocity >= 136.66 && velocity <= 141.53){trigger_key = 13}// enter corresponds to docyourIdeas
else if (velocity >= 141.54 && velocity <= 146.41){trigger_key = 32 } // mindBuffer
  
//the color pallets  
  



else if (keyPressed == 49){trigger_key = 49}
else if (keyPressed == 50){trigger_key = 50}
else if (keyPressed == 51){trigger_key = 51}
else if (keyPressed == 52){trigger_key = 52}
else if (keyPressed == 53){trigger_key = 53}
else if (keyPressed == 54){trigger_key = 54}
else if (keyPressed == 55){trigger_key = 55}



  
} // close keypressed
