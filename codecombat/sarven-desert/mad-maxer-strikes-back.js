
loop {
    var weakest = null;
    var leastHealth = 99999;
    var enemyIndex = 0;
    var enemies = this.findEnemies();
    while (enemyIndex < enemies.length){
        var enemy = enemies[enemyIndex];
        enemyIndex ++;
        if (enemy.health < leastHealth){
            weakest = enemy;
            leastHealth = enemy.health;
        }
    }
    if (weakest && weakest.health > 0) {
        this.cast("drain-life", weakest);
    }
}

/*
important to keep the attack outside of the loop and to increment, redefine the weakest adn the leasthealth variables based on the newly found enemies.

 The smaller ogres here do more damage!
 Attack the ogres with the least health first.
 Loop through all enemies.
 If an enemy's health is less than leastHealth,
 make it the weakest and set leastHealth to its health.
 Attack the weakest ogre.

*/
