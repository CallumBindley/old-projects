
this.say("I should pick up a coin");
while(this.now() < 20) {
    coin = this.findNearest(this.findItems());
    this.move(coin.pos);
}
this.say("I should retreat");
while(this.pos.x > 16) {
    // Retreat behind the fence
    this.move({x: 16 , y: 36 });
}
while(this.pos.x <= 16){
    this.buildXY("fence", 21, 36);
    var enemy = this.findNearest(this.findEnemies());
    if (enemy){
        this.cast("drain-life", enemy);
    }
}

/*
object literal moves are better for coins that spawn because you are constantly modifying the movement path.

 You only have 20 seconds until the ogre horde arrives!
 Grab as much gold as you can, then retreat to your base and wall it off!
 Collect coins
 Build a fence to keep the ogres out.


*/
