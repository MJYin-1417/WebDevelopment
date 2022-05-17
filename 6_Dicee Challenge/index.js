
//change leftDice image
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var leftDice = document.getElementsByClassName('img1')[0];
leftDice.setAttribute("src", "images/dice" + randomNumber1 + ".png");

//change rightDice image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var rightDice = document.getElementsByClassName('img2')[0];
rightDice.setAttribute("src", "images/dice" + randomNumber2 + ".png");

//change h1
var title = document.querySelector("h1");
console.log(title);

if(randomNumber1 > randomNumber2){
  title.innerHTML = "🚩 Player 1 Wins!";
} else if(randomNumber1 < randomNumber2){
  title.innerHTML = "Player 2 Wins! 🚩";
} else{
  title.innerHTML = "Draw!";
}
