class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else if (this.first !== null) {
      let currentFirst = this.first;
      this.first = newNode;
      this.first.next = currentFirst;
    }
    this.size++;
  }

  pop() {
    if (!this.first) return null ;
    let previousFirst = this.first;
    this.first = previousFirst.next;
    --this.size;

    return previousFirst.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.pop();

console.log(newStack);
