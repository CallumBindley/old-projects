
var defeated = 0 ;
while(true) {
     Do something
    var enemy = this.findNearest(this.findEnemies());
    if (enemy) {
        this.cast("drain-life", enemy);
        if(enemy.health <= 0) {
            defeated += 1 ;
            }
        }
    if(this.now() > 15) {
        break;
    }
}
this.moveXY(58, 33);
this.say(defeated);
while (true){
    var coin = this.findNearest(this.findItems());
        if (coin){
            this.move(coin.pos);
            if ( this.now() == 30){
                break;
            }
        }
}
this.moveXY(58, 33);
this.say(this.gold);
defeated = 0;
while(true){
    enemy = this.findNearest(this.findEnemies());
    if (enemy){
        this.cast("drain-life", enemy);
        if (enemy.health <=0){
            defeated += 1;
        }
    }if (this.now() == 45){
        break;
    }
}
this.moveXY(58, 33);
this.say(defeated);

/*
 Arrays and Time management, breaks and reports
 It is important to put the var defeated index outside the loop, i can only assume because if you didnt every time it would loop you would start over from 0 again.

*/
