
loop {
    var friends = this.findFriends();
    for (var i = 0; i < friends.length; i++){
        var friend = friends[i];
        var enemy = friend.findNearest(friend.findEnemies());
        if (enemy){
            this.command(friend, "attack", enemy);
        }else{
            var moveTo = ({"x":friend.pos.x + 0.35 ,"y": friend.pos.y});
            this.command(friend, 'move', moveTo);
        }
    }
}

/*
 Command your troops to move east and attack any ogres they see.
 Use for-loops and findFriends.
 You can use findNearestEnemy() on your soldiers to get their nearest enemy instead of yours

for this one it was important to figure out how to for loop over each friend (soldier) in the friends index. create an index then while it is less then the amount of friends increment.
however it is important to put in a loop otherwise it will ony loop once. var friend = friends[i] the friend and the number in the index is the friend variable, then you can make that
specific friend attack. Not all.

loop:
  friends = self.findFriends()
  for friend in friends:
    enemy = friend.findNearestEnemy()
    if enemy:
      self.command(friend, "attack", enemy)
    else:
      moveTo = {"x": friend.pos.x + 0.35, "y": friend.pos.y}
      self.command(friend, "move", moveTo)

*/
