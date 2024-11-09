{
  // number type array
  // function reverseArray(arr: number[]): number[] { 
  //   return arr.reverse()
  // }

  // Using Generic
  function reverseArray<T>(arr: T[]): T[] { // ekhane T type er array parameter hiseb recieve korci and return hobe T typer array
    return arr.reverse()
  }

  console.log(reverseArray([1,2,3,4,5,6]))
  console.log(reverseArray(['first', 'second', 'third']))



  //
}