var user = prompt("aaah! a Troll , FIGHT it, PAY it off, RUN away").toUpperCase();


switch(user) {

    case 'FIGHT':

        var punch = prompt("do you punch it (YES or NO)?").toUpperCase();
        var kick = prompt(" do you kick it (YES or NO)?").toUpperCase();
        if (kick === "YES" || punch === "YES"){
            console.log("A mighty Blow, you win gg");
        }
        else{
            console.log("really? nothing? ok ah it smushes you to death");
        }
        break;

    case 'PAY':
        var makeRain = prompt(' the troll sniggers, "hmmf wana party?" YES/NO').toUpperCase();
        var gotPaid = prompt("did your centrelink come in YES/NO?").toUpperCase();
        if (makeRain === "YES" && gotPaid === "YES"){
            console.log("you and the troll catch an uber into town and hit the clubs, the troll eats the bouncer and you both go to jail, why on earth would you go partying with a troll?");
        }else{
            console.log(" the troll is not impressed by your enthusiam to party, it smushes you to death");
        }
        break;


    case 'RUN':
        var diet = prompt("stuck to your news years resolution and lost that extra weight YES/NO?").toUpperCase();
        var ninjaRun = prompt("run with your arms back like a ninja to improve aerodynamics YES/NO?").toUpperCase();
        if (diet === "YES" || ninjaRun === "YES") {
            (' It worked! you run a short distance to safety and then keel over in pain, you think to yourself OMG! aaaaa why does running hurt so much, im so out of shape, i should of just let the troll kill me, life is pain...');
        }else{
            console.log("smooshed");
        }
        break;

    default:
        console.log("4");

}
