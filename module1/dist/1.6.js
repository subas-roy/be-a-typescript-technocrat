"use strict";
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
