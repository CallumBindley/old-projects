
loop {
    var enemies = this.findEnemies();
    var enemyIndex = 0;
    while ( enemyIndex < enemies.length){
        var enemy = enemies[enemyIndex];
        enemyIndex ++;
        if (enemy && enemy.type != "sand-yak") {
            while (enemy.health > 0) {
                this.cast("drain-life", enemy);
            }
        }
    }
    this.moveXY(39 , 32);
}

/*
the move command was especially difficult to understand in this one, it was important to have the enemies health as a while loop.

 Use while loops to pick out the ogre
 Wrap this logic in a while loop to attack all enemies.
 Find the array's length with:  enemies.length
 "!=" means "not equal to."
 While the enemy's health is greater than 0, attack it!
 Between waves, move back to the center.

When attacking, use a while loop with the condition: enemy.health is greater than zero to make sure you attack until the enemy is dead.
Hint: The moveXY() command should be after (outside) your while enemyIndex loop, but inside the main while-true loop.

*/
