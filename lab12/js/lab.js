/**
 * Author:    Pascual Martinez
 * Created:   11.15.2021
 * Lisence: Public Domain.
 **/

 // Create a function sortingHat()
 //that takes a string as an argument: function sortingHat(str)
//counts the letters in str and assigns it to a variable length
//uses modulus (% operator) to get the remainder with 4: mod = length % 4;
//mod will now be a value between 0 and 3
//create a conditional that will return FC Barcelona, Real Madrid, Arsenal, and SL Benfica depending on whether the value of mod is 0, 1, 2, or 3
  function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
      return "FC Barcelona"
    }
    else if (mod == 1) {
      return "Real Madrid"
    }
    else if (mod == 2) {
      return "Arsenal"
    }
    else if (mod == 3) {
      return "SL Benfica"
    }
  }
// Create an click listener attached to #button
//that gets the value of #input and assigns it to a variable name
//runs sortingHat(name) and stores the result in a variable house
//appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + team
 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function() {
   var name = document.getElementById("input").value;
   var team = sortingHat(name);
   newText = "<p>UEFA officials have decided that you MUST support " + team + "</p>";
   document.getElementById("output").innerHTML = newText;
 })
