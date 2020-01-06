
var targetNumber = Math.floor((Math.random() * 120) + 1);

  $("#numberToGuess").text(targetNumber);

  var counter = 0;
  var winCounter =  new Array;
  var lossCounter = new Array;
  var numberOptions = [1, 7, 3, 12];

  
  for (var i = 0; i < numberOptions.length; i++) {

   
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "./assets/images/pngguru.com.png");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
  }



  
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#collected").text(" Crystals Collected: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
      $("#wins").text(" Wins: " + winCounter +1);
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      $("#losses").text("Losses: " + lossCounter +1);

    }

  });