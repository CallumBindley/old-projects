
var defend = [];
defend[0] = { x: 98, y: 28 };
defend[1] = { x: 84, y: 7 };

var soldiers = [];
var friends = this.findFriends();
for(var i=0; i < friends.length; i++) {
    var friend = friends[i];
    if(friend.type == "soldier") {
        soldiers.push(friend);
    } else {
         Defend the workers:
        defend.push(friend);
    }
}

loop {
    for (i=0 ; i < soldiers.length ; i++){
        var soldier = soldiers[i];
        this.command(soldier, "defend", defend[i]);
    }
}

/*
 Protect the workers and animals!
 Defend these two positions:
 Use a for-loop to assign each soldier to a corresponding defend[] target
 Use command(soldier, "defend", thang) or command(soldier, "defend", position)

*/
