
var friendNames = ['Joan', 'Ronan', 'Nikita', 'Augustus'];
var friendIndex = 0;
while (friendIndex < friendNames.length) {
    var friendName = friendNames[friendIndex];
    this.say(friendName + ', go home!');    
    friendIndex += 1 ;
}
this.moveXY(30, 30);
this.buildXY("fence", 31, 30);

/*
 An ARRAY is a list of items.
 This array is a list of your friends' names.
 Array indices start at 0, not 1!
 Loop over each name in the array.
 The .length property gets the length of the array.
 Use square brackets to get a name from the array.
 Tell your friend to go home.
 Use + to connect two strings.
 Increment the index to get the next name from the array.
 Retreat to the oasis and build a fence to keep the ogres out.


*/
