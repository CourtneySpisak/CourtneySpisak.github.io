//I know that it is called text.js, but this is more like functions for everything that doesn't fit into the other categories. There were more text based functions in previous iterations, but that idea changed. 

function shapesofPain(xtext, ytext) {  // triangles and quad's have sharp angles. ouch
  xtext ++  // incriment by 1 with each loop
  ytext++
  if(trigger_key == 88){  // will trigger when the key is pressed
  for(let t = 0; t <= 1; t++){
    let gen = floor(random(0,5))
    if (mouseClicked() == true){
    if (gen ==1){
    xtext = mouseX - random(0,200) ;
    ytext += mouseY - random(0,300)
   fill(random(30), random(30), random(30), random(50))
   triangle(xtext,ytext, ytext - xtext, random(0,20), random(0,20), random(20.40))}
    
    else if(gen ==2){
    xtext = random(300,500);
    ytext +=random(0,300)
    fill(random(30), random(30), random(30), random(235))
    quad(xtext,ytext, ytext - xtext,xtext +ytext, random(0,20), random(0,20), random(20.40),  random(20.40))}
    }
  } //close the for loop
  } // close the trigger key if statement
} // close text of pain 

function aloneinzaCrowd(x,y){ 
  if(trigger_key ==81 ){  // will trigger when the key is pressed
    
  for(let t = 0; t <= 1; t++){
    let gen = floor(random(0,26))

    if (gen ==1){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("A",x,y,10,10)
    } //close A
  
   
   else if (gen ==2){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("B",x,y,10,10)
   } //close B
     
     
    
    else if(gen ==3){
    x = random(0, width);
    y =random(0,height)
    fill(random(30), random(30), random(30), 255)
    textSize(random(7))
    text("C",x,y, 14, 14)
    } //close C
  
    
    else if(gen ==4){
    x = random(0,width);
    y +=random(0,height)
    fill(random(30), random(30), random(30), 255)
    textSize(random(9))
    text("D",x,y,random(0,20),random(0,20))
    } //close D
  
     else if(gen ==5){
    x = random(0,width);
    y =random(0,height)
    fill(random(30), random(30), random(30), 255)
    textSize(random(13))
    text("E",x,y,13,13)
     } //close E
    
     else if(gen ==6){
    x = random(0,width);
    y =random(0,height)
    fill(random(30), random(30), random(30), 255)
    textSize(random(9))
    text("F",x,y,9,9)
     } //close F
    
      
    if (gen ==7){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("G",x,y,10,10)
    } //close G
    
      
    if (gen ==8){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("H",x,y,10,10)
    } //close H
    
     
    if (gen == 9){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("I",x,y,10,10)
    } //close I
    
    
    if (gen ==10){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("J",x,y,10,10)
    } //close J
    
    else if(gen ==11){
    x = random(0, width);
    y =random(0,height)
    fill(random(30), random(30), random(30), 255)
    textSize(random(7))
    text("K",x,y, 14, 14)
    } //close K
    
    else if(gen ==12){
    x = random(0,width);
    y +=random(0,height)
    fill(random(30), random(30), random(30), 255)
    textSize(random(9))
    text("L",x,y,random(0,20),random(0,20))
    } //close L
  
     else if(gen ==13){
    x = random(0,width);
    y =random(0,height)
    fill(random(30), random(30), random(30), 255)
    textSize(random(13))
    text("M",x,y,13,13)
     } //close M
    
     else if(gen ==14){
    x = random(0,width);
    y =random(0,height)
    fill(random(30), random(30), random(30), 255)
    textSize(random(9))
    text("N",x,y,9,9)
     } //close N   
    
    if (gen ==15){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("O",x,y,10,10)
    } //close O
    
     
    if (gen ==16){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("P",x,y,10,10)
    } //close P
    
   
    if (gen ==17){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("Q",x,y,10,10)
    } //close Q
    
     
    if (gen ==18){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("R",x,y,10,10)
    } //close R
    
    else if(gen ==19){
    x = random(0, width);
    y =random(0,height)
    fill(random(30), random(30), random(30), 255)
    textSize(random(7))
    text("S",x,y, 14, 14)
    } //close S
    
    else if(gen ==20){
    x = random(0,width);
    y +=random(0,height)
    fill(random(30), random(30), random(30), 255)
    textSize(random(9))
    text("T",x,y,random(0,20),random(0,20))
    } //close T
  
     else if(gen ==21){
    x = random(0,width);
    y =random(0,height)
    fill(random(30), random(30), random(30), 255)
    textSize(random(13))
    text("U",x,y,13,13)
     } //close U
    
     else if(gen ==22){
    x = random(0,width);
    y =random(0,height)
    fill(random(30), random(30), random(30), 255)
    textSize(random(9))
    text("V",x,y,9,9)
     } //close V
    
    
    if (gen ==23){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("W",x,y,10,10)
    } //close W
    
     
    if (gen ==24){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("X",x,y,10,10)
    } //close X
    
 
    if (gen ==25){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("Y",x,y,10,10)
    } //close Y
    

    if (gen ==26){
    x = random(0,width);
    y =random(0,height)
   fill(random(30), random(30), random(30), 255)
    textSize(random(10))
    text("Z",x,y,10,10)
    } //close Z
  } //close the for loop
  } // close the trigger key if statement
  } // close aloneinzaCrowd



