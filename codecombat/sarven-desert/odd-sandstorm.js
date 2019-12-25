
var everybody = ['Yetu', 'Tabitha', 'Rasha', 'Max', 'Yazul',  'Todd'];
var enemyIndex = 0;
while (enemyIndex < everybody.length) {
    var ogrename = everybody[enemyIndex];
    this.attack(ogrename);
    enemyIndex += 2;
}
this.moveXY(36, 53);

/*
 This array contains friends and ogres.
 The even elements are ogres, but the odds are friends.
 Use square brackets to get the ogre name from the array.
 Attack using the variable holding the ogre name.
 Increment by 2 to skip over friends.
 After defeating ogres, move to the oasis.

An array needs a number to retrieve the character from hence the need for an enemy index
as adding numbers to the index changes the array focus

*/
