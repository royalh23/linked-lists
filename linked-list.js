import Node from './node.js';

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) this.prepend(value);
    else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new Node(value);
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    if (this.head === null) return 0;
    let count = 0;
    let temp = this.head;
    while (temp !== null) {
      count += 1;
      temp = temp.next;
    }
    return count;
  }
}
