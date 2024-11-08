{
  // type assertion
  const message: unknown = "Hello world"
  const messageLength = (message as string).length // here "(message as string) is type assertion"
  console.log(messageLength)
  


  //
}