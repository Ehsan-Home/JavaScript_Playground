class MyNode {
  right;
  left;
  value;

  constructor(value) {
    this.value = value;
  }

  addNode(value) {
    if (value >= this.value) {
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

  printValues() {
    console.log(this.value);
    if (this.left) {
      this.left.printValues();
    }
    if (this.right) {
      this.right.printValues();
    }
  }
}

// ***********************
let tree = new MyNode(4);
tree.addNode(8);
tree.addNode(7);
tree.addNode(9);
tree.addNode(1);
tree.addNode(2);
tree.addNode(0);

tree.printValues();
