{
  // utility types

  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  }

  type NameAge = Pick<Person, "name"|"age">

  // Omit
  type ContactInfo = Omit<Person, "name"|"age">

  // Required
  type PersonReuired = Required<Person>

  // Partial
  type PersonPartial = Partial<Person>

  // Readonly
  type PersonReadOnly = Readonly<Person>
  const person1: PersonReadOnly = {
    name: 'Mr X',
    age: 100,
    contactNo: '017'
  }
  person1.name = "Mr Y"

  // Record
  // type MyObj = {
  //   a: string, 
  //   b: string
  // }

  type MyObj = Record<string, string>

  const EmptyObj: Record<string, unknown> = {}

  const obj1: MyObj = {
    a: "aa", 
    b: "bb",
    c: "cc",
    d: 6
  }


  //
}