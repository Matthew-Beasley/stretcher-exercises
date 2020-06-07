class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0;
  }
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  pop() {
    let popped = this.head.data;
    this.head = this.head.next;
    this.length--;
    return popped;
  }
}

const list = new LinkedList();
list.push(10);
list.push(9);
list.push(8)

console.log(list.length)
console.log(list)

console.log('pop', list.pop());

console.log(list.length)
console.log(list)
