'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!😉'
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent =35;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage('🚫  no number!');  
    //when player wins
    }else if(guess === secretNumber){
         displayMessage('Correct Number!😉');
         document.querySelector('.number').textContent = secretNumber;
         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').style.width = '30rem';
         if(score  > highScore){
            highScore = score;
         }
         document.querySelector('.highscore').textContent = highScore;

    }else if(guess !== secretNumber){
        if(score > 1){
           displayMessage(guess > secretNumber ? '📈 Too High!' :  '📉 Too low!');
           score--;
           document.querySelector('.score').textContent = score;
        }else{
            displayMessage('😭 you lost the game!');
        }
    }
})

document.querySelector('.again').addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').value='';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})