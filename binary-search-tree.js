class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const addingNode = new Node(val);
    if (!this.root) {
      this.root = addingNode;
      return this;
    }

    let currNode = this.root

    while (true) {
      if (val > currNode.val) {
        if (!currNode.right) {
          currNode.right = addingNode;
          return this;
        }
        currNode = currNode.right;
      }
      if (val < currNode.val) {
        if (!currNode.left) {
          currNode.left = addingNode;
          return this;
        }
        currNode = currNode.left;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currNode = this.root) {
    const addingNode = new Node(val);
    if (!this.root) {
      this.root = addingNode;
      return this;
    }

    if (val < currNode.val) {
      if (!currNode.left) {
        currNode.left = addingNode;
        return this;
      }
      this.insertRecursively(val, currNode.left);
    }
    if (val > currNode.val) {
      if (!currNode.right) {
        currNode.right = addingNode;
        return this;
      }
      this.insertRecursively(val, currNode.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root
    while (currNode) {
      if (currNode.val === val) {
        return currNode;
      };
      if (val < currNode.val) {
        currNode = currNode.left;
      }
      if (val > currNode.val) {
        currNode = currNode.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currNode = this.root) {
    if (!currNode) return undefined;
    if (currNode.val === val) return currNode;
    if (val < currNode.val) {
      if (!currNode.left) return undefined;
      return this.findRecursively(val, currNode.left);

    }
    if (val > currNode.val) {
      if (!currNode.right) return undefined;
      return this.findRecursively(val, currNode.right);

    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];
    let currNode = this.root;
    function traverse(currNode){
      visited.push(currNode.val);
      currNode.left && traverse(currNode.left)
      currNode.right && traverse(currNode.right)
    }
    traverse(currNode)
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];
    let currNode = this.root;
    function traverse(currNode){
      currNode.left && traverse(currNode.left);
      visited.push(currNode.val);
      currNode.right && traverse(currNode.right);
    }
    traverse(currNode)
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];
    let currNode = this.root;
    function traverse(currNode){
      currNode.left && traverse(currNode.left);
      currNode.right && traverse(currNode.right);
      visited.push(currNode.val);
    }
    traverse(currNode)
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let currNode = this.root;
    let queue = [];
    let visited = [];
    queue.push(currNode);

    while(queue.length){
      currNode = queue.shift();
      visited.push(currNode.val);
      if(currNode.left){
        queue.push(currNode.left)
      };
      if(currNode.right){
        queue.push(currNode.right);
      };
    };
    return visited;
  }

}

module.exports = BinarySearchTree;
