/* A datastructure based on the FiFo Principle 
            First in First out

    used in implementing game queues, background processes etc
  */

/*  --> [6][5][4][3][2][1] -->   I this were a stream or a hose. the first piece into the hose would be 
                                     the first one out at the other end - optimally

    */

// since the chose structure for executing a Queue is similar to a linkedList, it has first and last values, along with a size

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  addToQueue(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    ++this.size;
  }

  deQueue() {
    if (!this.size) return "cannot remove from empty queue";
    if (this.size === 1) return null;
    if(this.first === this.last) return this.last = null;
    
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.value;
    

    return temp

  }

  peekQueue() {
    return this.first;
  }
}

// each member of a queue class is a node with a value and a next property pointing at the next node in the data structure

class Node {
  constructor(value) {
    this.value = value;
    this.next = value;
  }
}

let newQueue = new Queue();

newQueue.addToQueue(2);
newQueue.addToQueue(3);
newQueue.addToQueue(4);
newQueue.addToQueue(5);
newQueue.deQueue();

console.log(newQueue);
