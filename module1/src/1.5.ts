{

  // Reference Type --> Object

  const user: {
    readonly company: string;
    firstName: string;
    middleName?: string // optional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: "ABC",
    firstName: "Subas",
    lastName: "Roy",
    isMarried: true
  }


  user.company = "fn"


}
