/**
 * Created by melodytempleton on 4/13/17.
 */
(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    var person = {};
    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */
    person.firstname = "Melody";
    person.lastname = "Templeton";
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        return "Hello from " + this.firstname + " " + this.lastname;
    };
    console.log(person.sayHello());
    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];

    var discount = .65;
    var discountBreakPoint = 200;

    shoppers.forEach(function(element, index) {

        var stringNum = shoppers[index].amount.toFixed(2);

        if (shoppers[index].amount > discountBreakPoint) {

            var finalPrice = shoppers[index].amount * discount;
            var finalPrice = finalPrice.toFixed(2);
        }

        if (shoppers[index].amount <= discountBreakPoint) {

            var finalPrice = stringNum;
        }

        var finalStatement =shoppers[index].name + " bought $" + stringNum + " worth of products. Final payment: $" + finalPrice
        ".";
        console.log (finalStatement);
    });


})();
