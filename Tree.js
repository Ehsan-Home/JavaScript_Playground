class MyNode {
  right;
  left;
  value;

  constructor(value) {
    this.value = value;
  }

  addNode(value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new MyNode(value);
        return;
      } else {
        this.left.addNode(value);
      }
    } else {
      if (!this.right) {
        this.right = new MyNode(value);
        return;
      } else {
        this.right.addNode(value);
      }
    }
  }

  // No need for printValues since we are printing using traversing
  //   printValues() {
  //     console.log(this.value);
  //     if (this.left) {
  //       this.left.printValues();
  //     }
  //     if (this.right) {
  //       this.right.printValues();
  //     }
  //   }

  dfsPostOrder() {
    if (this.left) {
      this.left.dfsPostOrder();
    }
    if (this.right) {
      this.right.dfsPostOrder();
    }
    console.log(this.value);
  }

  dfsInOrder() {
    if (this.left) {
      this.left.dfsInOrder();
    }
    console.log(this.value);
    if (this.right) {
      this.right.dfsInOrder();
    }
  }

  dfsPreOrder() {
    console.log(this.value);
    if (this.left) {
      this.left.dfsPreOrder();
    }
    if (this.right) {
      this.right.dfsPreOrder();
    }
  }

  bfs() {
    let queue = [];
    queue.push(this);
    while (queue.length !== 0) {
      let node = queue[0];
      queue = queue.slice(1);
      console.log(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  treeHeight() {
    let leftSum = 0;
    let rightSum = 0;

    if (this.left) {
      leftSum = 1 + this.left.treeHeight();
    }

    if (this.right) {
      rightSum = 1 + this.right.treeHeight();
    }

    return Math.max(leftSum, rightSum);
    // if (!this.left || !this.right) {
    //   return -1;
    // }

    // return Math.max(1 + this.left.treeHeight(), 1 + this.right.treeHeight());
  }
}

// ***********************
// let tree = new MyNode(4);
// tree.addNode(8);
// tree.addNode(7);
// tree.addNode(9);
// tree.addNode(1);
// tree.addNode(2);
// tree.addNode(0);
// tree.addNode(-1);

// console.log(tree.treeHeight());
// console.log(treeHeight(tree));

// ***********************
// Functions can also be declared outside of the Node class
function treeHeight(root) {
  if (!root) {
    return -1;
  }

  return Math.max(1 + treeHeight(root.left), 1 + treeHeight(root.right));
}

function addNode(root, value) {
  if (root.value <= value) {
    if (!root.right) {
      root.right = new MyNode(value);
      return;
    }
    addNode(root.right, value);
  } else {
    if (!root.left) {
      root.left = new MyNode(value);
      return;
    }
    addNode(root.left, value);
  }
}

function addNode2(root, value) {
  if (!root) {
    root = new MyNode(value);
  }

  if (root.value >= value) {
    addNode2(root.right, value);
  } else {
    addNode2(root.left, value);
  }
}

let tree = new MyNode(4);
tree.addNode(8);
tree.addNode(7);
tree.addNode(9);
tree.addNode(1);
tree.addNode(2);
tree.addNode(0);
tree.addNode(-1);

bfs();
