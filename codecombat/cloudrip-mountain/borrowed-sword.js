
loop {
    var target1 = null;
    var friends = this.findFriends();
    var enemies = this.findEnemies();
    var highestHealth = 0 ;
    for (i=0; i < enemies.length ; i++){
        var enemy = enemies[i];
        if (enemy.health > highestHealth){
            highestHealth = enemy.health;
            target1 = enemy;
        }
    }if (target1){
        for (j = 0; j < friends.length ; j ++){
            var friend = friends[j];
            this.command(friend, "attack", target1);
        }
    }
}

/*
For this level, your hero doesn't fight.
Command your archers to focus fire on the enemy with the most health!

loop:
  toughest = None
  mostHealth = 0
  enemies = self.findEnemies()
  for enemy in enemies:
    if enemy.health > mostHealth:
      toughest = enemy
      mostHealth = enemy.health

  if toughest:
    friends = self.findFriends()
    for friend in friends:
      self.command(friend, "attack", toughest)

*/
