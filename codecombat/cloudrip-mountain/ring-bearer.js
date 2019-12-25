
function findSoldierOffset(soldiers, i) {
    var soldier = soldiers[i];
    var angle = i * 360 / soldiers.length;
    return radialToCartesian(5, angle);
}

function radialToCartesian(radius, degrees) {
    var radians = Math.PI / 180 * degrees;
    var xOffset = radius * Math.cos(radians);
    var yOffset = radius * Math.sin(radians);
    return {x: xOffset, y: yOffset};
}

var peasant = this.findByType("peasant")[0];
loop {
    var soldiers = this.findByType("soldier");
    for (i = 0 ;i < soldiers.length; i++){
        offset = findSoldierOffset(soldiers, i);
        moveTo = ({"x": peasant.pos.x + offset.x , "y": peasant.pos.y + offset.y});
        this.command(soldiers[i], "move", moveTo);

    }this.move({x: this.pos.x + 0.2, y: this.pos.y});
}

/*
 You must escort a powerful magical ring back to town to be studied.
 The goal is to escape, not fight. More ogres lurk in the surrounding mountains!
 Make a circle of soldiers around the peasant!
 We give you two functions to help with this:
 findSoldierOffset figures out the position a soldier should stand at in relation to the peasant.
 The first argument 'soldiers' should be an array of your soldiers.
 The second argument 'i' is the index of the soldier (in soldiers) you want to find the position for.
 This function does the math to determine the offset a soldier should stand at.
 Use findByType to get an array of your soldiers.
 Use a for-loop to iterate over your array of soldiers.
 Find the offset for a soldier.
 Add the offset.x and offset.y to the peasant's pos.x and pos.y.
 Command the soldier to move to the new offset position.
 The hero should keep pace with the peasant!
*/
