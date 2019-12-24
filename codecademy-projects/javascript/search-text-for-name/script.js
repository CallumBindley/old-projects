/*jshint multistr:true */

var text = "placed between two numbers, divide the  first number by the second, and return the remainder - testing for no Bob remainders ";

var myName = "Bob";
var hits = [];

for (var i = 0 ; i < text.length ; i++){
    if (text[i] === "B") {
        for (var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0){
    console.log("Your name wasn't found!")
} else {
    console.log(hits);
}
