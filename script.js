'use strict';
/*
//learn easy way to select element in JS
console.log(document.querySelector('.message').textContent); //this selects the element with the class name of message; if it was an ID and not a class, it would be #message
//we add the text content property
//selecting an element means interacting with the dom
//clear the terminal using command K
*/

//Dom manipulation
//DOM: document object model- structured representation of HTML documents; allows js to access HTML elements and styles to manipulate them; its the connection point between html and js
//Dom always starts with the document element, then the next is html, then head and body, then title and section, then text, paragraph, image, a (link), etc
//dom is not actually part of javascript; dom and dom methods & properties are part of web apis; APIs are like libraries browsers implement that we can access from our js code- application programming interface (API)- they are automatically available for us to use

/*
//selecting and manipulating elements
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Handling Click Events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage(`No number!🙈`);
  } // emoji = CMD + CTRL + space

  //when player wins
  else if (guess === secretNumber) {
    displayMessage(`🎉Correct Number!`);
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //Implementing highscores
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high!📈` : `Too low!📉`);
      score--; //same as (score = score - 1)
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`💥 You lost the game!`);
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = ``;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//DRY principle: don't repeat yourself
