{
  // Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

  function filterEvenNumbers(nums: number[]): number[] {
    return nums.filter(num => num % 2 == 0);
  }

  const evens = filterEvenNumbers([1,2,3,4,5,6,7,8,9])
  console.log(evens)

  //
}