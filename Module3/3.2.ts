{
  // oop inheritance

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`)
    }
  }

  class Student extends Person{
    constructor(name: string, age: number, address: string) {
      super(name, age, address)
    }
  }
  // instance
  const student = new Student("Mr. Student", 20, "Uganda")
  student.getSleep


  class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
      super(name, age, address)
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will sleep for ${numOfClass}`)
    }
  }
  // instance
  const teacher = new Teacher("Mr. Teacher", 40, "Uganda", "professor")
  teacher.takeClass

  //
}