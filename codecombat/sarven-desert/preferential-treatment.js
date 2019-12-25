
var enemies = this.findEnemies();
var enemyIndex = 0;

while (enemyIndex < enemies.length){
    var enemy = enemies[enemyIndex];
    while (enemy.type == 'thrower' && enemy.health > 0){
        this.cast("drain-life", enemy);
    }
    enemyIndex += 1;
}

enemies = this.findEnemies();
enemyIndex = 0;
while (enemyIndex < enemies.length){
    enemy = enemies[enemyIndex];
    while(enemy && enemy.health > 0){
        if (this.isReady("poison-cloud")){
            this.cast("poison-cloud", enemy);
        }else{
            this.cast("drain-life", enemy);
        }
    }
        enemyIndex += 1;
}

/*
while an enemy is a certain type and its alive attack and then INCREMENT!
note dont define the variable of enemy the second time

 First, loop through all enemies...
 ... but only attack 'thrower' type enemies.
 Then loop through all the enemies again...
 ... and take out everyone who's still standing.

 while enemyIndex < len(enemies):
  enemy = enemies[enemyIndex]
  if enemy.type == 'thrower':
    while enemy.health > 0:
      if self.isReady("cleave"):
        self.cleave(enemy)
      else:
        self.attack(enemy)
  enemyIndex += 1
  
*/
