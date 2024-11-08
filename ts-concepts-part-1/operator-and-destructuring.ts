{
  const rolls: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // spread operator
  const newRolls: number[] = [...rolls, 11, 12, 13, 14, 15]

  // console.log(newRolls)



  // object
  type PersonType = {
    name: string;
    age: number | string;
    isActive: true;
    designation: string;
    company: string;
    salary?: number; // nullable / (optional) operator
  }

  const person1: PersonType = {
    name: "Shariful Islam",
    age: 45,
    isActive: true,
    designation: "Next Level Developer",
    company: "Programming Hero"
  }

  // Using spread operator
  const newInfoOfPerson1: PersonType = {
    ...person1, // spread operator in object
    salary: 100000
  }

  // console.log(newInfoOfPerson1)



  // rest operator
  const [first, second, third, ...bakiElements] = [2, 1, 4, 5, 7, 8]
  console.log("first: ", first)
  console.log('second: ', second)
  console.log('bakiElements/ Rest Elements: ', bakiElements)




}