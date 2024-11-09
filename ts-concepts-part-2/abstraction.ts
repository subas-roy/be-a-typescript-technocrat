{
  //

  class CoffeeMachine {
    private isPowerOn: boolean = false;

    powerOn() {
      this.isPowerOn = true;
      console.log("Coffee machine is on");
      return "Coffee banan";
    }

    makeCoffee() {
      if(this.isPowerOn) {
        console.log("Coffee brewing...");
      } else {
        console.log("Bhai office chere bahire gelam");
      }
    }

    powerOff() {
      this.isPowerOn = false;
      console.log("Coffee machine power off");
    }
  }

  const myoffeeMachine = new CoffeeMachine();
  console.log(myoffeeMachine.powerOn());



  //
}