{
  // type gurds 

  // typeof --> type gueard

  // const add = (param1: string | number, param2: string | number): string | number => {
  //   if (typeof param1 === 'number' && typeof param2 === 'number') {
  //     return param1 + param2
  //   }  else {
  //     return param1.toString() + param2.toString()
  //   }
  // }


  type Alphanemeric = string | number;
  // using type
  const add = (param1: Alphanemeric , param2: Alphanemeric ): Alphanemeric  => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2
    }  else {
      return param1.toString() + param2.toString()
    }
  }

  const result1 = add('2', '5');
  console.log(result1)


  // in guard
  type NormalUser = {
    name: string;
  }
  type AdminUser = {
    name: string;
    role: "admin";
  }

  const getUser = (user: NormalUser | AdminUser) => {
    if ('role' in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`)
    } else {
      console.log(`My name is ${user.name}`)
    }
  }

  const normalUser: NormalUser = {
    name: "Normal Bhai"
  }
  const adminlUser: AdminUser = {
    name: "Normal Bhai",
    role: "admin"
  }
  
  getUser(adminlUser)
  //
}