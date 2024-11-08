// basic data types

const age: number = 25;
const yourName: string = "Subas Roy";
const isActive: boolean = true;

// array
const numbers: number[] = [1, 2, 3, 4, 5]; // array(same type data)

const info: [string, string, number, number, null] = ["Fahim", "Shafayet", 41, 35, null] // tuple(multipple type data)


// type of object
type PersonType = {
  name: string;
  age: number | string;
  isActive: true;
  designation: string;
  company: string
}

// object
const person: PersonType = {
  name: "Shariful Islam",
  age: 45,
  isActive: true,
  designation: "Next Level Developer",
  company: "Programming Hero"
}
