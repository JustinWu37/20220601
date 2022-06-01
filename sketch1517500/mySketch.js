var fishimg

function preload(){
	fishimg=loadImage("cat2.png")
	jimg=loadImage("jellyfish.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	//frameRate(2)
}

function draw() {
	background(100)
	text('[吳岳軒410730732（０６０１作業）]',150,550)
	
	image(jimg,mouseX, mouseY,200);
	
	fill(238, 155, 0,100)
	ellipse(width/2,height/2,sin(frameCount/100)*200)
	
	imageMode(CENTER)
	for(var x=0;x<width;x+=200){
		for(var y=0;y<height;y+=200){
			push()
				translate(x+random(-2,2),y+sin(frameCount/+x+y)*1000)
				rotate(sin(frameCount/100+x+y))
				image(fishimg,0,0,100,50);
			pop()
			
			//image(fishimg,x,y+sin(frameCount/+x+y)*100,40,20)
			
			//x+random(-2,2),y+random(-2,2)
						
			}
		}
	}