function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	
	colorMode(HSB)
	
	background((frameCount)/2%360,25,75,0.5);//不留殘影
	
	noFill()
	for (var x=0;x<width;x=x+100){
	for(var y=0;y<height;y=y+100){
			
	rectMode(CENTER)//方格
	stroke((frameCount)*2%360, 100, 100)
	rect(x, y, 300+mouseX)

  stroke((frameCount)/3%360,100,100)//大圓圈
	ellipse(x, y, 300+mouseX)

	stroke(map(mouseY,0,height,0,360),100,100)//小圓圈
	ellipse(x-150+random(-10,10),y-150+random(-10,10),150+random(-10,10)+mouseX)
	
	
}
}
}
//https://coolors.co/f3e0ec-ead5e6-f2befc-ca9ce1-685f74