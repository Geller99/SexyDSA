/* 
    
    Implement Node Class
    Implement singly linked list class with methods
    
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
    return current;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }
    let current = this.head;
    let previousValue = current;

    while (current.next !== null) {
      previousValue = current;
      current = current.next;
    }

    this.tail = previousValue;
    this.tail.next = null;
    this.length--;
    return current;
  }

  shift() {
    if (this.head === null) return undefined;
    let current = this.head;
    let newHead;

    newHead = current.next;
    this.head = newHead;
    this.length--;
    return current;
  }

  unShift(val) {
    let newHead = new Node(val);
    if (!this.head || this.head === null) {
      this.head = newHead;
      this.tail = this.head;
    }
    let currentHead = this.head;
    currentHead = newHead.next;
    this.head = newHead;

    this.length++;
    return this;
  }

  static get(val) {
    let counter = 0;
    if (val < 0 || val >= this.length) return null;

    let current = this.head;
    while (current.next !== null && counter !== val) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(value, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    } else return false;
  }

  insert(value, index) {
    let newNode = new Node(value);
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) !!this.push(value);
    if (index === 0) !!this.unShift(value);

    let previousNodeindex = index - 1;
    let previousNode = this.get(previousNodeindex);

    if (previousNodeindex < 0 ) return false;
    else {
      let temp = previousNode.next;
      previousNode.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
  }

  remove(index) {
     if (index === 0) return this.shift();
     if(index === this.length - 1) return this.pop();
     if(index < 0 || index > this.length) return;

     let previousNode = this.get(index - 1);
     let currentNode = this.get(index);
     previousNode.next = currentNode.next;
     currentNode.next = null;

     
     this.length--;
     return currentNode;

  }

  reverse() {
    if (this.head === null || this.length === 0) return undefined;
    if (this.length < 2 ) return this.head = this.tail;
    
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let previous = null;

    for(let i = 0; i < this.length; i++) {

      next = node.next; 
      node.next = previous;
      previous = node;
      node = next;

    }
    return this;

  }
}

let list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");


console.log(list.head);

module.exports = {
  SinglyLinkedList, 
  Node
}

