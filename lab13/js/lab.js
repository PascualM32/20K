/**
 * Author:    Pascual Martinez
 * Created:   11.20.2021
 * Lisence: Public Domain.
 **/
//Create a "FizzBuzz" function similar to how we did in class
//Loop through numbers 1 to 200, listing them as you go
//If the number is a multiple of 3, if should print "Fizz!"
//If the number is a multiple of 5, it should print "Buzz!"
//If the number is a multiple of 7, it should print "Boom!"
//If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
//Make it so the output of your program appears in your output div.

 maxFactors = 4;

  outputEl = document.getElementById("output");

  function getFactorObj() {
      var factorObj = {};
      for (var factor=0; factor<maxFactors; factor++) {
          numId = "num" + factor;
          textId = "text" + factor;
          numValue = document.getElementById(numId).value;
          textValue = document.getElementById(textId).value;
          console.log(factor + ") num:", numValue, "text:", textValue)
          // if either value is blank, don't use it
          if (numValue && textValue) {
              factorObj[numValue] = textValue;
          }
      }
      return factorObj;
  }

  function outputToPage(str) {
      newEl = document.createElement("p");
      newEl.innerHTML = str;
      outputEl.appendChild(newEl);
  }

  // given a number and an object that looks like this:
  //      {3: "Fizz", 5: "Buzz", 7: "Boom"}
  // loop over the numbers and outputs the number and the matching text
  // for factors
  function fizzBuzzBoom(maxNums, factorObj) {
      // iterate over all output numbers
      for (var num=0; num<maxNums; num++) {
          debugger;
          // reset output string
          var outputStr = "";
          // iterate over the factors we got from the html
          for (var factor in factorObj) {
              // check to see if this num is a multiple of factor
              if (num % factor == 0) {
                  // if yes, than add the text to output string
                  outputStr += factorObj[factor];
              }
          }
          // have the input words show up like: "-Fizz!"
          if (outputStr) {
              outputStr = " - " + outputStr + "!";
          }
          outputToPage(num.toString() + outputStr)
      }
  }

  function reportError(str) {
      outputEl.innerHTML = "<div class='error'>" + str + "</div>";
  }

  document.getElementById("submit").addEventListener("click", function() {
      var max = document.getElementById("max").value;
      console.log("max:", max)
      if (! max) {
          reportError("You must provide a maximum");
          return;
      }
      var factorObj = getFactorObj();
      console.log("factorObj:", factorObj);
      if (Object.keys(factorObj).length === 0) {
          reportError("You must provide at least one factor and text");
          return;
      }
      // clear error if there is one
      outputEl.innerHTML = "";
      fizzBuzzBoom(max, factorObj);
      outputEl.classList.add("cols");
  })
