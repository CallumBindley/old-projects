this.moveRight = function() {
    target = { "x": this.pos.x + 12, "y": this.pos.y };
    while(this.distanceTo(target) > 0) {
        this.move(target);
    }
};

this.moveDown = function(){
    target = { "x" : this.pos.x, "y": this.pos.y - 12};
    while(this.distanceTo(target) > 0) {
        this.move(target);
    }
};

this.moveUp = function (){
    target = {"x": this.pos.x, "y": this.pos.y + 12};
    while (this.distanceTo(target) > 0){
        this.move(target);
    }
};

this.moveRight();
this.moveDown();
this.moveUp();
this.moveUp();
this.moveRight();


/*
 Define your own simple movement functions.
 Define moveRight
 Note: each function should move the hero 12 meters!
 Define moveDown
 Define moveUp
 Now, use those functions!

//The function's name is "myFunction"

this.myFunction = function() {

      //this is the function's body.
      //commands here will only run when the function is invoked

      this.say("myFunction has been invoked!");
}

//This is no longer in the body of the function.
//This line invokes the function names "myFunction"

this.myFunction();

*/
