this.pickUpCoin = function() {
    // Collect coins.
    var coin = this.findNearest(this.findItems());
    if (coin){
        this.move(coin.pos);
    }
};

this.summonTroops = function() {
    // Summon soldiers if you have the gold.
    if (this.gold > this.costOf("soldier")){
        this.summon("soldier");
    }
};

this.commandSoldier = function(soldier) {
    // Soldiers should attack enemies
    var enemies = soldier.findNearestEnemy ();
    if (enemies){
        this.command(soldier, "attack", enemies);
    }
};

this.commandSoldier = function(Archer){
    enemies = Archer.findNearestEnemy ();
    if(enemies && Archer.distanceTo(enemies) < 25){
        this.command(Archer, "attack", enemies);
    }else{
        this.command(Archer, "move", Archer.pos);
    }
};

loop {
    this.pickUpCoin();
    this.summonTroops();
    var friends = this.findFriends();
    for(var i=0; i < friends.length; i++) {
        var friend = friends[i];
        if(friend.type == "soldier") {
            this.commandSoldier(friend);
        } else if(friend.type == "archer") {         
            this.commandSoldier(friend);
        }
    }
}

/*
Ogres are trying to kill your reindeer!
Keep your archers back while summoning soldiers to attack.
This function has an argument named soldier.
Arguments are like variables.
The value of an argument is determined when the function is called.
Write a commandArcher function to tell your archers what to do!
It should take one argument that will represent the archer passed to the function when it's called.
Archers should only attack enemies who are closer than 25 meters, otherwise, stay still.
This friend will be assigned to the variable soldier in commandSoldier
Be sure to command your archers.

*/
