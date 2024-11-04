{

  // class Counter {
  //   count: number = 0;
  //   increment() {
  //     return (this.count = this.count + 1)
  //   }
  //   decrement() {
  //     return (this.count = this.count -1)
  //   }
  // }

  // const instance1 = new Counter();
  // console.log(instance1.increment()) // 1 -> uses defferent memory
  // console.log(instance1.increment()) // 1 -> uses defferent memory
  // console.log(instance1.increment()) // 1 -> uses defferent memory

  // const instance2 = new Counter();
  // console.log(instance2.increment()) // 1 -> uses defferent memory
  // console.log(instance2.increment()) // 1 -> uses defferent memory


  // static
  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1)
    }
    static decrement() {
      return (Counter.count = Counter.count -1)
    }
  }

  // const instance1 = new Counter();
  console.log(Counter.increment()) // 1 -> uses same defferent memory

  // const instance2 = new Counter();
  console.log(Counter.increment()) // 1 -> uses same defferent memory




  //
}