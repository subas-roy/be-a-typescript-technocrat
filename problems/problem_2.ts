{
  // Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

  const findLargestNumber = (nums: number[]): number => {
    return Math.max(...nums)
  }

  const maxElement = findLargestNumber([1,2,3,4,4,6,7,8,99]);

  console.log(maxElement);

  //
}