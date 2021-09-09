var welcomeScreenImg, buttonImg, Start;
var gameState = 0;
var ScramblerImg;
var Shuffler, ShufflerImg;

function preload(){
	welcomeScreenImg = loadImage("Racing Flag.png")
	buttonImg = loadImage("Start.png")
	ScramblerImg = loadImage("Scrambler.png")
	ShufflerImg = loadImage("Shuffler.png")
}

function setup() {
	createCanvas(800, 700);  

	Start = createSprite(width/2, height/2)
	Start.addImage(buttonImg)
	Start.scale = 0.1 
}


function draw() {  
	if(gameState == 0){
		background(welcomeScreenImg)
	if(mousePressedOver(Start)){
		gameState = 1
		Start.visible = false 
	}
}
	else{background("white")
		Scrambler = createSprite(600,150)
		Scrambler.addImage(ScramblerImg)
		Scrambler.scale = 0.5

		Shuffler = createSprite(360,100)
		Shuffler.addImage(ShufflerImg)
		Shuffler.scale = 0.3

}

  drawSprites();
 
}



