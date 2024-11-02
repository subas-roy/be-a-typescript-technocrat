{
  // generic type

  type GenericArray<T> = Array<T>

  // const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: Array<number> = [3, 6, 8];

  // const mentors: string[] = ['Mr X', 'Mr Y', 'Mr Z'];
  const mentors: Array<string> = ['Mr X', 'Mr Y', 'Mr Z'];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: Array<boolean> = [true, false, true];

  type User1 = {
    name: string;
    age: number
  }

  interface User2 {
    name: string;
    age: number
  }

  const user: GenericArray<User2> = [
    {
      name: 'Subas',
      age: 50
    },
    {
      name: "Jhank",
      age: 100
    }
  ]

  const add = (a: number, b: number) => a + b;
  add(30, 20)

  // generic tuple
  type GenericTuple<X, Y> = [X, Y]

  const people: GenericTuple<string, string> = ['Mr X', 'Mr Y']

  const UserWithID: GenericTuple<number, { name: string, email: string }> = [123, { name: 'Subas', email: 'a@gmail.com' }]





}