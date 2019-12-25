
loop {

    var coin = this.findNearest(this.findItems());
    if (coin){
        this.move(coin.pos);
    }
    if (this.gold > this.costOf("soldier")){
        this.summon("soldier");
    }
    var friends = this.findFriends();

    for(var friendIndex = 0; friendIndex < friends.length; friendIndex++) {
        var friend = friends[friendIndex];
        if(friend.type == "soldier") {
            var enemy = friend.findNearestEnemy();
            if (enemy){
                this.command(friend, "attack", enemy);
            }else{
                this.command(friend, "move", {x:74,y:46});
            }
        }
    }
}

/*
for loop say set the friend index to 0 and then whilst there are more friends then the index number loop and increment the index until they are equal aka all friends have been targeted.

 Collect gold.
 If you have enough gold, summon a soldier.
 Use a for-loop to command each soldier.
 For-loops have 3 parts, separated by semicolons.
 for(initialization; condition; expression)
 Initialization is done at the start of the first loop.
 The loops continue while condition is true.
 If there's an enemy, command her to attack.
 Otherwise, move her to the right side of the map.


*/
