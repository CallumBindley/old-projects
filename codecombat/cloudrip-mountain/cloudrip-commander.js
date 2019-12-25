
while (this.gold > this.costOf("soldier")) {
    this.summon("soldier");
}

var soldiers = this.findFriends();
var soldierIndex = 0;

while(soldierIndex < soldiers.length){
    var soldier = soldiers[soldierIndex];
    this.command(soldier, "move", {x: 50, y: 40});
    soldierIndex ++ ;
}
this.moveXY(50, 40);

/*
note the object literal in the command variable

 Summon some soldiers, then direct them to your base.
 Add a while loop to command all the soldiers.
 Each soldier costs 20 gold.
 Go join your comrades!


*/
