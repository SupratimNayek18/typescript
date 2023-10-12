var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// named function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
//function expression
var mul = function (num1, num2) {
    return num1 * num2;
};
console.log(mul(2, 3));
//arrow functions
var sub = function (num1, num2) {
    return num1 - num2;
};
console.log(sub(2, 3));
//optional parameter
var optionalParam = function (a, b, c) {
    return c ? a + b + c : a + b;
};
console.log(optionalParam(2, 3));
console.log(optionalParam(2, 3, 5));
//spread operator
var spreadOperator = function (a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    return a + b + c.reduce(function (a, b) { return a + b; });
};
console.log(spreadOperator.apply(void 0, __spreadArray([10, 20], [10, 20], false)));
