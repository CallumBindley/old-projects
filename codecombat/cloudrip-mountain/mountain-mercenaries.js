
loop {
    var coin = this.findNearest(this.findItems());
    this.move(coin.pos);
    if (this.gold > this.costOf("soldier")) {
        this.summon("soldier");
}

    var enemy = this.findNearest(this.findEnemies());
    if (enemy) {
         Loop over all your soldiers and order them to attack.
        var soldiers = this.findFriends();
        var soldierIndex = 0;

        while (soldierIndex < soldiers.length){
            var soldier = soldiers[soldierIndex];
            this.command(soldier, "attack", enemy);
            soldierIndex ++ ;
        }
    }
}

/*
was important to put the var solider into the while loop

 Gather coins to summon soldiers and have them attack the enemy.
 Move to the nearest coin.
 Use move instead of moveXY so you can command constantly.
 If you have funds for a soldier, summon one.
 Use the 'attack' command to make your soldiers attack.
this.command(soldier, "attack", enemy);


*/
