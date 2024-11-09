{
  //
  type Todo = {
    task: string;
    completed: boolean;
    duedate: string;
  }

  const requiredTodo: Todo = {
    task: "Ekta kaj",
    completed: false,
    duedate: "8th Nov"
  }

  // mapped type
  // T --> tast, completed, duedate
  type OptionalTodo = {
    [T in keyof Todo]?: Todo[T];
  }

  const task: OptionalTodo = {
    task: "Ajke kaj korbona"
  }



  //
}