/**
 * Created by melodytempleton on 4/11/17.
 */
var randomNumber = Math.floor(Math.random() * 10) + 1;

for (var i = 1; i<=10; i++){
    var multAnswer = randomNumber * i;
    console.log(randomNumber + " " + "x" + " " + i + " " + "=" + " " + multAnswer);
}

for (var i = 1; i<=10; i++) {

    var randomNumberOddorEven = Math.floor(Math.random() * 180) + 20;
    var message = (randomNumberOddorEven % 2 == 0) ? " is even" : " is odd";
    console.log(randomNumberOddorEven + message);

}




    console.log ("<ul>")

for (var i = 1; i<=5; i++) {

    var random10to20 = Math.floor(Math.random() * 9) + 12;
    console.log("\t <li>Random " + random10to20 + "</li>");


}
console.log ("</ul>")