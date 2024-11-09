{
  // define a simple book type
  type Book = {
    title: string;
    author: string;
    yearPublish: number;
  };


  // use "keyof" to get keys of the Book type
  type BookKeys = keyof Book;

  // Book[title] = "Typescript"

  function getBookProperty<T, K extends keyof T>(book: T, key: K): T[K] {
    return book[key]
  }

  const myBook: Book = {
    title: "Learn TypeScript",
    author: "Mir",
    yearPublish: 2025
  }

  const author = getBookProperty(myBook, "author")

  console.log(author)


//
}