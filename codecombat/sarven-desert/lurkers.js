
var enemies = this.findEnemies();
var enemyIndex = 0;
while(enemyIndex < enemies.length) {
    var enemy = enemies[enemyIndex];
    if (enemy.type == "shaman") {
        while (enemy.health > 0) {
            this.cast("drain-life", enemy);
        }
    }
    enemyIndex += 1;
}

/*
 findEnemies returns a list of all your enemies.
 Only attack shamans. Don't attack yaks!
 Wrap this section in a while loop to iterate over all enemies.
 While the enemyIndex is less than the length of enemies
 Remember to increment enemyIndex

findEnemies() gives you an array containing all enemies your hero can see:
var enemies = this.findEnemies() stores those enemies in the variable enemies.

*/
