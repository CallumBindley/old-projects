
loop {
    var farthest = null;
    var maxDistance = 0;
    var enemyIndex = 0;
    var enemies = this.findEnemies();
    while (enemyIndex < enemies.length) {
        var target = enemies[enemyIndex];
        enemyIndex += 1;
        var distance = this.distanceTo(target);
        if (distance > maxDistance) {
            maxDistance = distance;
            farthest = target;
        }
    }
    if (farthest) {
        // Take out the farthest enemy!
        // Keep attacking the enemy while its health is greater than 0.
        while (farthest.health > 0){
            this.cast("drain-life", farthest);
        }
    }
}

/*
note the null, an empty space as that is the variable that the enemy will be defined into

 Kill the enemy that's farthest away first.
 Look at all the enemies to figure out which one is farthest away.
 Is this enemy farther than the farthest we've seen so far?

*/
