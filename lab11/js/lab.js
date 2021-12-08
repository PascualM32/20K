/**
 * Author:    Pascual Martinez
 * Created:   11.09.2021
 * Lisence: Public Domain.
 **/

// Make a button for each section
$("#challenge").append("<button id='c-button'>Click Me</button>");
$("#problem").append("<button id='p-button'>Click Me</button>");
$("#results").append("<button id='r-button'>Click Me</button>");

// Add a function to each
$("#c-button").click(function(){
  // find the section, toggle a class
  $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){
  // find the section, toggle a class
  $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){
  // find the section, toggle a class
  $(this).parent().toggleClass("special");
})
