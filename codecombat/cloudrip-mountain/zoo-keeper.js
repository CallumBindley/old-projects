
var points = [];
points[0] = {x: 33, y: 42};
points[1] = {x: 47, y: 42};
points[2] = {x: 33, y: 26};
points[3] = {x: 47, y: 26};

while (this.gold < 80){
    var coin = this.findNearest(this.findItems());
    if(coin){
        this.move(coin.pos);
    }
}

for(var i=0; i < 4; i++) {
    this.summon("soldier");
}

loop {
    var friends = this.findFriends();
    for(var j=0; j < friends.length; j++) {
        var point = points[j];
        var friend = friends[j];
        var enemy = friend.findNearestEnemy();
        if(enemy && enemy.team == "ogres" && friend.distanceTo(enemy) < 5) {
            this.command(friend, "attack", enemy);
        } else {
            this.command(friend, "move", point);
        }
    }
}

/*
 Protect the cage.
 Put a soldier at each X.
 1. Collect 80 gold.
 2. Build 4 soldiers.
 3. Send your soldiers into position.
 Command friend to attack.
 Command friend to move to point.


*/
