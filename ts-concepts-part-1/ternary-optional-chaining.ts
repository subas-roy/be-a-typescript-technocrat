{
  // ternary operator
  const isAdmin = false;
  const message: string | number = isAdmin ? "Welcome Admin" : 17

  console.log(message)


  const data = {
    name: "Hasib",
    address: "Dhaka, bangladesh"
  }

  console.log(data?.name?.firstNane)
  //
}