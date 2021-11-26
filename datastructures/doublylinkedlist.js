class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(item) {
    let node = new Node(item);
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = this.head;
    }
    let currentTail = this.tail;
    this.tail.next = node;
    node.prev = currentTail;
    node.next = null;
    this.tail = node;
    this.length++;

    return this;
  }

  pop() {
    if (this.head === null && this.tail === null) return undefined;
    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return currentTail;
    }
    this.tail = currentTail.prev;
    this.tail.next = null;
    currentTail.next = null;
    currentTail.prev = null;
    this.length--;

    return currentTail;
  }

  shift() {
    let currentHead = this.head;
    if (this.head === null && this.tail === null) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return currentTail;
    }

    this.head = this.head.next;
    this.head.prev = null;
    currentHead.next = null;
    this.length--;

    return currentHead;
  }

  unshift(item) {
    let node = new Node(item);
    let currentHead = this.head;

    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = this.head;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0) return "Hell naw";
    if (index >= this.length) return null;
    let halfListLength = this.length / 2;
    let current = this.head;
    let startListCounter = 0;
    let endListCounter = this.length - 1;
    if (index <= halfListLength) {
      console.log("iterating from start");
      while (startListCounter !== index) {
        current = current.next;
        startListCounter++;
      }
    } else if (index > halfListLength) {
      console.log("Iterating from end");
      current = this.tail;
      while (endListCounter !== index) {
        current = current.prev;
        endListCounter--;
      }
    }

    return current;
  }

  set(item, index) {
    if (this.head === null || this.tail === null) return null;

    let targetNode = this.get(index);
    if (targetNode !== null) {
      targetNode.val = item;
      return this;
    }
    return false;
  }


  insert(item, index) {
    if(index < 0 || index > this.length ) return "hell naw";
    if(index === 0) return this.unshift(item);
    if(index === this.length) return this.push(item);

    
    let insertNode = new Node(item);
    let previousNode = this.get(index - 1);
    let nextNode = this.get(index);

 
    previousNode.next = insertNode;
    nextNode.prev = insertNode;
    insertNode.prev = previousNode;
    insertNode.next = nextNode;
    this.length++;

    return this;

  }

  remove(index) {
    if(index < 0 || index > this.length) return "hell naw";
    if(index === 0) return this.shift();
    if(index === this.length) return this.pop();

    let currentNode = this.get(index);
    let previousNode = this.get(index - 1);
    let nextNode = this.get(index + 1);

    previousNode.next = nextNode;
    nextNode.prev = previousNode;
    currentNode.next = null;
    currentNode.prev = null;
    this.length--;

    return currentNode;


  }
}

let list = new DoublyLinkedList();
list.push(5);
list.push(7);
list.push(3);
list.push(6);
list.push(9);
list.push(12);
list.push("him");
list.push("her");




console.log(list.remove(3))
console.log(list)

// each node points in both directions
