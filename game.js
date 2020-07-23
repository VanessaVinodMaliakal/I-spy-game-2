class Game{
    constructor(){
this.info = []
    }
    getGameState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
            }
        
            updateGameState(){
        database.ref("/").update({
            "gameState": gameState
        })
    }
   async start(){
var countref = await database.ref("playerCount").once("value")
if(countref.exists()){
    playerCount = countref.val()
    playerObj = new Player()
playerObj.getCount()
formObj = new Form()
formObj.display()

}
    }

    play(){
        formObj.greetings.hide()
        
        //case3.addImage(caseImg)
        //case4= createSprite(width-400,height-200,3,4)
        //case4.addImage(caseImg)
        //case5= createSprite(width-100,height-400,5,4)
       // case5.addImage(caseImg)
      
       var b = ["chor","police","king","queen","minister"]
    //    if (playerCount === 4){
    //     b.pop
    // }
      if (playerCount === 4){
          b.splice(3,2)
     }
    // if (playerCount === 7){
    //     b.push("courtier")
    // }
    // if (playerCount === 8){
    //     b.push(" prince")
    // }
    // if (playerCount === 9){
    //     b.push("princess")
    // }
   // console.log(b)
    // if (playerCount === 6){
    //     b.push("minister")
    // }
       //var c =b[]
       //console.log(b)
       for(var i=200;i <= playerCount*250;i=i+250){
          // console.log(i)
           var obj = createSprite(i,100)
           obj.addImage(caseImg)
           obj.scale = 0.5
           var removedIndex = Math.round(random(0,(b.length-1)))
           this.info.push({"object":obj,"char":b[removedIndex]}) 
           b.splice(removedIndex,1)
//console.log(b,removedIndex)

       }

       
       
      // console.log(this.info)
        drawSprites()
    }
    click(){
        for (var a in this.info){
            
if(mousePressedOver(this.info[a].object)){
    console.log(this.info[a].char)
}

        }
}
}
//var i=0;i<group.length;i++{ if mousePressedOver(group.get(i)){}}