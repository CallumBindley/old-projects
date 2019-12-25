
loop {
    var friends = this.findNearest(this.findFriends());
    if (friends.type == "trapper"){
        var friend = friends ;
        while (friend) {
            var personalSpace = ({x:friend.pos.x , y:friend.pos.y - 6});
            this.move(personalSpace);
        }
    }
}

/*
 Move in sync with your dance partner to impress Pender Spellbane.

 it was important to get the character to find the target match its x axis
 whilst maintaining a 6 distance in the y axis. using an if then a while loop
 to anchor the character to the right target did the trick, also defining an
 object literal with the x & y position of the friend variable allowed for the
 distance.

used an xoffset variable to define the distance difference between to vectors,
then created an object literal for x and y using the equation of friend pos
minus the xoffset, aka move to friend position minus the distance the distance
between the friend and the character to begin with.  - a much cleaner solution

friend = self.findNearest(self.findFriends())
xOffset = friend.pos.x - self.pos.x
yOffset = friend.pos.y - self.pos.y

loop:
  self.move({"x": friend.pos.x - xOffset, "y": friend.pos.y - yOffset})
*/
