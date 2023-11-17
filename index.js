var randomNumber = Math.ceil(Math.random()*6);
var diceImage = document.querySelector("img.img1")
diceImage.setAttribute("src", "./images/dice"+randomNumber.toString()+".png");


var randomNumber2 = Math.ceil(Math.random()*6);
var diceImage2 = document.querySelector("img.img2")
diceImage2.setAttribute("src", "./images/dice"+randomNumber2.toString()+".png");

if(randomNumber>randomNumber2){
    document.querySelector("h1").textContent = "⛳️Player 1 Wins";
}
else if(randomNumber2> randomNumber){
    document.querySelector("h1").textContent = "Player 2 Wins⛳️";
}
else{
    document.querySelector("h1").textContent = "Draw";
}