
this.summonSoldiers = function() {
    if (this.gold >= this.costOf("soldier")) {
        this.summon("soldier");
    }
};

this.commandSoldiers = function(){
    soldiers = this.findByType("soldier");
    for ( i = 0 ; i < soldiers.length ; i ++ ){
        var soldier = soldiers[i];
        var enemy = soldier.findNearest(soldier.findEnemies());
        if (enemy){
            this.command(soldier, "attack", enemy);
        }
    }
};

this.pickUpNearestCoin = function(){
    var coin = this.findNearest(this.findItems());
    this.move(coin.pos);
};

this.summonBeast = function(){
    if (this.isReady("summon-burl")){
        this.cast("summon-burl");
    }
};

var peasant = this.findByType("peasant")[0];
loop {
    this.summonSoldiers();
    this.commandSoldiers();
    this.summonBeast();
    if (this.canCast("haste", this)){
        this.cast("haste", this);
    }
    this.pickUpNearestCoin();

}

/*
 If the peasant is damaged, the flowers will shrink!
 Define the function: commandSoldiers
 Define the function: pickUpNearestCoin

*/
