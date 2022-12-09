let numOfWon = 0;
let numOfLost = 0;
for (let i = 1; i <=5; i++) {
    let guessNumber = parseInt(prompt('Enter a number from 1 to 5 : ')) ;
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    if(guessNumber == randomNumber){
        console.log('you have won');
        numOfWon++;
    }    
    else{
        console.log("you have lost.Random Number was " + randomNumber);
        numOfLost++;
    }
}

document.write("Total Number of Won = " + numOfWon + '<br>');
document.write("Total Number of lost = " + numOfLost + '<br>');