/**
 * Author:    Pascual Martinez
 * Created:   10.25.2021
 * Lisence: Public Domain.
 **/

// sortUserName - function asks for user name as input, rearranges the letters
//of the inputted name, and outputs the newly arranged letters.

function sortUserName() {
    var userName = window.prompt("Hello Stranger. Please tell me your name, I know I can make it better");
    console.log("userName =", userName);

// split the inputted name's string into an array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray)

// sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArray=", nameArraySort);

// join array back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

// return new rearranged name
    return nameSorted;
}

//output
document.writeln("Look at that, I made your name better: ", sortUserName(), "</br>");
