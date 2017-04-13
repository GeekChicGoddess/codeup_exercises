/**
 * Created by melodytempleton on 4/13/17.
 */
(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
     planetsString = planetsArray.join("<br>");
     console.log(planetsString);
    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    var listString = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
    console.log(listString);










    function twentyFourToTwelve(time){

        var twelveHourFormat = "";
        var timeArray = time.split("");

        if (timeArray[0] > 1) {
            switch (timeArray [1]) {
                case "0":
                    timeArray.splice(0, 2, "0", "8");
                    break;
                case "1":
                    timeArray.splice(0, 2, "0", "8");
                    break;
                case "2":
                    timeArray.splice(0, 2, "0", "9");
                    break;
                case "3":
                    timeArray.splice(0, 2, "1", "0");
                    break;
                case "4":
                    timeArray.splice(0, 2, "1", "1");
                    break;
            }
            twelveHourFormat = timeArray.join("") + "pm";
        }

        else if (timeArray[0] == 1 & timeArray[1] > 2) {
                switch (timeArray [1]) {
                    case "3":
                        timeArray.splice(0, 2, "0", "1");
                        break;
                    case "4":
                        timeArray.splice(0, 2, "0", "2");
                        break;
                    case "5":
                        timeArray.splice(0, 2, "0", "3");
                        break;
                    case "6":
                        timeArray.splice(0, 2, "0", "4");
                        break;
                    case "7":
                        timeArray.splice(0, 2, "0", "5");
                        break;
                    case "8":
                        timeArray.splice(0, 2, "0", "6");
                        break;
                    case "9":
                        timeArray.splice(0, 2, "0", "7");
                        break;
                }
                twelveHourFormat = timeArray.join("") + "pm";
            }
        else if (timeArray[0] == 1 & timeArray[1] == 2) {
                twelveHourFormat = timeArray.join("") + "pm";

            }

        else if (timeArray[0] == 0 & timeArray[1] == 0) {
            timeArray.splice(0, 2, "1", "2");
            twelveHourFormat = timeArray.join("") + "am";

        }
         else    {
            twelveHourFormat = timeArray.join("") + "am";

        }

        console.log(twelveHourFormat);
        return twelveHourFormat;


    }
twentyFourToTwelve("00:00");
})();



var suits = ["Ace of Hearts", "Ace of Diamonds", "Ace of Spades", "Ace of Clubs"];
// declare and initialize array
var suitsOrderList = "";
suits.forEach(function (element, index, array) {
    // element is the suit name..index is the iterator..array is the suits array itself
     suitsOrderList += 'The card at ' + index + ' is: ' + element + ".\n";
// creating a list that tells us the order of the cards in the array
});
alert(suitsOrderList);
var newSuitsOrder = []; // going to put them in a new, secret order here
var numberIndicesLeft = 3; // there are 4 (0,1, 2, 3) items in suits
var randomCardOrderer = 0;  // which card are we pulling off the array?
var newSuitsOrderList = ""; // this will be the new list of cards that displays
alert("I'm mixing up the cards now"); // going to mix them up below
for (var i = 0; i < 4; i++){
    randomCardOrderer = Math.floor(Math.random() * numberIndicesLeft); // which card do we pick?
    newSuitsOrder.push(suits[randomCardOrderer]); // push the random card onto new array
    suits.splice(randomCardOrderer, 1); // remove that card from the orginal suit array
    numberIndicesLeft -= i; // how many items left in suits?
}
var spade = newSuitsOrder.indexOf("Ace of Spades"); // where is the Ace of Spades?
var guess = prompt("Which index do you think the Ace of Spades is at?");
if (spade == guess) { // is your guess right?
    alert("Yes! win!");
}
else{ // guess not
    alert("Sorry. You lose");
};
alert("Here is the new order of my array..." + newSuitsOrderList);
newSuitsOrder.forEach(function (element, index, array) { // loop through and list them all
    newSuitsOrderList += 'The card at ' + index + ' is: ' + element + ".\n";
// element is the suit name..index is the iterator.
});
alert(newSuitsOrderList); // Here is the new order .....honest
