
loop {
    pender = this.findNearest(this.findFriends());
    if (pender) {
        this.move(pender.pos);
    }
}

/*
 Catch up to Pender Spellbane to learn her secrets.
 Pender is the only friend here, so she's always the nearest.
 moveXY() will move to where Pender is,
 but she'll have moved away by the time you get there.
 move() only moves one step at a time,
 so you can use it to track your target.

*/
