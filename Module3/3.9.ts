{
  // abstruction : 1. interface 2. abstract

  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log('I am starting the car engine')
    }
    stopEngine(): void {
      console.log('I am stopping the car engine')
    }
    move(): void {
      console.log('I am moving the car')
    }
    test(): void {
      console.log('I am just testing the car')
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.move()



  // abstruct class  

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test(): void {
      console.log('I am just testing the car')
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log('I am starting the car engine')
    }
    stopEngine(): void {
      console.log('I am stopping the car engine')
    }
    move(): void {
      console.log('I am moving the car')
    }
  }
  
  const tyt = new ToyotaCar();
  tyt.startEngine()

  // const hondaCar = new Car2();
  // hondaCar.startEngine()

  
  //
}