/*
   
Implementation file for Binary Search Tree

*/
class Tree {
  constructor() {
    this.rootNode = null;
  }

  insertNode(value) {
    let newNode = new TreeNode(value);

    // check if root node exists - insert new node as root if it doesn't, else...
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      // capture the root node as current
      let currentNode = this.rootNode;
      while (true) {
        /* while the previous expression is true, check if the value entered is greater than or less than the value of the current node
            IF it's less than the current node's value, insert it as the left child of the current node
            Else if it's greater, insert it as the right-child of the current Node
        */
        if (value === currentNode.value) return undefined;
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  findNode(value) {
    if (this.rootNode === null) return;
    let current = this.rootNode;
    // track if you've found node or not
    let found = false;

    while (current && !found) {
      // if the inputed value is less than the current node, make the left child the active 'current' node
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  breadthFirstTraversal() {
    let node = this.rootNode;
    let queue = [];
    let finalNodeList = [];
    // add the default root value to the queue
    queue.push(node);
    while (queue.length) {
      // while there is a value in the queue - remove the first value
      node = queue.shift();

      // push dequeued value into final Node List
      finalNodeList.push(node.value);
      // check if the dequeued node has any children and add them to the queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return finalNodeList;
  }

  /* 
  for every tree, we need to visit every child node...then traverse the left and the right 

  For every node, traverse the left first, then traverse the right...
  
  so, access first node, store it in a 'current node' variable,
  RECURSIVE BEHAVIOR-----check if it has children - access the left child node FIRST and update the 'current' variable----------
  then access the right child node with the same behavior

  Essentially, for each node...we recursively access all nodes on the left, then all nodes on the right;
*/

  depthFirstTraversal() {
    let currentNode = this.rootNode;
    let nodeStack = [];
    let finalStack = [];
    nodeStack.push(currentNode);
    // to enable 'stack' behavior, we exclusively use push and pop methods to interact with the stack;

    /* 
         the while logic goes, 
      */
    while (nodeStack.length) {
      currentNode = nodeStack.pop();
      finalStack.push(currentNode.value);

      if (currentNode.right) nodeStack.push(currentNode.right);
      if (currentNode.left) nodeStack.push(currentNode.left);
    }
    return finalStack;
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let newTree = new Tree();

newTree.insertNode(10);
newTree.insertNode(6);
newTree.insertNode(3);
newTree.insertNode(8);
newTree.insertNode(15);
newTree.insertNode(20);

console.log(newTree.depthFirstTraversal());
