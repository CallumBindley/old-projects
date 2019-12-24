var totalDamage = 0;
var damageThisRound = Math.floor(Math.random() * 5 + 1 );
var slaying = true;
var youHit = Math.floor(Math.random() * 2);

while(slaying){
    if(youHit = 1){
        console.log("A Mighty Blow!!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You did it! You slayed the dragon!");
            slaying = false;
        }else{
            youHit = Math.floor(Math.random() * 2);
        }

    }else{
        console.log("The dragon rips you to pieces, you will be missed");
    }

    slaying = false;
}
