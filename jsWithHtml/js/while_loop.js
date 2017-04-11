/**
 * Created by melodytempleton on 4/10/17.
 */
"use strict";
var allCones = Math.floor(Math.random() * 50) + 50;

console.log(allCones + " available to sell.");
do {
    var cones = Math.floor(Math.random() * 5) + 1;
    if ((allCones - cones) >= 0){
        console.log(cones + " cones sold");
        allCones = allCones - cones;
    }

    else {
        console.log("Cannot sell you " + cones + " I have only " + allCones);
    }
} while (allCones > 0);

console.log("Yay! I sold them all!");


var i = 2;
while (i < 70000){

    console.log(i);
    i = i * 2;


}





// 5 cones sold...  // if there are enough cones
//     Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones
