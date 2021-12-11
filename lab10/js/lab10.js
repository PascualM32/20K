/**
 * Author:    Pascual Martinez
 * Created:   11.03.2021
 * Lisence: Public Domain.
 **/


// sortUserName - a function that:
 //Gets the value of your input field
//Runs that value through your sort() or anagram() function and saves the results.
//Replaces the html in <div id=output> with the results.
function sortUserName()
{
     document.getElementById("output").innerHTML = document.getElementById('userName').value + " ";
     var userName =  document.getElementById("userName").value;
     newName = userName.toLowerCase();
     var nameArray = newName.split('');
     var sortArray = nameArray.sort();
     var joinArray = sortArray.join('');
     console.log("final array =", joinArray);
     document.writeln("This would be your name if all the letters were in alphabetical order: ", joinArray, "</br>");
}
