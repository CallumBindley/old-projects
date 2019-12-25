
gems = this.findItems();

while (this.pos.x < 20) {
    this.move({'x': 20, 'y': 35});
}while (this.pos.x < 25) {
    gem0 = gems[0];
    this.move(gem0.pos);
}while (this.pos.x < 30 ){
    this.move({'x':30,'y':35});
}while (this.pos.x < 35){
    gem1 = gems[1];
    this.move(gem1.pos);
}while (this.pos.x < 40){
    this.move({'x':40,'y':35});
}while (this.pos.x < 45){
    gem2 = gems[2];
    this.move(gem2.pos);
}while (this.pos.x < 50){
    this.move({'x':50,'y':35});
}while (this.pos.x < 54){
    gem3 = gems[3];
    this.move(gem3.pos);
}

/*
 Use object literals to walk the safe path and collect the gems.
 move() takes objects with x and y properties, not just numbers.
 You cannot use moveXY() on this level! Use move() to get around.
 A gem's position is an object with x and y properties.
 Use an object to move to 30, 35.
 While your x is less than 30,
 While your x is less than 35,
 Move to the position of gems[1].
 Get to the last couple of gems yourself!

note - turn into switch?
*/
