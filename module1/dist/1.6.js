"use strict";
{
    // Learing function
    // Normal function
    // Arrow function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 5);
    var addArrow = function (num1, num2) { return num1 + num2; };
    // object --> function --> method
    var poorUser = {
        name: "Subas",
        balance: 0,
        addBalance: function (balance) {
            return "My new balance is: ".concat(this.balance + balance);
        }
    };
    var arr = [1, 4, 10];
    var newArray = arr.map(function (elem) { return elem * elem; });
    // learn rest operator
    var greetfriends = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) { return console.log("Hi ".concat(friend)); });
    };
    greetfriends("Abul", "kabul", "Babul");
}
