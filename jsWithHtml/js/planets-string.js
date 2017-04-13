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