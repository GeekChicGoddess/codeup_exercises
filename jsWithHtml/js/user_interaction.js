/**
 * Created by melodytempleton on 4/11/17.
 */
"use strict";
(function(){


// // TODO: Ask the user for their name.
// //       Keep asking if an empty input is provided.
//
// var nameResponse = "";
//
// function whatsYourName (){
//     nameResponse = prompt ("What is your name?");
//
//     while (!nameResponse) {
//         nameResponse = prompt ("I really need to know your name.  Please tell me or I'll just keep asking.")
//     }

//      if (nameResponse == "null") {
//          nameResponse = "Guest";
// }
// whatsYourName();
// // TODO: Show an alert message that welcomes the user based on their input.
//
// alert("Welcome " + nameResponse + ". So nice of you to visit.");
// // TODO: Ask the user if they like pizza.
// //       Based on their answer show a creative alert message.
// var humanOrNot = prompt ("Hey " + nameResponse + ", do  you like pizza?");
//
// humanOrNot = humanOrNot.toLowerCase();
//
// switch (humanOrNot){
//
//     case "yes":
//         alert ("Of course you do!  You're a human after all.");
//         break;
//
//     case "y":
//         alert ("Of course you do!  You're a human after all.");
//         break;
//
//     case "no":
//         alert ("What the hell is wrong with you?  You are not a human.");
//         break;
//
//     case "n":
//         alert ("What the hell is wrong with you?  You are not a human.");
//         break;
//
//     default:
//         alert ("Ok................");
// }
//

var registered = prompt ("Are you registered?");



var username="";
var password="";

do {
    registered = registered.toLowerCase();
    switch (registered) {

        case "y":
            username = prompt("What is your username?");
            password = prompt("What is your password?");
            break;

        case "yes":
            username = prompt("What is your username?");
            password = prompt("What is your password?");
            break;

        case "n":
            username = prompt("Please register.  Enter desired username.");
            password = prompt("Now choose a password");
            break;

        case "null":
            username = "Whoever you are.";
            break;

        default:
            registered = prompt("What is that again?  Are you registered here?  Yes or no?");

    }
}while(!username);

alert("Welcome " + username + "!");

})();