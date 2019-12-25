
while(this.gold < 80){
var coin = this.findNearest(this.findItems());
    if (coin){
        this.move(coin.pos);
    }
}
for (var i=0; i < 4; i++){
    this.summon("soldier");
}
var points = [];
points[0] = { x: 13, y: 73 };
points[1] = { x: 51, y: 73 };
points[2] = { x: 51, y: 53 };
points[3] = { x: 90, y: 52 };
var friends = this.findFriends();
for (j=0; j < friends.length; j++){
    var point = points[j];
    var friend = friends[j];
    this.command(friend, "move", points[j]);
}

/*
 Collect 80 gold
 Build 4 soldiers to use as bait
 Send your soldiers into position
 Use a for-loop to loop over i from 0 to 4
 Match the friends to the points and command them to move


*/
