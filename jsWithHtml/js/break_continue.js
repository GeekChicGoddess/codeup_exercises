/**
 * Created by melodytempleton on 4/11/17.
 */
"Use Strict";

var radomSkip = 0;

while (true){

    window.radomSkip = Math.floor((Math.random()*50)+1);

    if (window.radomSkip%2){
        console.log("Random number to skip is " + window.radomSkip);
        break;
    }

}

for (var i = 1; i <= 49; i+=2){

    if (i !== radomSkip){

        console.log("This is an odd number: " + i);
        continue;
    }
}
