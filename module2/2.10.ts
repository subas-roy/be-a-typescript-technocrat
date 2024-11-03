{
  // mapped types

  const arrOfNumbers: number[] = [1, 4, 5];
  // const arrOfStrings: string[] = ["1","4","5"]

  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrOfStrings)

  type Height = AreaNumber['height'] // look up type

  type AreaNumber = {
    height: number;
    width: number;
  }

  // type AreaString  ={
  //   height: string;
  //   width: string;
  // }
  // keyof AreaNumber => "height" | "width"

  // T => {height:string;width:number}
  // key => T["width"]
  type AreaString<T> = {
    [key in keyof T]: string;
  };

  const area1: AreaString<{ height: string; width: number }> => {
    height: "100",
    width: 50
  }

  
  //
}