class Tree {
  constructor() {
    this.rootNode = null;
  }

  insertNode(value) {
    let newNode = new TreeNode(value);

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      let currentNode = this.rootNode;
      while (true) {
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
newTree.insertNode(4);
newTree.insertNode(30);


console.log(newTree);
