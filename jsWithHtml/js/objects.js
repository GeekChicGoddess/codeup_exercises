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

    var pet = {
        name: "Jasmine",
        species: "dog",
        age: 4,
        gender: "female",
        clean: true,
        hungry: false,
        sleepy: false,
        happy: false,
        petFood: 10,
        soap: 3
    };
    // 1) callPet() - call’s out pet name
    // 2) playWithPet() - makes pet happy and hungry and dirty
    // 3) feedPet(petFood) - makes pet not hungry and sleepy and reduces petFood by 1
    // 4) makePetSleep() - makes pet not sleepy, not happy, and hungry, and 1 older
    // 5) cleanPet(soap) - makes pet not happy and clean and reduces soap by 1

    function callPet(){
        console.log("Here " + pet.name);
    }
    function playWithPet(){
        pet.happy = true;
        pet.hungry = true;
        pet.clean = false;
        console.log("play with pet");
        console.log(pet);
    }

    function feedPet(foodServings) {
        pet.hungry = false;
        pet.sleepy = true;
        pet.petFood = pet.petFood - foodServings;
        console.log("feed pet");
        console.log(pet);
    }
    function makePetSleep() {
        pet.sleepy = false;
        pet.happy = false;
        pet.hungry = true;
        pet.age += 1;
        console.log("make pet sleep");
        console.log(pet);
    }

    function cleanPet(soapAmount){
        pet.happy = false;
        pet.clean = true;
        pet.soap -= soapAmount;
        console.log("clean pet")
        console.log(pet);
    }

    console.log(pet);
    callPet();
    playWithPet();
    feedPet(2);


})();
