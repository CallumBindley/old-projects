
loop {
    var moveEast = ({"x":this.pos.x + 5,"y":this.pos.y});
    this.move(moveEast);
    if (this.canCast("haste", this)){
        this.cast("haste", this);
    }else if (this.isReady("reset-cooldown")) {
        this.resetCooldown("haste");
    }
    var enemies = this.findEnemies();
    for (i = 0; i < enemies.length ; i++){
        var enemy = enemies[i];
        if (enemy.type == "scout" && this.distanceTo(enemy) < 10){
            this.manaBlast(enemy);
        }
    }
}

/*
 canCast is different to isReady in that canCast checks to see if the spell can be cast
on the thing while is ready checks to see if it can be cast. The difference is how much time between
casts with canCast doing only what is nessesary


 Escape off the right side of the map.
 To outrun the  yeti, you'll have to make yourself faster.
 Use resetCooldown to use a spell or skill more frequently.
 manaBlast can help clear the path.

*/
