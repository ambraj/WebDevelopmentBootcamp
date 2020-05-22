var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var counter = 0;

$(".btn").click(function(event){
  console.log(event);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * Math.floor(4));

  var randomChosenNumber = buttonColours[randomNumber];
  console.log(randomChosenNumber);
  gamePattern.push(randomChosenNumber);
  console.log(gamePattern);
}

nextSequence();
