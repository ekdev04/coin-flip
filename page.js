function runGame(x) {
    let choiceresult= x
    let randNum=Math.floor(Math.random() *2) +1;
    let flipResult;
        if (randNum ===1){
            flipResult='tails';
        }  else{
            flipResult='heads';
        };
    let gameResult;
        if (flipResult === choiceresult){
            gameResult= "win";
        } else{
            gameResult="loss";
        };
        
}