{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 18;
  if (age >= 18) {
    console.log("Adult")
  } else {
    console.log("Not adult")
  }

  const isAdult = age >= 18 ? "Adult" : "Not adult";
  console.log({isAdult})

  // nullish coalescing operator
  // null / undefined ---> decision making

  const isAuthenticated = "";

  const result1 = isAuthenticated ?? 'Guest'
  const result2 = isAuthenticated ? isAuthenticated : 'Guest'
  console.log({result1});
  console.log({result2});

  //
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string
    }
  }

  const user: User = {
    name: 'Subas',
    address: {
      city: 'dhk',
      road: 'Awesome Rd',
      presentAddress: 'Old dhk'
    }
  }


  const permanentAddress = user?.address?.permanentAddress ?? 'No Permanent Address';
  console.log({permanentAddress})






}

