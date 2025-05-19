'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!😉'
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent =35;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
     document.querySelector('.number').textContent = guess;
    if(!guess){
        document.querySelector('.message').textContent = '🚫  no number!'
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!😉';

    }else if(guess > secretNumber){
        if(score > 1){
           document.querySelector('.message').textContent =  '📈 Too High!';
           score--;
           document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '😭 you lost the game!'
        }
       
    }else if(guess < secretNumber){
        if(score > 1){
           document.querySelector('.message').textContent = '📉 Too low!';
           score--;
           document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '😭 you lost the game!'
        }
       
    }
})