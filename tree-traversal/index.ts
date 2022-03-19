type Side = "left" | "right";

class TreeNode {
  public val: number;
  public right: TreeNode | null;
  public left: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  public root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  create(val: number) {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    const addSide = (side: Side) => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      }
      current = current[side];
    };

    while (true) {
      if (val === current.val) {
        return this;
      }
      if (val < current.val) {
        addSide("left");
      } else {
        addSide("right");
      }
    }
  }
}

// create simple binary tree
const tree = new BST();
tree.create(17);
tree.create(13);
tree.create(23);
tree.create(11);
tree.create(29);
console.log(tree);
