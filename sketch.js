function setup() {
  createCanvas(800,400);
 }

function draw() {
  background(0,0,0); 
 fill ("yellow"); 
rect(200,200,400,200);
rect(50,100,100,400);
rect(650,100,100,400);
triangle(50, 100, 150, 100, 100, 80);
triangle(650, 100, 750, 100, 700, 80);
}