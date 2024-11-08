{
  // arrays using "type[]"
  // const numArray: number[] = [1, 2, 3, 4, 5, 6];
  // const stringAray: string[] = ["sk", "Mir", "Raj"];
  // const boolArray: boolean[] = [true, false, true];

  // using "Array<type>" keyword
  // const numArray: Array<number> = [1, 2, 3, 4, 5, 6];
  // const stringAray: Array<string> = ["sk", "Mir", "Raj"];
  // const boolArray: Array<boolean> = [true, false, true];

  type NumberArrayType = Array<number> // single array using type type
  const numArray: NumberArrayType = [1, 2, 3, 4, 5, 6];

  // using "typeName<T>" type parameter, Imagine type type like a function and receieve parameter pass while creating/initialing the array
  type ArrayType<T> = Array<T> // here "T" is like parameter
  const stringAray: ArrayType<string> = ["sk", "Mir", "Raj"];
  const boolArray: ArrayType<boolean> = [true, false, true];



  // interface with generics / type variable
  interface IPerson<T, P, Q, M> { // T = number, P = boolean, Q = string, M = number
    name: string;
    age: M; // number
    isActive: P; // boolean
    designation: Q; // string
    id: T; // number
  }

  const person: IPerson<number, boolean, string, number> = {
    name: "Samsu",
    age: 25,
    isActive: true,
    designation: "Developer",
    id: 12
  }

  // console.log(person)



  // function with generics
  // const showMessage = <T, P>(message1: T, message2: P) => {
  //   return { message1, message2 }
  // }

  // console.log(showMessage<string, boolean>(
  //   "123654",
  //   true
  // ))



  // function with object parameter
  const showMessage = <T, P, I>(
    message1: T,
    message2: P,
    personInfo: I
  ) => {
    return { message1, message2, personInfo }
  }

  console.log(showMessage<string, boolean, IPerson<number, boolean, string, number>>(
    "123654",
    true,
    {
      name: "Samsu",
      age: 25,
      isActive: true,
      designation: "Developer",
      id: 12
    }
  ))

  //
}