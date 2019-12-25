
loop {
    var gem = this.findNearest(this.findItems());
    if (gem) {
        var clear = this.isPathClear(this.pos, gem.pos);
        var centre = ({x:40,y:35});
        if (clear){
            this.move(gem.pos);
        }
        else {
            this.move(centre);
        }
    }
}

/*
 The isPathClear method tells you if there’s an obstacle in the way.
 If it’s clear, move() to gem.pos.
 Else, move back to the center point.

*/
