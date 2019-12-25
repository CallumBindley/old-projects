
// simple shield and cleave move, when cleave is ready cleave otherwise shield until ready.

loop {
    var enemy = this.findNearest(this.findEnemies());
    if (this.isReady("cleave")) {
        this.cleave(enemy);

    }
    else {
        this.shield(this);

    }

}

//distance specific attack loop for the assassin class
loop {
    var enemy = this.findNearest(this.findEnemies());
    if (enemy) {
        var distance = this.distanceTo(enemy);
        if (distance < this.throwRange) {
            // Throw your dagger at the enemy.
            this.throw(enemy);

        }
        else {
            // Attack the enemy with your bow.
            this.attack(enemy);

        }
    }
}

// distance specific explosives throw by specific distance amount.
loop {
    var enemy = this.findNearest(this.findEnemies());

    if (enemy) {
        if (this.isReady("throw")) {
            var distance = this.distanceTo(enemy);
            if (this.distanceTo(enemy) > 15)  {
                this.throw(enemy);
            }
            else {
            this.attack(enemy);
            }
        }
        else {
            this.attack(enemy);
        }
    }
}

// wizard distance specific attack note drain life is a close range melee move
loop {
    var enemy = this.findNearest(this.findEnemies());
    if (enemy) {
        var distance = this.distanceTo(enemy);
        if (distance < 15) {
            // Cast "drain-life" on the enemy.
            this.cast("drain-life", enemy);
        }
        else {
            // Attack the enemy with your staff.
            this.attack(enemy);
        }
    }
}

// distance specific heal and attack

loop {
    if (this.canCast("regen")) {
        var bernardDistance = this.distanceTo("Bernard");
        if (bernardDistance < 10) {
            // Bernard needs regeneration!
            this.cast("regen", "Bernard");
        }
        var chandraDistance = this.distanceTo("Chandra");
        if (chandraDistance < 10) {
            this.cast("regen", "Chandra");
        }
    }
    else {
        var enemy = this.findNearest(this.findEnemies());

        if (enemy){
            var enemyDistance = this.distanceTo(enemy);
            if (this.distanceTo(enemy)) {
                this.attack(enemy);
            }
        }
    }
}

// Kill the enemy that's farthest away first.

loop {
    var farthest = null;
    var maxDistance = 0;
    var enemyIndex = 0;
    var enemies = this.findEnemies();

    // Look at all the enemies to figure out which one is farthest away.
    while (enemyIndex < enemies.length) {
        var target = enemies[enemyIndex];
        enemyIndex += 1;

        // Is this enemy farther than the farthest we've seen so far?
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


// just go after gold coins.

loop {
    var coins = this.findItems();
    var coinIndex = 0;
    while (coinIndex < coins.length){
    var coin = coins[coinIndex];
        if (coin.value == 3) {
            // Only pick up gold coins.
            this.moveXY(coin.pos.x, coin.pos.y);
        }
        coinIndex +=1;
    }
}

// Use while loops to pick out the enemy ( Array )

loop {
    var enemies = this.findEnemies();
    var enemyIndex = 0;
    while(enemyIndex < enemies.length){
        var enemy = enemies[enemyIndex];
        if (enemy.type != "sand-yak") {
            while (enemy.health > 0){
                this.cast("drain-life",enemy);
            }
        }
        enemyIndex += 1;
    this.moveXY(40,32);
    }
}

// flag specific moves loop

loop {
    var green = this.findFlag("green");
    var black = this.findFlag("black");
    var nearest = this.findNearestEnemy();

    if (green) {
        this.pickUpFlag(green);
    } else if (black && this.isReady("cleave")) {
        this.pickUpFlag(black);
        // Cleave!
        this.cleave(enemy);


    } else if (nearest && this.distanceTo(nearest) < 10) {
        // Attack!
        this.attack(enemy);

    }

}

// an all out attack loop with a flag retreat


loop {
    var flag = this.findFlag();
    var enemy = this.findNearest(this.findEnemies());
    if (flag){
        this.pickUpFlag(flag);
        }
    else {
        if (this.isReady("poison-cloud") && enemy){
            this.cast("poison-cloud", enemy);
            this.cast('raise-dead');
        }
        else if(this.isReady("magic-missile")&& enemy){
            this.cast("magic-missile", enemy);
        }
        else if(this.isReady("throw")&& enemy && this.distanceTo(enemy) > 10 ){
            this.throw(enemy);
        }
        else if (enemy){
            this.cast("drain-life", enemy);
        }
        else{
        this.moveXY(60, 51);
        }
    }
}

//while loop over all enemies

while(enemyIndex < enemies.length){
  var enemy = enemies[enemyIndex];
  if(enemy.type == "shaman") {
    while(enemy.health > 0) {
      this.attack(enemy);
    }
  }
}
