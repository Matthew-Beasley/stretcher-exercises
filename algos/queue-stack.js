class MyQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    return this.queue.unshift(item);
  } 

  dequeue() {
    return this.queue.pop();
  }

  
} 