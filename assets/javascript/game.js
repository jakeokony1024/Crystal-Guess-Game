
var targetNumber = Math.floor((Math.random() * 120) + 1);

  $("#numberToGuess").text(targetNumber);

  var counter = 0;
  var winCounter = 0;
  var lossCounter = 0;
  var numberOptions = [1, 7, 3, 12];

  
  for (var i = 0; i < numberOptions.length; i++) {

   
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "./assets/images/pngguru.com.png");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
  }

  // Function to reset the number to guess and the counter//
  function reset(){
    counter = 0;
    targetNumber = Math.floor((Math.random() * 120) + 1);
    $("#numberToGuess").text(targetNumber);
  }
  // Function to get value of crystal clicked and add it to counter//
  $(".crystal-image").on("click", function() {

    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#collected").text(" Crystals Collected: " + counter);

  // sets alert for winning and adds to the win counter

    if (counter === targetNumber) {
      alert("You win!");
      $("#wins").text(" Wins: " + winCounter++);
      reset();
      
    }
  // sets alert for losing and adds to the loss counter
    else if (counter >= targetNumber) {
      alert("You lose!!");
      $("#losses").text("Losses: " + lossCounter++);
      reset();
      
    }

  });