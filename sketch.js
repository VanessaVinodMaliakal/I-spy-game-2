var database,formObj,playerCount,playerObj,gameState,gameObj,caseImg,entry;
playerCount = 0
gameState = 0

function preload(){
	caseImg = loadImage("treasure chest.jpg")
}
function setup(){
	createCanvas(displayWidth-30,displayHeight-150)
	database = firebase.database();
	gameObj =  new Game()
	gameObj.getGameState()
	gameObj.start()

    //entry = createButton("START")
}

function draw(){
	//sz()
	 //if(mousePressedOver(entry)){
		
	//}

	// if(playerCount == 3){
	// 	gameState = 1
	// 	gameObj.updateGameState()
	// }
	if(gameState == 1){
		gameObj.play()
		gameObj.click()
		//if(mousePressedOver(case1)){
			//case1.hide()
			//case1.visibility = 1000
		// 	case1.visible = false;
		// 	text("hi",500,100)

		 }
	///}
}
//function sz(){
	
//}