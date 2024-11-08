{
  // function getLength<T>(str: T) {
  //   return str.length; // here is a problem, to solve this we need to use constraint
  // }

  // console.log(getLength<string>("hello world"))



  // constraints
  function getLength<T extends { length: number }>(str: T) { // here "{ length: number }" is constraint
    return str.length;
  }

  console.log(getLength<string>("hello world"))



  //
}