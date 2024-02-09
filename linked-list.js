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

  tail() {
    if (this.headNode === null) return null;
    let temp = this.headNode;
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp;
  }

  at(index) {
    let count = 0;
    let temp = this.headNode;
    while (count < index) {
      if (temp === null) return null;
      count += 1;
      temp = temp.next;
    }
    return temp;
  }
}

// const ll = new LinkedList();
// ll.append(1);
// ll.append(2);
// ll.append(3);
// ll.append(4);
// ll.append(5);
// console.log(ll);
// console.log(ll.at(4));
