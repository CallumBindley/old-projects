
this.pickUpNearestCoin = function() {
    var items = this.findItems();
    var nearestCoin = this.findNearest(items);
    if(nearestCoin) {
        this.move(nearestCoin.pos);
    }
};

this.summonSoldier = function() {
    if (this.gold > this.costOf("soldier")){
        this.summon("soldier");
    }
};

this.commandSoldiers = function() {
    var friends = this.findFriends();
    for(var i=0; i < friends.length; i++) {
        var enemy = friends[i].findNearestEnemy();
        if(enemy) {
            this.command(friends[i],"attack", enemy);
        }
    }
};

this.Burl = function(){
    if (this.isReady("summon-burl")){
        this.cast("summon-burl");
    }
};

loop {

    this.pickUpNearestCoin();
    this.summonSoldier();
    this.commandSoldiers();

}

/*
 This level shows how to define your own functions.
 The code inside a function is not executed immediately. It's saved for later.
 This function has your hero collect the nearest coin.
 This function has your hero summon a soldier.
 Fill in code here to summon a soldier if you have enough gold.
 This function commands your soldiers to attack their nearest enemy.
 In your loop, you can "call" the functions defined above.
 The following line causes the code inside the "pickUpNearestCoin" function to be executed.
 Call summonSoldier here
 Call commandSoldiers here

*/
