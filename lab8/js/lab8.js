/**
 * Author:    Pascual Martinez
 * Created:   10.26.2021
 * Lisence: Public Domain.
 **/
//define array
 var pascualArray = [4, 9, 16, 25, 36, 49, 72, 81, 100];


//function halves an integer
function halve(x) {
    var results = (x) / 2;
    return results;
}

//function halves all integers in pascualArray
  var results = pascualArray.map(function halve(x) {
    return (x)/2;
  })


//print pascualArray to screen
console.log("Pascual's Array:", pascualArray);

//print halved array to screen
console.log("Pascual's Array halved:", results);
