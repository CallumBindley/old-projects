this.drawCircle = function(x, y, size) {
    var angle = 0;
    this.toggleFlowers(false);
    while (angle <= Math.PI * 2) {
        var newX = x + (size * Math.cos(angle));
        var newY = y + (size * Math.sin(angle));
        this.moveXY(newX, newY);
        this.toggleFlowers(true);
        angle += 0.2;
    }
};

this.drawSquare = function(x, y, size) {
    this.toggleFlowers(false);
    var cornerOffset = size / 2;
    this.moveXY(x - cornerOffset, y - cornerOffset);
    this.toggleFlowers(true);
    this.moveXY(x + cornerOffset, y - cornerOffset);
    this.moveXY(x + cornerOffset, y + cornerOffset);
    this.moveXY(x - cornerOffset, y + cornerOffset);
    this.moveXY(x - cornerOffset, y - cornerOffset);
};

var redX = {x: 28, y: 36};
var whiteX = {x: 44, y: 36};

this.setFlowerColor("random");
this.drawCircle(redX.x,redX.y,10);
this.setFlowerColor("random");
this.drawSquare(whiteX.x,whiteX.y,10);

/*
You now have the Ring of Flowers! You can do:
toggleFlowers(true/false) - turns flowers on or off.
setFlowerColor("random") - can also be "pink", "red", "blue", "purple", "yellow", or "white".
Here are some functions for drawing shapes:
x, y - center of the shape
size - size of the shape (radius, side length)
Pick a color.
Draw a size 10 circle at the redX.
Change the color!
Draw a size 10 square at the whiteX.
Now experiment with drawing whatever you want!

*/
