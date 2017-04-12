/**
 * Created by melodytempleton on 4/12/17.
 */
(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
var names = ["Melody", "Roger", "Padma", "Sebastian"];
    // TODO: Create a log statement that will log the number of elements in the names array.
console.log(names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
    for (var i=0; i<names.length; i++){
        console.log(names[i]);
    }

   names.forEach(function(name){

       console.log(name);

   })


    var menuItems = ["pizza", "fried chicken", "tacos", "fajitas", "lasagna", "chicken parmasan", "sushi", "burgers and fries", "roasted chicken", "carnitas", "chicken mole", "meatloaf"];
    var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    (function gettingFat (){

        var randomMenuNumbers = [];
        var randomNumber;
        var randomMenuNumbersLength = 0;


        while (randomMenuNumbersLength < 6) {
            randomNumber = Math.floor(Math.random() * 12);

             for (var i = 0; i < randomMenuNumbers.length; i++){
                 if (randomNumber === randomMenuNumbers[i]){
                     randomNumber = null;
                 }
             }
             if (randomNumber != null) {
                 randomMenuNumbers.push(randomNumber);
                 randomMenuNumbersLength++;
             }

        }

        for (var j = 0; j < daysOfTheWeek.length; j++){

                console.log(daysOfTheWeek[j] + "  --  " + menuItems[randomMenuNumbers[j]]);
        }
    })()



    function strikeout (repeat){
        var strikeOrScoreArray = [];
        var strikeOrScore = "";
        var randomNumber= 5;
        var strikeOrScoreArrayLength = 0;
        var strikes = 0;
        var scores = 0;
        var repeated = 0;
        while(repeated < repeat) {
            while (strikeOrScoreArrayLength < 3) {
                randomNumber = Math.floor(Math.random() * 2);
                switch (randomNumber) {
                    case 0:
                        strikeOrScore = "strike";
                        break;
                    case 1:
                        strikeOrScore = "score";
                        break;
                    default:
                        strikeOrScore = "Your number generator isn't right";
                }
                console.log(strikeOrScore);
                if (strikeOrScoreArrayLength < 3) {

                    strikeOrScoreArray.push(strikeOrScore);
                    strikeOrScoreArrayLength++;
                    if (strikeOrScoreArrayLength === 3) {
                        for (var i = 0; i < 3; i++) {
                            if (strikeOrScoreArray[i] === "strike") {
                                strikes++;
                            }
                            else scores++;
                        }
                        if (scores === 3) {
                            console.log("Yay!  You win!")
                        }
                        else if (scores === 2 || scores === 1) {
                            console.log("You can try again")
                        }
                        else {
                            console.log("You lose!")
                        }
                        strikeOrScoreArray = [];
                        strikeOrScoreArrayLength = 0;
                        break;
                    }
                }
            }
            repeated++
        }
    };
 strikeout(4);


})();