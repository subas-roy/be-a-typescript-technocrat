"use strict";
{
    // destructuring
    var user = {
        id: 345,
        name: {
            firstName: 'Subas',
            lastName: 'Roy'
        },
        contactNo: '01300000000',
        address: 'Dhaka'
    };
    var fname = user.name.firstName, contactNo = user.contactNo;
    // array destructuring
    var myFriends = ['Chandler', 'Joy', 'Monika', 'Phoebe', 'Ele'];
    var bestFriend = myFriends[2], rest = myFriends.slice(3);
}
