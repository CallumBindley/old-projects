
loop {
    var friends = this.findFriends();
    for(var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        if (i === 0) {
            var enemy = friend.findNearest(friend.findEnemies());
            if (enemy){
                this.command(friend, "move", ({"x":enemy.pos.x,"y":enemy.pos.y}));
            }
        }else{
            this.command(friend, "move", ({"x":8,"y":11}));
        }
    }
}

/*
 Robobombs explode when they die or touch an enemy.
 Split up your soldiers so that they don't all get exploded together.
 Use the index to decide where to command each soldier to move.
 send 0 in the index toward the enemy position
 move all else to the bottom left
 bonus : define closest friend to enemy position
 send that friend to enemy

*/
