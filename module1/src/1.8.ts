{

  // destructuring

  const user = {
    id: 345,
    name: {
      firstName: 'Subas',
      lastName: 'Roy'
    },
    contactNo: '01300000000',
    address: 'Dhaka'
  }

  const { name: { firstName }, contactNo } = user;

  // array destructuring
  const myFriends = ['Chandler', 'Joy', 'Monika', 'Phoebe', 'Ele']

  const [,, bestFriend, ...rest] = myFriends;




}