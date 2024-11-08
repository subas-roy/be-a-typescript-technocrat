{
  // type
  type PersonType = {
    name: string;
    age: number | string;
    isActive: true;
    designation: string;
    company: string
  }

  // interface
  interface IPerson {
    name: string;
    age: number | string;
    isActive: true;
    designation: string;
    company: string
  }

  interface IPerson { // same name interface will merge with previous one
    company: string;
  }

  const person: IPerson = {
    name: "Samsu",
    age: 25,
    isActive: true,
    designation: "Developer",
    company: "programming-hero"
  }

  console.log(person)




  //

}