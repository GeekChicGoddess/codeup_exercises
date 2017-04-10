/**
 * Created by melodytempleton on 4/10/17.
 */
"use strict";
var luckyNumber = Math.floor(Math.random()* 6);
var purchaseAmount = 60;
var payPercent = null;
var amazon = "";

switch (luckyNumber){

    case 0:
        payPercent = 1;
        break;
    case 1:
        payPercent = .9;
        break;
    case 2:
        payPercent = .75;
        break;
    case 4:
        payPercent = .5;
        break;
    case 5:
        payPercent = 0;
        break;
    default:
        payPercent = 1;
        amazon = "Shop at Amazon"

}

var youPay = (purchaseAmount * payPercent).toFixed(2);
console.log("You pay $" + youPay +". " + amazon);


var monthNum = Math.floor(Math.random()* 14);
var monthName = "";

switch (monthNum){

    case 1:
        monthName = "January";
        break;
   case 2:
        monthName = "February";
        break;
   case 3:
        monthName = "March";
        break;
   case 4:
        monthName = "April";
        break;
   case 5:
        monthName = "May";
        break;
   case 6:
        monthName = "June";
        break;
   case 7:
        monthName = "July";
        break;
   case 8:
        monthName = "August";
        break;
   case 9:
        monthName = "September";
        break;
   case 10:
        monthName = "October";
        break;
   case 11:
        monthName = "November";
        break;
   case 12:
        monthName = "December";
        break;
    default:
        monthName = "That number is not a month";
}
console.log(monthName);