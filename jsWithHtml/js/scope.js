/**
 * Created by melodytempleton on 4/12/17.
 */

"use strict";
(function () {


var myNameIs = 'Melody'; // TODO: Fill in your name here.

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {

    return "Hello " + name;
}


/**
 * TODO:
 * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */
console.log(sayHello(myNameIs));



// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random()*100)+1);

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 */
function isOdd (number){
    var message = (number%2) ? number + " is odd" : number + " is even";
    return message;
}
/**
 * TODO:
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */
console.log(isOdd(random));


function randomMathFunction(min, max) {

    var minMaxDifferance = (max-min) + 1;
    var random = Math.floor((Math.random()*minMaxDifferance)+min);
    return random;

}

console.log(randomMathFunction(100, 110));


function returnPrettyDate (date){

    var month = "";

    var monthNumber = date.substring(0, 2);


    switch (monthNumber) {
        case "01":
            month = "January";
            break;
        case "02":
            month = "February";
            break;
        case "03":
            month = "March";
            break;
        case "04":
            month = "April";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "June";
            break;
        case "07":
            month = "July";
            break;
        case "08":
            month = "August";
            break;
        case "09":
            month = "September";
            break;
        case "10":
            month = "October";
            break;
        case "11":
            month = "November";
            break;
        case "12":
            month = "December";
            break;
        default:
            month = "Unknown Month"
    }

    var day = date.substring(3,5);



    var year = date.substring(6,8);


    var yearNumber = parseInt(year);

    year = (yearNumber > 20) ? "19" + year : "20" + year;

    return month + " " + day + " " + year;

}

console.log(returnPrettyDate("12/25/15"));

})();