"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    // spread operator
    // rest operator
    // destructuring
    // learn spread operator
    var bros1 = ['Mir', 'Firoz', 'Mizan'];
    var bros2 = ['Tonmoy', 'Nahid', 'Rahat'];
    bros1.push.apply(bros1, bros2);
    console.log(bros1);
    var mentors1 = {
        typescript: 'Mexba',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    var mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    };
    var mentorsList = __assign(__assign({}, mentors1), mentors2);
}
