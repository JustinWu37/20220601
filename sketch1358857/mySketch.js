function setup() {
	createCanvas(windowWidth, windowHeight)
	background(24, 78, 119)
	
}

var fx = 50
var fy = 50

var yc = 0

var mode = 1

var ang =0

function mousePressed(){
  mode++          // 每次點擊滑鼠，狀態計數就加 1
    if (mode>2){ 
      mode=1      // 如果計數超過 2 就切換回 1
  }	
}



function draw() {

//每張背景覆蓋刷新
background(24, 78, 119)
	
		var count=0

		for (var x = 0;x<width;x+=50){

			for (var y =0;y<height;y+=50){
				
				count=count+1
				
				 if (count%random(4,6)<random(1,3)){
						 
			fill(random(26,30),random(96,117),random(145,159))
						 
			rect(x,y,40)
					 
					 if(random()<0.5){
							
							fill(0)
						 
						  stroke(217, 237, 146)
						 
						  ellipse(x+20,y+20,20)
					 
							 if(random()<0.5){

									fill(random(22,52),random(138,160),random(164,173))
								 
								  stroke(random(181,217),random(228,237),random(140,146))

									ellipse(x+20,y+20,10)
				}

			}

		}

	}
			
}
	
	var s = second();
	var m = minute()
	var h = hour()
	var angleS = map(s,0,60,0,PI*2)
	var angleM = map(m,0,60,0,PI*2)
	var angleH = map(h,0,12,0,PI*2)
	fill(82, 182, 154)
	arc(width/2, height/2, 500, 500,-PI/2, angleS-(PI/2), PIE);
	fill(118, 200, 147)
	arc(width/2, height/2, 300, 300,-PI/2, angleM-(PI/2), PIE);
	fill(153, 217, 140)
	arc(width/2, height/2, 150, 150,-PI/2, angleH-(PI/2), PIE);
	fill(181, 228, 140)
	
	noStroke()
	textSize(30)
	fill(255)
	text('[模式1跟隨/2跳動] '+mode+
			 '      [滑鼠位置寬] '+mouseX+
			 '      [滑鼠位置高] '+mouseY,150,550)

if(mode == 1){ 
	
//1.物體XY變數設定

		var facex = map(mouseX,0,windowWidth,windowWidth/4,windowWidth/4*3)//移動系統X
		var facey = map(mouseY,0,windowHeight,windowHeight/4,windowHeight/4*3)//移動系統Y

//臉部元件
		fill('#9A8C98')
		beginShape()
		curveVertex(facex,facey+40)
		curveVertex(facex-8,facey+45)
		curveVertex(facex-24+random(-2,0),facey+110)
		curveVertex(facex-30+random(-30,0),facey+130)
		curveVertex(facex+random(-25,25),facey+170)
		curveVertex(facex+30+random(0,30),facey+130)
		curveVertex(facex+24+random(0,2),facey+110)
		curveVertex(facex+8,facey+45)
		endShape(CLOSE)

		fill('#C9ADA7')
		ellipse(facex,facey,100, 150)

		fill('#4a4e69')
		triangle(facex,facey-15,facex-5,facey+27,facex+5,facey+27,)

		fill(random(55,150),125,255)
		rect(facex-35,facey-20,30,20,10)

		fill(125,random(55,150),255)
		rect(facex+5,facey-20,30,20,10)

		fill('#F2E9E4')
		ellipse(facex,facey+40,20+random(-10,20),5+random(0,15))
	
	
}else{//點擊反彈跳
	  
		fx=fx+random(2,10)
		fy=fy+yc
		yc=yc+random(0.7,0.9)
		if (fy>height){yc=-yc}
	
		fill('#9A8C98')
		beginShape()
		curveVertex(fx,fy+40)
		curveVertex(fx-8,fy+45)
		curveVertex(fx-24+random(-2,0),fy+110)
		curveVertex(fx-30+random(-30,0),fy+130)
		curveVertex(fx+random(-25,25),fy+170)
		curveVertex(fx+30+random(0,30),fy+130)
		curveVertex(fx+24+random(0,2),fy+110)
		curveVertex(fx+8,fy+45)
		endShape(CLOSE)

		fill('#C9ADA7')
		ellipse(fx,fy,100, 150)

		fill('#4a4e69')
		triangle(fx,fy-15,fx-5,fy+27,fx+5,fy+27,)

		fill(random(55,150),125,255)
		rect(fx-35,fy-20,30,20,10)

		fill(125,random(55,150),255)
		rect(fx+5,fy-20,30,20,10)

		fill('#F2E9E4')
		ellipse(fx,fy+40,20+random(-10,20),5+random(0,15))
	
	if( fx > windowWidth ){ 
		fx = 50
		fy = 50
		}
	}
}


//監視反饋系統
