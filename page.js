let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;

function runGame(x) {
  
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
            gamesWon++;
        } else{
            gameResult="loss";
            gamesLost++;
        };

        gamesPlayed++;
        

        console.log(gameResult);

    let predictionOut = document.getElementById('prediction');
    predictionOut.innerText = choiceresult;

    let flipOut = document.getElementById('flip');
    flipOut.innerText = flipResult;

    let resultOut = document.getElementById('result');
    resultOut.innerText = gameResult;

    let gameCount = document.getElementById('count')
    gameCount.innerText = gamesPlayed

    let winCount = document. getElementById('wins')
    winCount.innerText = gamesWon

    let lossCount = document. getElementById('losses')
    lossCount.innerText = gamesLost
}

function resetScore() {
    gamesPlayed = 0;
    gamesWon = 0;
    gamesLost = 0;

    let gameCount = document.getElementById('count')
    gameCount.innerText = gamesPlayed

    let winCount = document. getElementById('wins')
    winCount.innerText = gamesWon

    let lossCount = document. getElementById('losses')
    lossCount.innerText = gamesLost

}