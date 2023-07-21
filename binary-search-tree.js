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
    const newNode = new Node(val);
    
    if (!this.root) {
      this.root = newNode;
      return this;
    }
  
    let current = this.root;
  
    while (true) {
      if (val === current.val) return undefined; // Avoid duplicates (if desired)
      
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
  
    if (!this.root) {
      this.root = newNode;
      return this;
    }
  
    function insertNode(node) {
      if (val === node.val) return undefined; // Avoid duplicates (if desired)
  
      if (val < node.val) {
        if (!node.left) {
          node.left = newNode;
          return;
        }
        insertNode(node.left);
      } else {
        if (!node.right) {
          node.right = newNode;
          return;
        }
        insertNode(node.right);
      }
    }
  
    insertNode(this.root);
    return this;
  }
  

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
  
    while (current) {
      if (val === current.val) return current;
      
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  
    return undefined;
  }
  

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function searchNode(node) {
      if (!node) return undefined;
      if (val === node.val) return node;
  
      if (val < node.val) {
        return searchNode(node.left);
      } else {
        return searchNode(node.right);
      }
    }
  
    return searchNode(this.root);
  }
  

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];
  
    function traverse(node) {
      if (node) {
        visited.push(node.val);
        traverse(node.left);
        traverse(node.right);
      }
    }
  
    traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];
  
    function traverse(node) {
      if (node) {
        traverse(node.left);
        visited.push(node.val);
        traverse(node.right);
      }
    }
  
    traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];
  
    function traverse(node) {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        visited.push(node.val);
      }
    }
  
    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = [];
    const queue = [];
    let node;
  
    if (!this.root) return visited;
  
    queue.push(this.root);
  
    while (queue.length) {
      node = queue.shift();
      visited.push(node.val);
  
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  
    return visited;
  }
}

module.exports = BinarySearchTree;
