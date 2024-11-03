{
  //generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string
  }

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle

  const getPropetyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key]
  }

  const user = {
    name: 'Mr. Subas',
    age: 26,
    addres: 'dhk'
  }

  const car = {
    model: "Toyota",
    year: 200
  }
  const result1 = getPropetyValue(car, "year")





  //
}