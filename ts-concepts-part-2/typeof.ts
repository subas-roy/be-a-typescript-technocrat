{
  // Movie name
  const MovieName = "Deadpool"

  // use "typeof"
  type MovieType = typeof MovieName; // as string literal

  const movie = {
    title: "Rock On",
    director: "Firoz",
  }

  type movieDetails = typeof movie; // type of object

  const newMovie: movieDetails = {
    title: "23",
    director: "Mir"
  };

  type DetailsLog = { // as typpe guard
    message: string;
    level: "info" | "warn" | "error";
  }

  function logMessage(input: string | number | DetailsLog) {
    if (typeof input === "string") {
      console.log("simple message info: ", input)
    }
    else if (typeof input === "number") {
      console.log("Error code: ", input)
    }
    else if ("message" in input && "level" in input) { // usage of "in" type guard
      console.log(`danger level ${input.level} indtructions for Next Level Dev: ${input.message}`)
    }
  }

  const test = logMessage({
    message: "Bhai joldi google koren",
    level: "error"
  })
  // console.log(test)


  //
}