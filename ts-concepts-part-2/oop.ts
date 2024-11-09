{
  // class ---> object blue print --> method
  // inheritance ---> parent class ---> 
  // absbtuction ---> engine kivabe kaj korche na jene kajosiddhi
  // encapsulation ---> alada kore jela
  // polimorphism ---> class --> instance --> function

  // Inheritance
  class MusicalInstrument {
    name: string;

    // constructor allows to initialize the properties of class
    constructor(name: string,) { 
      this.name = name;
    }

    play() {
      console.log(`Playing the ${this.name}`);
    }
  }

  class Guiter extends MusicalInstrument {
    constructor() {
      super("Guiter")
    }

    tune() {
      console.log(`Tuning kortechi... ${this.name}`)
    }
  }

  class Piano extends MusicalInstrument {
    constructor() {
      super("Piano")
    }

    openLid() {
      console.log(`Opening the lid..${this.name}`)
    }
  }

  const guiterist = new Guiter();
  console.log(guiterist.name, guiterist.play())




  //
}