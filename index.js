
var player1=prompt("Name of Player 1 : ");
var player2=prompt("Name of Player 2 : ");

document.querySelector(".player1").innerHTML=player1;
document.querySelector(".player2").innerHTML=player2;

function rollDice(){

  var randomNumber1 = (Math.random()*6)+1;
  var display1 = Math.floor(randomNumber1);

  var leftImage = document.querySelector(".img1");
  var string = 'images/dice'+display1+'.png';
  leftImage.setAttribute("src",string);

  var randomNumber2 = (Math.random()*6)+1;
  var display2 = Math.floor(randomNumber2);

  var rightImage = document.querySelector(".img2");
  var string = 'images/dice'+display2+'.png';
  rightImage.setAttribute("src",string);

  var winner = "It's a Draw !";
  if(display1<display2){
    winner = player2 + " is Winner !";
  }
  else if(display1>display2){
    winner = player1 + " is Winner !";
  }

  document.querySelector("h1").innerHTML = winner;

}
