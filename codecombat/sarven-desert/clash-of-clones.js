
loop {
    var enemyIndex = 0;
    var minHealth = 9999;
    var targetEnemy = null;
    var enemies = this.findEnemies();
    while (enemyIndex < enemies.length){
        var enemy = enemies[enemyIndex];
        if (enemy.health < minHealth){
            minHealth = enemy.health ;
            targetEnemy = enemy ;
        }if (enemy.type == "sand-yak"){
            enemyIndex ++;
            continue ;
        }while (enemy.health > 0){
            if (this.isReady("poison-cloud")){
                this.cast("magic-missile", enemy);
                this.cast("poison-cloud", enemy);
                this.moveXY(enemy.pos.x , enemy.pos.y);
                this.cast('raise-dead');
            }else {
                this.cast("drain-life", enemy);
            }
        }enemyIndex ++ ;
    }
}
