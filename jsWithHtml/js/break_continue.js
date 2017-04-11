/**
 * Created by melodytempleton on 4/11/17.
 */
"Use Strict";

var radomSkip = 0;

while (true){

    radomSkip = Math.floor((Math.random()*50)+1);

    if (radomSkip%2){
        console.log("Random number to skip is " + radomSkip);
        break;
    }

}

for (var i = 1; i <= 49; i+=2){

    if (i == radomSkip){

        console.log("Skipping number " + i);
        continue;
    }

    console.log("This is an odd number: " + i);

}
