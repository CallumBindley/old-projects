var friends = {
    bill:{
        firstName: "Bill",
        lastName: "Bob",
        number: "1111",
        address: ['one way','drive','dinglebum']
        },
    steve:{
        firstName: "Steve",
        lastName: "Sob",
        number: "2222",
        address: ['test', 'testy', 'mctest']
        }
    };

var list = function(friends){
    for(var key in friends) {
        console.log(key)
    }
}

var search = function(name){
    for(var key in friends) {
        if (friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key];
        }
    }
};
