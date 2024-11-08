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

  // function getBookProperty<T, K extends keyof T>(book: T, key: K): T[k] {
  //   return book[key]
  // }


  function getBookProperty<T, K extends keyof T>(book: T, key: K): T[k] {
    return book[key]
  }




}