var bar;

function setup() {
  createCanvas(400,400);

  box1=createSprite(60,250,15,300);
  box1.shapeColor="white";
  box2=createSprite(340,250,15,300);
  box2.shapeColor="white";
  box3=createSprite(100,300,50,200);
  box3.shapeColor="white";
  box4=createSprite(300,300,50,200);
  box4.shapeColor="white";
  box5=createSprite(149,320,45,160);
  box5.shapeColor="white";
  box6=createSprite(251,320,45,160);
  box6.shapeColor="white";
  box7=createSprite(200,340,55,120);
  box7.shapeColor="white";

}

function draw() {
  background(0,0,0);  
  
  fill(255);
  triangle1=triangle(70 ,200, 100, 140,130 , 200);
  fill(255);
  triangle2=triangle(270 ,200, 300, 140,330 , 200);
  fill(255);
  triangle3=triangle(172 ,280, 200, 160,228 , 280);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  triangle1.display();
  triangle2.display();
  triangle3.display();
  drawSprite();
}