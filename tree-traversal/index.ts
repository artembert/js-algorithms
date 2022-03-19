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
const children = [20, 14, 57, 9, 19, 31, 62, 3, 11, 72];
children.forEach((item) => {
  tree.create(item);
});
console.log("children:", children);
console.log("BinarySearchTree", tree);

// Breadth-First Search / Поиск в ширину
function breadthFirstSearch(tree: BinarySearchTree): number[] {
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
console.log("Breadth-First Search", breadthFirstSearch(tree));

// Depth-First Search / From the root to leafs, started from left / Поиск в глубину
function preOrderDFSearch(tree: BinarySearchTree): number[] {
  const visited: number[] = [];
  let current = tree.root;

  function traverse(node: TreeNode): void {
    visited.push(node.val);
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }

  traverse(current);
  return visited;
}
console.log("pre-order Depth-First Search", preOrderDFSearch(tree));

// Depth-First Search / From the leaf to the root
function postOrderDFSearch(tree: BinarySearchTree): number[] {
  const visited: number[] = [];
  let current = tree.root;

  function traverse(node: TreeNode): void {
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
    visited.push(node.val);
  }

  traverse(current);
  return visited;
}

console.log("post-order Depth-First Search", postOrderDFSearch(tree));

// Depth-First Search / From the leaf to the root but push node to the list of visited then left child is done
function inOrderDFSearch(tree: BinarySearchTree): number[] {
  const visited: number[] = [];
  let current = tree.root;

  function traverse(node: TreeNode): void {
    if (node.left) {
      traverse(node.left);
    }
    visited.push(node.val);
    if (node.right) {
      traverse(node.right);
    }
  }

  traverse(current);
  return visited;
}
console.log("in-order Depth-First Search", inOrderDFSearch(tree));
