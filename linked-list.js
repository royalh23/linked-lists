import Node from './node.js';

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    if (this.headNode === null) this.prepend(value);
    else {
      let temp = this.headNode;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new Node(value);
    }
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode);
  }

  size() {
    if (this.headNode === null) return 0;
    let count = 0;
    let temp = this.headNode;
    while (temp !== null) {
      count += 1;
      temp = temp.next;
    }
    return count;
  }

  head() {
    return this.headNode;
  }
}
