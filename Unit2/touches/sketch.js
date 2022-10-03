let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage ("assets/animal.jpg");
  i2 = loadImage ("assets/whitefox.jpg");
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
    image(i1, width/2, height/2 - 10, 595, 567);
      text("no one is touching the screen", 5, 22) ; 
      break ;
      
      case 1: 
      image(i2, width/2, height/2 - 10, 595, 567);
       text("it's kind of lonely here", 5, 22) ; 
      // put a picture here
      break ;
      
      case 2:image
      image(i3, width/2, height/2 - 10, 595, 567);
      text("two fingers are touching the screen", 5, 22) ; 
            // put a picture here
      break ;
      
      case 3:
        image(i4, width/2, height/2 - 10, 595, 567);
     text("three are touching the screen", 5, 22) ; 
            // put a picture here
      break ;
    
      
  }
  
}