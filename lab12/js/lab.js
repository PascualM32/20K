/**
 * Author:    Pascual Martinez
 * Created:   11.15.2021
 * Lisence: Public Domain.
 **/

 // Make a button for each section
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

 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function() {
   var name = document.getElementById("input").value;
   var team = sortingHat(name);
   newText = "<p>UEFA officials have decided that you MUST support " + team + "</p>";
   document.getElementById("output").innerHTML = newText;
 })