function lostnWandering(x,y){ 
  if(trigger_key ==87 ){  // will trigger when the key is pressed
    
  for(let t = 0; t <= 1; t++){
    let gen = floor(random(0,5))
    print(gen)
    if (gen ==1){
    x = random(90,width/2+134);
    y =random(90,height/2+145)
    rotate(random(360),x)
    rotate(random(360),y)
   fill(random(30), random(30), random(150), 255)
    rect(x,y,8, 5)
    } // close gen 1
    
    else if(gen ==2){
    x = random(0, width/4);
    y =random(0,height/4)
  rotate(random(360),x)
    rotate(random(360),y)
    fill(random(30), random(30), random(150), 255)
   quad(x, y, 2*x, 2*y, 2+x, 2+y, x-1, y-1)
    } // close gen 2
    
    else if(gen ==3){
    x = random(0,width);
    y +=random(0,height)
     rotate(random(360),x)
    rotate(random(360),y)
    fill(random(30), random(30), random(150), 255)
     quad(x, y, 2*x, 67, 2+x, 2+y, 90, y-1)
    } //close gen 3
  
     else if(gen ==4){
    x = random(6,height/3);
    y =random(4,height/3)
    rotate(random(360),x)
    rotate(random(360),y)
    fill(random(30), random(30), random(150), 255)
    quad(x-1, y-3, 2*x-5, 2*y-7, x-8, 2+y*2, x-1, y-1)
     }//close gen 4
    
     else if(gen ==5){
    x = random(50,width);
    y =random(80,height)
    rotate(random(360),x)
    rotate(random(360),y)
    fill(random(30), random(30), random(150), 255)
        rect(x,y,6, 7)
     }  //close gen 5   
  } //close the for loop
  } // close the trigger key if statement
} // close lostnWandering

function abhorrentThoughts(x,y){
  if(trigger_key == 67){
    x = mouseX
    y = mouseY
    image(pattern, x,y, 64,64)
    image(pattern, x+75,75+y, 2+64,2+64)
    image(pattern, x+150,150+y, 4+64,4+64)
      tint(255, 70, 0, 100)  
} // close if statement
} //close abhorrentThoughts



function imDoingStuffz(x){
  if(trigger_key == 73){
    x = mouseY
     y = 30 * sin(x) + random(height);
    fill(random(45),random(67), random(89))
  point(x, y)
  } // close trigger key if statement
} //close function imDoingStuffz



 function fragmentsoMemory(x,y){
   if (trigger_key == 190){
   x = width - mouseX
   y = height -  mouseY
   for(let i = 0; i <= 2; i+=2){
    fill(random(78),random(56),random(160), 14)
     stroke(12)
   quad(x-2, y-2, random(x), random(y), 10, 8, 4, 50);
 } //close for loop
   } //close trigger key if statement
  } // close the diamondinzaRough