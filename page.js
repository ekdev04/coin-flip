function runGame(x) {
    let predictionOut = document.getElementById('prediction');
    // more outputs here

    let choiceresult = x;
    let randNum = Math.floor(Math.random() * 2) + 1;
    let flipResult;
        if (randNum === 1){
            flipResult = 'tails';
        }  else{
            flipResult = 'heads';
        };
    let gameResult;
        if (flipResult === choiceresult){
            gameResult= "win";
        } else{
            gameResult="loss";
        };

        console.log(gameResult);

    predictionOut.innerText = choiceresult;
}