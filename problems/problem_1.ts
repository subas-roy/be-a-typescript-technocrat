{
  // Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

  // function
  // function repeatString(str: string, num: number) {
  //   return str.repeat(num);
  // }

  // arrow function
  const repeatString = (str: string, num: number) => {
    return str.repeat(num);
  }

  console.log(repeatString("Naim ", 5))



  
  // test "repeat()" functioin (optional)
  const str = "Hello!"
  str.repeat(10)
  console.log(str.repeat(10))


  //
}