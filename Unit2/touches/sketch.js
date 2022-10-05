let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage ("assets/animal.jpg");
  i2 = loadImage ("assets/whitefox.jpeg");
  i3 = loadImage ("assets/groundhog.jpeg");
  i4 = loadImage ("assets/foxagain.jpeg");

  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("Here are some animals", width/2, height/2, 5,22) ; 
      break ;
      
      case 1: 
      image(i2, width/2, height/2 - 10, 595, 567);
       text("Hello", 5, 22) ; 
      break ;
      
      case 2:image
      image(i3, width/2, height/2 - 10, 595, 567);
      text("Guten Tag.", width/2, height/2) ; 
            // put a picture here
      break ;
      
      case 3:
        image(i4, width/2, height/2 - 10, 595, 567);
     text("Hola!", 5, 22) ; 
            // put a picture here
      break ;
    
      
  }
  
}