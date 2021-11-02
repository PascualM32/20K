/**
 * Author:    Pascual Martinez
 * Created:   11.01.2021
 * Lisence: Public Domain.
 **/

//Put a comment block (Links to an external site.) at the top of your program

//Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("outputlab9");

//Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("New1");

//Change the html attribute of new1El to say something new.
new1El.innerHTML = "Hello, stranger!";

//Create another new element and assign it to a variable new2El
var new2El = document.createElement("New2");

//Change the html attribute of new2El to say something else.
new2El.innerHTML = "Hello, hello!";

//Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//Change the css attributes of at least two elements of your page
new1El.style.color = "yellow";
new2El.style.color = "purple";
new2El.style.fontSize = "large";
new1El.style.fontSize = "large";
new2El.style.fontStyle = "bold";
new1El.style.fontStyle = "bold";
outputEl.style.backgroundColor = "black";
