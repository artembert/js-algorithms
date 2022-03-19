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

class BinarySearchTree {
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
const tree = new BinarySearchTree();
const children = [17, 13, 11, 23, 29];
children.forEach((item) => {
  tree.create(item);
});
console.log("children:", children);
console.log("BinarySearchTree", tree);

// breadthFirstSearch
function breadthFirstSearch(tree: BinarySearchTree) {
  const visited: number[] = [];
  const queue: TreeNode[] = [];
  let current: TreeNode = tree.root;

  queue.push(current);
  while (queue.length) {
    current = queue.shift();
    visited.push(current.val);

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return visited;
}
console.log("breadthFirstSearch", breadthFirstSearch(tree));
