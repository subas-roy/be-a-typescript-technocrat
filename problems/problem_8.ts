{
  // Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.

  class Car {
    // brand: string;
    // model: string;
    // year: number;

    // constructor(brand: string, model: string, year: number) {
    //   this.brand = brand;
    //   this.model = model;
    //   this.year = year;
    // }


    // shorcut constructor
    constructor(
      public brand: string,
      public model: string,
      public year: number
    ) {}

    displayInfo(): string {
      return `Your car model is ${this.model} from the company ${this.brand} released in ${this.year}`
    }
  }

  const mycar = new Car("BMW", "M7", 2024);
  console.log(mycar.displayInfo());
  



  //
}